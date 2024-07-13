<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'RoomID',
        'UserID',
        'start_date',
        'end_date',
        'total_price',
    ];

   public function rooms()
    {
        return $this->belongsToMany(Room::class);
    }
   public function user()
    {
        return $this->belongsTo(User::class);
    }
}
