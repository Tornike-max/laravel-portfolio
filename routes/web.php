<?php

use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');



Route::get("/dashboard",[MainController::class,"index"])->name("dashboard");

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
