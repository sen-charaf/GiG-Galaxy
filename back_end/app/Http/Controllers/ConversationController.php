<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;

class ConversationController extends Controller
{
    public function get_convs()
    {

        $user = auth()->user();
        $user_id = $user->id;
        $convos = Conversation::where('user_id1', $user_id)->orWhere('user_id2', $user_id)->get();
        foreach ($convos as $convo) {
            if ($convo->user_id1 == $user_id) {
                $user2 = User::find($convo->user_id2);
                $convo->username = $user2->name;
                $convo->image = $user2->image;
            } else {
                $user2 = User::find($convo->user_id1);
                $convo->username = $user2->name;
                $convo->image = $user2->image;
            }
            $convo->last_message = Message::where('id', $convo->last_message_id)->first();
            
        }

        return $convos;
    }
}
