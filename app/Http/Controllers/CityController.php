<?php

namespace App\Http\Controllers;
use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    public function showCities () 
    {
        $cities = City::all();
    return response()->json([
        'city' => $cities
    ]);
    }
}
