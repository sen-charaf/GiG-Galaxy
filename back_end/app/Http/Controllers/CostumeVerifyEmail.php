<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class CostumeVerifyEmail extends Controller
{
    public function verifyEmail(Request $request)
    {
        $user = User::findOrFail($request->id);
        if (!hash_equals((string) $request->hash, sha1($user->getEmailForVerification()))) {
            return response()->json([
                "message" => "Unauthorized",
                "success" => false
            ]);
        }
        if ($user->hasVerifiedEmail()) {
            return response()->json([
                "message" => "User already verified!",
                "success" => false
            ]);
        }
       
        $token = $user->createToken('auth_token for '.$user->userName)->plainTextToken;
        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }
        

        return response()->json([
            "message" => "Email verified successfully!",
            "success" => true,
            "user" => $user,
            "token" => $token
        ]);
    }
}
