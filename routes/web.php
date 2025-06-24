<?php

use App\Http\Controllers\Admin\AboutController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\SkillsController;
use App\Http\Controllers\Admin\WorkController;
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
Route::get("/admin-secret/skills",[SkillsController::class,"index"])->middleware('auth')->name("admin.secret.skills");
Route::post("/admin-secret/skills",[SkillsController::class,"store"])->middleware('auth')->name("admin.secret.skills.store");
Route::get("/admin-secret/work",[WorkController::class,"index"])->middleware('auth')->name("admin.secret.work");

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
