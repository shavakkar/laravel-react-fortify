<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\RegisteredUserController;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;


Route::group(['middleware' => config('fortify.middleware', ['web'])], function (){
    Route::get('/', function () {
        return Inertia::render('welcome');
    })->name('home');

    Route::post('/login', [AuthenticatedSessionController::class, 'store'])->middleware(['guest:' . config('fortify.guard')])->name('login');

    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

    Route::post('/register', [RegisteredUserController::class, 'store'])->middleware(['guest:' . config('fortify.guard')])->name('register');
});

Route::get('/login', function () {
    return Inertia::render('auth/login');
})->middleware('guest')->name('login');

Route::get('/register', function () {
    return Inertia::render('auth/register');
})->middleware('guest')->name('register');
