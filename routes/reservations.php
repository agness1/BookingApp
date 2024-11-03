<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReservationController;

Route::controller(ReservationController::class)->group(function () {
    Route::post('/createReservation', 'createReservation');
    Route::get('/reservations', 'showReservation');
});