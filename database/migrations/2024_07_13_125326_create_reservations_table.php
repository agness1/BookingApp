<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('RoomID')->references('id')->on('rooms')->cascadeOnDelete();
            $table->foreignId('UserID')->references('id')->on('users')->cascadeOnDelete();
            $table->date("start_date");
            $table->date("end_date");
            $table->decimal('total_price', total: 8, places: 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
