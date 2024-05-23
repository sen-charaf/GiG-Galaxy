<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CostumeVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/singup',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
Route::get('email-verification',[CostumeVerifyEmail::class,'verifyEmail']);