<?php

namespace App\Http\Controllers;

use App\Events\MyEvent;
use App\Models\Conversation;
use App\Models\Message;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;


class MessageController extends Controller
{
    public function getMessagesByUser($user_id)
    {
        $messages = Message::where('sender_id', $user_id)->where('receiver_id', auth()->user()->id)->orWhere('sender_id', auth()->user()->id)->where('receiver_id', $user_id)->latest()->paginate(10);
        $results = [];
        foreach ($messages as $message) {
            if ($message->sender_id == auth()->user()->id) {
                $results[] = ["message" => $message, "username" => "Me"];
            } else {
                $message->username = User::find($message->sender_id)->name;
                $results[] = ["message" => $message, "username" => $message->username];
            }
        }
        return $results;
    }

    public function sendMessage(Request $request)
    {
        $validator = Validator($request->all(), [
            'receiver_id' => 'required|exists:users,id',
            'message' => 'required',
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
}
