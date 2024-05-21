<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'gender' => ['required', 'string', 'max:1'],
            'birth_date' => ['required', 'date'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'error' => $validator->messages(),
            ], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'gender' => $request->gender,
            'birth_date' => $request->birth_date,
        ]);

        $user->sendEmailVerificationNotification();
        return response()->json([
            'success' => true,
            'user' => $user,
        ]);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'error' => $validator->messages(),
            ], 422);
        }
        $user = User::where('email', $request->email)->whereNotNull('email_verified_at')->first();
        if ($user && Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            /** @var User $user */
            $user = Auth::user();
         
            $token = $user->createToken('auth_token')->plainTextToken;
            return response()->json([
                'success' => true,
                'user' => $user,
                'token' => $token
            ]);
        }

        return response()->json(['error' => 'Invalid login credentials'], 401);
    }

    public function logout()
    {
        if (Auth::check()) {
            /** @var User $user */
            $user = Auth::user();
            $user->tokens()->delete();
            return response()->json([
                'message' => 'Successfully logged out.',
            ]);
        } else {
            // User was not authenticated, handle the scenario if needed
            return response()->json([
                'message' => 'Not logged in.',
            ]);
        }
    }

}
