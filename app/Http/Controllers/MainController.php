<?php

namespace App\Http\Controllers;

use App\Models\Skill;
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
        $allskills = Skill::query()->with('type')->orderBy("id","asc")->get();

        dd($allskills);

        return inertia("dashboard", [
            'skills' => $skills,
            "types"=> $types,
            "allskills" => $allskills,
        ]);
    }
}
