<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Country;

class CountryController extends Controller
{
    public function showCountries () 
    {
        $countries = Country::all();
    return response()->json([
        'country' => $countries
    ]);
    }
}
