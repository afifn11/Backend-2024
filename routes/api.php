<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\studentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/students', [StudentController::class, 'index']);
    Route::post('/students', [StudentController::class, 'store']);
    Route::post('/students/{students}', [StudentController::class, 'show']);
    Route::patch('/students/{students}', [StudentController::class, 'update']);
    Route::patch('/students/{students}/completed', [StudentController::class, 'completed']);
    Route::delete('/students/{students}', [StudentController::class, 'destroy']);
});


#Route Register dan login
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
