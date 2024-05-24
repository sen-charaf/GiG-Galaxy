<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CostumeVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/get_current_user', [UserController::class, 'get_current_user']);
    Route::post('/update_users_info', [UserController::class, 'updateInfo']);
    Route::post('/update_email', [UserController::class, 'updateEmail']);
    Route::post('/update_password', [UserController::class, 'updatePassword']);
    Route::post('/delete_user', [UserController::class, 'deleteAccount']);
}
);

Route::post('/singup',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
Route::get('email-verification',[CostumeVerifyEmail::class,'verifyEmail']);