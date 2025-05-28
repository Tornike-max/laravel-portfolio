<?php

namespace App\Http\Controllers;

use App\Models\Technology;
use App\Models\Type;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index(){

        $skills = [
        [
            "name" => "Laravel",
        ],
        [
            "name" => "React",
        ],
        [
            "name" => "Tailwind CSS",
        ],
        [
            "name" => "MySQL",
        ],
    ];

        $types = Type::query()->with('technologies')->get();

        return inertia("dashboard", [
            'skills' => $skills,
            "types"=> $types,
        ]);
    }
}
