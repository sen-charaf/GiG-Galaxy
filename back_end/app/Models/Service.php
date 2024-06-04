<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'user_id',
        'description',
        'price',
        'delivery_time',
        'images',
        'category',
        'sub_category',
        'tags',
        'rating',
        'orders_num',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function extras()
    {
        return $this->hasMany(Extra::class);
    }

    public function servicetags()
    {
        return $this->hasMany(ServiceTag::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function subcategory()
    {
        return $this->belongsTo(SubCategory::class, 'sub_category_id');
    }

    public function serviceimages()
    {
        return $this->hasMany(ServiceImage::class);
    }
}
