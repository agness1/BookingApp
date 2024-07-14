<?php

namespace App\Http\Controllers;
use App\Models\Hotel;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    public function showHotels()
    {
        $hotels = Hotel::all();
        return response()->json([
            'hotels' => $hotels
        ]);
    }
}
