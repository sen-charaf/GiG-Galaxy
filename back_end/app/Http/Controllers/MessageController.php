<?php

namespace App\Http\Controllers;

use App\Events\DeleteMessage;
use App\Events\MyEvent;
use App\Models\Conversation;
use App\Models\Message;
use App\Models\MessageAttachement;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class MessageController extends Controller
{
    public function getMessagesByUser($user_id)
    {
        $messages = Message::where('sender_id', $user_id)->where('receiver_id', auth()->user()->id)->orWhere('sender_id', auth()->user()->id)->where('receiver_id', $user_id)->latest()->paginate(10);
        $results = [];
        foreach ($messages as $message) {
            if ($message->sender_id == auth()->user()->id) {
                $attachments = $message->attachments;
                $results[] = ["message" => $message, "username" => "Me" , "attachments" => $attachments];
            } else {
                $message->username = User::find($message->sender_id)->name;
                $attachments = $message->attachments;
                $results[] = ["message" => $message, "username" => $message->username, "attachments" => $attachments];
            }
        }
        return $results;
    }

    public function sendMessage(Request $request)
    {
        $validator = Validator($request->all(), [
            'receiver_id' => 'required|exists:users,id',
            'message' => 'required',
            'attachments[]' => 'nullable',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }


        $message = new Message();
        $message->sender_id = auth()->user()->id;
        $message->receiver_id = $request->receiver_id;
        $conversation = Conversation::where('user_id1', auth()->user()->id)->where('user_id2', $request->receiver_id)
        ->orWhere('user_id1', $request->receiver_id)->where('user_id2', auth()->user()->id)->first();
        $message->conversation_id = $conversation->id;
        $message->message = $request->message;
        $message->save();

        $files = $request->attachments ?? [];
        
        $attachments = [];
        if ($files) {
            
            foreach ($files as $file) {
                $directory = 'attachments/' . Str::random(32);
                Storage::makeDirectory($directory);
                $model = [
                    'message_id' => $message->id,
                    'name' => $file->getClientOriginalName(),
                    'mime' => $file->getClientMimeType(),
                    'size' => $file->getSize(),
                    'path' => $file->store($directory, 'local'),
                ];
                
                $attachment = MessageAttachement::create($model);
                $attachments[] = $attachment;
            }
            $message->attachments = $attachments;
            
        }

        $userId1 = auth()->user()->id;
        $userId2 = $request->receiver_id;

        $conv = Conversation::where(function ($query) use ($userId1, $userId2) {
            $query->where('user_id1', $userId1)->where('user_id2', $userId2);
        })->orWhere(function ($query) use ($userId1, $userId2) {
            $query->where('user_id1', $userId2)->where('user_id2', $userId1);
        })->first();
        if ($conv) {
            $conv->update([
                'last_message_id' => $message->id,
            ]);
            
        } else {
           Conversation::create([
               'user_id1' => $userId1,
               'user_id2' => $userId2,
               'last_message_id' => $message->id,
           ]);
        }
        
        
        $senderName = "Me";
        $event = new MyEvent($message, $senderName);
        event($event);

        return ["message" => "message sent", 200];
    }
    
    public function deleteMessage(Request $request)
    {
        $message = Message::find($request->message_id);
        if ($message->sender_id != auth()->user()->id) {
            return ["message" => "You are not allowed to delete this message", 403];
        }
        $attachments = $message->attachments;
        foreach ($attachments as $attachment) {
            $filePath = $attachment->path;
            Storage::delete($filePath);
            $attachment->delete();
            
            /* $directories = Storage::directories('attachments'); */
        }
        $conversation = Conversation::find($message->conversation_id);
        if ($conversation->last_message_id == $message->id) {
            $new_last_message = Message::where('conversation_id', $message->conversation_id)->orderBy('id', 'desc')->skip(1)->limit(1)->first();
            if ($new_last_message) {
                $conversation->update(['last_message_id' => $new_last_message->id]);
            }else{
                $conversation->update(['last_message_id' => null]);
            }
        }
        event(new DeleteMessage($message->id));
        $message->delete();
        return ["message" => "message deleted", 200];
    }
}
