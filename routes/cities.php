<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CityController;

Route::controller(CityController::class)->group(function () {
    Route::get('/cities', 'showCities');
});