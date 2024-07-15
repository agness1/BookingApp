<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\CountryController;

Route::get('/', function () {
    return Inertia::render('HomePage/HomePage');
})->name('home');

Route::get('/hotelList', function () {
    return Inertia::render('HotelList/HotelList');
})->name('hotelList');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/hotelPage', function () {
    return Inertia::render('HotelPage/HotelPage');
})->name('hotelPage');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/hotels', [HotelController::class, 'showHotels']);
Route::get('/cities', [CityController::class, 'showCities']);
Route::get('/countries', [CountryController::class, 'showCountries']);

require __DIR__ . '/auth.php';
