<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ReviewController;

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

Route::get('/hotelDetails', function () {
    return Inertia::render('HotelPage/HotelDetails');
})->name('hotelDetails');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
require __DIR__.'/hotels.php';
require __DIR__.'/cities.php';
require __DIR__.'/reservations.php';
require __DIR__.'/reviews.php';