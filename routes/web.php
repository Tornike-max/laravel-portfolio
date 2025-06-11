<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\TestimonialsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');



Route::get("/dashboard",[MainController::class,"index"])->name("dashboard");
Route::post("/testimonials/store",[TestimonialsController::class,'store'])->name("testimonials.store");

Route::get("/admin-secret",[AdminController::class,"index"])->middleware('auth')->name("admin.secret");

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
