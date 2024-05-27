<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\MyEvent;

class ChatController extends Controller
{
    public function messages(Request $request)
    {
       $message = $request->input('message');
       $username = $request->input('username');
       event(new MyEvent($message, $username));
       return response()->json(['message' => 'success']);
    }
}
