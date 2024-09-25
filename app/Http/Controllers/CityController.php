<?php

namespace App\Http\Controllers;

use App\Models\City;

class CityController extends Controller
{
    public function showCities()
    {
        $cities = City::all();
        return response()->json([
            'cities' => $cities
        ]);
    }
}
