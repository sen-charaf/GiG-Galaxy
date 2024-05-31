<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Extra extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_id',
        'title',
        'description',
        'charge',
        'will_delay',
        'delay_time',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function orderextra()
    {
        return $this->hasMany(OrderExtra::class);
    }
}
