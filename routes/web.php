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

Route::get('/hotels', [HotelController::class, 'showHotels']);
Route::get('/cities', [CityController::class, 'showCities']);
Route::post('/search-available-hotels', [HotelController::class, 'showAvailableHotels']);
Route::post('/createReservation', [ReservationController::class, 'createReservation']);
Route::get('/reservations', [ReservationController::class, 'showReservation']);
Route::get('/hotel/{id}', [HotelController::class, 'showHotelDetails']);
Route::get('/review/{id}', [ReviewController::class, 'showHotelReview']);
Route::post('/createReview', [ReviewController::class, 'createReview']);
Route::get('/reviews/user', [ReviewController::class, 'showUserReview']);
Route::delete('/reviews/delete/{id}', [ReviewController::class, 'DeleteReview']);
Route::put('/reviews/update/{id}', [ReviewController::class, 'UpdateReview']);

require __DIR__ . '/auth.php';
