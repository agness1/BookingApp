<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HotelController;

Route::controller(HotelController::class)->group(function () {
    Route::get('/hotels', 'showHotels');
    Route::get('/hotel/{id}', 'showHotelDetails');
    Route::post('/search-available-hotels', 'showAvailableHotels');
});