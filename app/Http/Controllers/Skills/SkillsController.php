<?php

namespace App\Http\Controllers\Skills;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillsController extends Controller
{
    public function getDefaultSkills()
    {
        $skills = [
            "Laravel"=>"Laravel",
            "React"=>"React",
            "TailwindCSS"=>"Tailwind CSS",
            "MySQL"=>"Mysql",
        ];


        return inertia("dashboard", [
            'skills' => $skills,
        ]);
    }
}
