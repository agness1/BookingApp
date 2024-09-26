<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;
use App\Models\Hotel;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    public function showUserReview()
    {
        $user = Auth::user();
        $reviews = Review::where('user_id', $user->id)->get();
        $responseData = [];
        foreach ($reviews as $reviewItem) {
            $responseData[] = [
                'id' => $reviewItem->id,
                'title' => $reviewItem->title,
                'rate' => $reviewItem->rate,
                'description' => $reviewItem->description,
                'hotel' => $reviewItem->hotel->name
            ];
        }
        return response()->json($responseData);
    }
    public function showHotelReview($id)
    {
        $hotel = Hotel::find($id);
        $reviews = Review::where('hotel_id', $hotel->id)
            ->with('user')
            ->get();
        return response()->json($reviews);
    }
    public function createReview(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string',
            'rate' => 'required',
            'description' => 'required|string',
            'hotelId' => 'required',
            'userId' => 'required'
        ]);
        $review = Review::create([
            'title' => $validatedData['title'],
            'rate' => $validatedData['rate'],
            'description' => $validatedData['description'],
            'hotel_id' => $validatedData['hotelId'],
            'user_id' => $validatedData['userId']
        ]);
        return response()->json(['message' => 'Data added successfully', 'data' => $review], 201);
    }
    public function DeleteReview($id)
    {
        $review = Review::find($id);

        if (!$review) {
            return response()->json(['message' => 'Review not found'], 404);
        }

        $review->delete();

        return response()->json(['message' => 'Review deleted successfully']);
    }
}
