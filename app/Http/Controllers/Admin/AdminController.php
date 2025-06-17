<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function index()
    {
        if (Auth::user()) {
            return inertia('Admin/dashboard', [
                'title' => 'Admin Dashboard',
                'description' => 'This is the admin dashboard where you can manage the application settings and content.',
            ]);
        } else {
            return inertia('auth/login');
        }
    }
}
