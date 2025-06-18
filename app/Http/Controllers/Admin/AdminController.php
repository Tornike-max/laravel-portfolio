<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Technology;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function index()
    {
        if (Auth::user() && Auth::user()->is_admin === 1) {
            $skillsCount = Skill::count();
            $projectsCount = Project::count(); 
            $techologiesCount = Technology::count(); 
            $testimonialsCount = Testimonial::count();

            $stats = [
                [
                    'value' => $skillsCount,
                    "label" => "Skills",
                ],
                [
                    'value' => $projectsCount,
                    "label" => "Projects",
                ],
                [
                    'value' => $techologiesCount,
                    "label" => "Technologies",
                ],
                [
                    'value' => $testimonialsCount,
                    "label" => "Testimonials",
                ],
            ];
            return inertia('Admin/dashboard', [
                "stats" => $stats,
                'user' => Auth::user(),
                "isAdmin" => Auth::user()->is_admin,
            ]);
        } else {
            return inertia('auth/login');
        }
    }
}
