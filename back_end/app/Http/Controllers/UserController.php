<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function get_current_user()
    {
        try {
            if (Auth::check()) {
                $user =  Auth::user();
                $user->image = $user->image ? asset($user->image) : null;
                return $user;
            }
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'error',
            ], 404);
        }
    }

    function updateInfo(Request $request)
    {
        /** @var User $user */

        $user = Auth::user();


        $validator = Validator::make($request->all(), [
            'name' => 'nullable|string|max:255',
            'bio' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Update only non-null fields
        $updateData = [];
        if ($request->has('name')) {
            $updateData['name'] = $request->name;
        }
        if ($request->has('bio')) {
           
            $updateData['bio'] = $request->bio;
        }
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
            $image->move('images/profiles', $imageName);
            $updateData['image'] = 'images/profiles/' . $imageName;
        }
        /** @var User $user */
        $user->update($updateData);

        return response()->json([
            'message' => 'User information updated successfully!',
            'user' => $user->fresh(), // Refresh user data after update
        ]);
    }

    public function updateEmail(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'current_password' => 'required|string',
            'email' => 'required|string|email|unique:users,email,' . Auth::id(),
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        /** @var User $user */
        $user = Auth::user();

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json(['message' => 'Invalid current password'], 401);
        }

        $user->update(['email' => $request->email]);

        return response()->json([
            'message' => 'Email updated successfully!',
            'user' => $user->fresh(), // Refresh user data after update
        ]);
    }
    public function updatePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'current_password' => 'required|string',
            'new_password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        /** @var User $user */
        $user = Auth::user();

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json(['message' => 'Invalid current password'], 401);
        }

        $user->update(['password' => Hash::make($request->new_password)]);

        return response()->json([
            'message' => 'Password updated successfully!',
        ]);
    }

    public function deleteAccount(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'password' => 'required|string', // Ensure current password is correct
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        /** @var User $user */
        $user = Auth::user();
        if (!Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid current password'], 401);
        }
        $user->delete();

        return response()->json([
            'message' => 'Account deleted successfully!',
        ], 200);
    }

}
