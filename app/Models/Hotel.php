<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'StarCount',
        'CitiesID',
        'image_url'
    ];

    public function city()
    {
        return $this->belongsTo(City::class);
    }
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
    public function rooms()
    {
        return $this->hasMany(Room::class);
    }
}
