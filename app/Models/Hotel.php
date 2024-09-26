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
        'star_count',
        'city_id',
        'image_url'
    ];

    public function city()
    {
        return $this->belongsTo(City::class, "city_id");
    }
    public function reviews()
    {
        return $this->hasMany(Review::class, "hotel_id");
    }
    public function rooms()
    {
        return $this->hasMany(Room::class, "hotel_id"); 
    }
}
