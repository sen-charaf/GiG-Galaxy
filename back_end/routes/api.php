<?php

use App\Http\Controllers\AttachementController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ConversationController;
use App\Http\Controllers\CostumeVerifyEmail;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ServiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/get_current_user', [UserController::class, 'get_current_user']);
    Route::post('/update_users_info', [UserController::class, 'updateInfo']);
    Route::post('/update_email', [UserController::class, 'updateEmail']);
    Route::post('/update_password', [UserController::class, 'updatePassword']);
    Route::post('/delete_user', [UserController::class, 'deleteAccount']);
    Route::post("/get_conversations",[ConversationController::class,'get_convs']);
    Route::post('/get_messagesByUser/{id}', [MessageController::class, 'getMessagesByUser']);
    Route::post("/send_message", [MessageController::class, 'sendMessage']);
    Route::post("/delete_message", [MessageController::class, 'deleteMessage']);
    Route::post("/delete_attachement", [AttachementController::class, 'deleteFile']);
    Route::post("/upload_service", [ServiceController::class, 'store']);
}
);

Route::get('/get_categories', [CategoriesController::class, 'getCategories']);
Route::get('/get_services', [ServiceController::class, 'index']);

Route::post('/singup',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
Route::get('email-verification',[CostumeVerifyEmail::class,'verifyEmail']);
Route::get('/download_file/{file_id}',[AttachementController::class,'downloadFile']);

Route::post("/chat",[ChatController::class,'messages']);


Route::get('/get_users',[UserController::class,'getAllUsers']);