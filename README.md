
# Hotel Reservation Application

## Overview
This is a hotel reservation application built using Laravel, React, TypeScript, and Tailwind CSS. The goal of the project is to provide users with an easy-to-use interface for searching, booking, and reviewing hotel stays.
## Features

- Hotel Availability Check: Users can search for available hotels based on their preferred dates. The app will show only the hotels that are available for the selected period.

- User Reviews: After completing their stay, users can leave reviews for their reservations to share their experiences.

- Booking for Registered Users: Hotel reservations can only be made by registered users. This ensures that bookings are managed securely and only by authenticated individuals.


## Screenshots
![Home Page](public/Screenshots/home_page_screen.png)
![Hotels](public/Screenshots/hotel_list_screen.png)
![hotel details](public/Screenshots/hotel_details_screen.png)
![Dashboard](public/Screenshots/dashboard_screen.png)

## Installation

To run the project locally, follow these steps:

 ### 1. Clone the repository:

```bash
git clone [repository-url]
cd hotel-reservation-app
```
### 2. Backend Setup (Laravel):
Navigate to the backend folder.

Install dependencies:

```bash
composer install
```
#### Set up the .env file and generate the application key:

```bash
cp .env.example .env
php artisan key:generate

```
#### Run migrations to set up the database:

```bash
php artisan migrate

```
### 3. Frontend Setup (React):
#### Navigate to the frontend folder.

#### Install dependencies:

```bash
npm install

```
#### Start the development server:

```bash
npm start

```
## Additional Notes
- Laravel Breeze provides authentication scaffolding, which makes managing user registration and login easier.
- Vite is used as the frontend build tool for faster development and hot module replacement.
- MUI is used for consistent and customizable UI components.
- React with TypeScript provides a strongly typed front end that enhances maintainability.

## Troubleshooting
If you encounter any issues, consider the following:

- Ensure all dependencies are installed correctly.
- Make sure the database is properly configured and running.
- Run migrations again if database changes have been made.


## Usage

#### Search Hotels: Users can search for hotels based on city and travel dates.
#### Book a Room: Only registered users can make reservations.
#### Leave a Review: Users can leave a review for a hotel they stayed in after their reservation is complete.