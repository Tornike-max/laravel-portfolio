<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function index()
    {
        return inertia('auth/login',[
            'title' => 'Admin Dashboard',
            'description' => 'This is the admin dashboard where you can manage the application settings and content.',
        ]);
    }
}
