<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Admin extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens ;

    protected $fillable = [
        'name',
        'email',
        'image',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function penalties() {
        return $this->hasMany(Penalty::class);
    }

    
       
}
