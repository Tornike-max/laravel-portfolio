<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use App\Models\Type;
use Illuminate\Http\Request;

class SkillsController extends Controller
{
    public function index(){
        $skills = Skill::query()->with('type')->orderBy("name",'asc')->get();
        $types = Type::query()->orderBy("type",'asc')->get();

        return inertia('Admin/skills',compact('skills', 'types'));
    }

    public function store(Request $request){
        $validatedData = $request->validate([
            'name'=>"required|string|max:20|min:1",
            'slug'=>"required|string|max:20|min:1",
            'icon' => 'required|image|mimes:jpeg,png,jpg,webp,gif|max:2048',
            "type_id"=>"required|number"
        ]);

        dd($validatedData);
    }
}
