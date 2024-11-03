<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReviewController;

Route::controller(ReviewController::class)->group(function () {
    Route::get('/review/{id}', 'showHotelReview');
    Route::post('/createReview', 'createReview');
    Route::get('/reviews/user', 'showUserReview');
    Route::put('/reviews/update/{id}', 'updateReview');
    Route::delete('/reviews/delete/{id}', 'deleteReview');
});