<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;
use Illuminate\Support\Facades\Auth;

class ReservationController extends Controller
{
    public function showReservation()
    {
        $user = Auth::user();

        $reservations = Reservation::where('UserID', $user->id)
            ->with('rooms.hotel')
            ->get();

        return response()->json(['reservations' => $reservations]);
    }
    public function createReservation(Request $request)
    {
        $validatedData = $request->validate([
            'roomId' => 'required|integer|exists:rooms,id',
            'startDate' => 'required|date|after_or_equal:today',
            'endDate' => 'required|date|after:startDate',
            'totalPrice' => 'required|numeric|min:0'
        ]);

        $reservation = Reservation::create([
            'RoomID' => $validatedData['roomId'],
            'UserID' => Auth::id(),
            'start_date' => $validatedData['startDate'],
            'end_date' => $validatedData['endDate'],
            'total_price' => $validatedData['totalPrice']
        ]);
        return response()->json(['message' => 'Reservation created successfully', 'data' => $reservation], 201);
    }
}
