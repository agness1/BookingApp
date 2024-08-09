<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = [
       'price',
       'amount',
       'HotelID'
    ];

    public function hotel()
    {
        return $this->belongsTo(Hotel::class, 'HotelID');
    }
    public function reservations()
    {
        return $this->hasMany(Reservation::class, "RoomID"); 
    }
}
