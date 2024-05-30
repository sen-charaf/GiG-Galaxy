<?php

namespace App\Http\Controllers;

use App\Events\DeleteAttachement;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\MessageAttachement;

class AttachementController extends Controller
{
    public function downloadFile($attachmentId)
    {
        $attachment = MessageAttachement::find($attachmentId);

        if (Storage::disk('local')->exists($attachment->path)) {
            $fullPath = Storage::path($attachment->path);
            /* dd($fullPath); */
            return response()->download($fullPath, $attachment->name);
        } else {
            abort(404, 'File not found'); // Handle non-existent files
        }
    }

    public function deleteFile(Request $request)
    {
        $attachment = MessageAttachement::find($request->attachmentId);
        $messageId = $attachment->message_id;
        event(new DeleteAttachement($attachment->id, $messageId));
        $message = Message::find($messageId);
        if ($message->sender_id != auth()->user()->id) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
        $filePath = $attachment->path;
        Storage::delete($filePath);
        $attachment->delete();
        return response()->json(['message' => 'File deleted successfully']);
    }
}
