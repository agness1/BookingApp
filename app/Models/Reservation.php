<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'room_id',
        'user_id',
        'start_date',
        'end_date',
        'total_price',
    ];

   public function rooms()
    {
        return $this->belongsTo(Room::class, 'room_id' );
    }
   public function user()
    {
        return $this->belongsTo(User::class, "user_id");
    }
}
