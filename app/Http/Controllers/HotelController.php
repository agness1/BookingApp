<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use Illuminate\Http\Request;
use App\Models\City;
use App\Models\Room;
use App\Models\Reservation;
use Carbon\Carbon;

class HotelController extends Controller
{
    public function showHotels()
    {
        $hotels = Hotel::all();
        $responseData = [];

        foreach ($hotels as $hotelItem) {
            $responseData[] = [
                'id' => $hotelItem->id,
                'name' => $hotelItem->name,
                'description' => $hotelItem->description,
                'starCount' => $hotelItem->StarCount,
                'city' => $hotelItem->city->name,
                'image' => $hotelItem->image_url
            ];
        }
        return response()->json($responseData);
    }
    public function showAvailableHotels(Request $request)
    {
        $validatedData = $request->validate([
            'city' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
        ]);

        $cityName = $validatedData['city'];
        $startDate = Carbon::parse($validatedData['start_date'])->format('Y-m-d');
        $endDate = Carbon::parse($validatedData['end_date'])->format('Y-m-d');
        $city = City::where('name', $cityName)->with(['country'])->first();

        if (!$city) {
            return response()->json(['message' => 'City not found'], 404);
        }

        $hotels = Hotel::where('CitiesID', $city->id)
            ->with(['rooms', 'reviews'])
            ->get();

        $availableHotels = [];

        foreach ($hotels as $hotel) {
            foreach ($hotel->rooms as $room) {
                $hasReservation = Reservation::where('RoomID', $room->id)
                    ->where(function ($query) use ($startDate, $endDate) {
                        $query->whereBetween('start_date', [$startDate, $endDate])
                            ->orWhereBetween('end_date', [$startDate, $endDate])
                            ->orWhereRaw('? BETWEEN start_date AND end_date', [$startDate])
                            ->orWhereRaw('? BETWEEN start_date AND end_date', [$endDate]);
                    })
                    ->exists();
                if (!$hasReservation) {
                    $availableHotels[] = [
                        'hotel_name' => $hotel->name,
                        'hotel_id' => $hotel->id,
                        'hotel_description' => $hotel->description,
                        'hotel_img' => $hotel->image_url,
                        'hotel_StarCount' => $hotel->StarCount,
                        'city_name' => $city->name,
                        'country_name' => $city->country->name,
                        'reviews_count' => $hotel->reviews->count(),
                        'room' => [
                            'id' => $room->id,
                            'type' => $room->type,
                            'price' => $room->price,
                            'available_rooms' => $room->amount,
                        ],
                        'days' => Carbon::parse($startDate)->diffInDays(Carbon::parse($endDate)),
                        'start_date' => $startDate,
                        'end_date' => $endDate
                    ];
                }
            }
        }

        if (empty($availableHotels)) {
            return response()->json(['message' => 'No available hotels found for the selected dates.']);
        }

        return response()->json(['available_hotels' => $availableHotels]);
    }


    public function showHotelDetails($id)
    {
        $hotel = Hotel::find($id);

        if (!$hotel) {
            return response()->json(['message' => 'Hotel not found'], 404);
        }

        $hotelPrice = Room::where('HotelID', $hotel->id)->first();

        $city = City::where('id', $hotel->CitiesID)->first();

        if (!$hotel) {
            return response()->json(['message' => 'Hotel not found'], 404);
        }

        return response()->json(['hotel' => $hotel, 'city' => $city, 'hotelPrice' => $hotelPrice]);
    }
}
