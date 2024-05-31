<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceTag extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_id',
        'tag_id',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function tag()
    {
        return $this->belongsTo(Tag::class);
    }
}
