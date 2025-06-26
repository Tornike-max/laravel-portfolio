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

        return inertia('Admin/Skill/skills',compact('skills', 'types'));
    }

    public function store(Request $request){
        $validatedData = $request->validate([
            'name'=>"required|string|max:20|min:1",
            'slug'=>"required|string|max:20|min:1",
            'icon' => 'required|image|mimes:jpeg,png,jpg,webp,gif|max:2048',
            "type_id"=>"required|integer|exists:types,id"
        ]);

        $validatedData['icon'] = $request->file("icon")->store("skillIcons",'public');
        $validatedData['type_id'] = (int)$validatedData['type_id'];
        
        Skill::create($validatedData);

        return redirect()->back()->with('success', 'Skill created successfully!');
    }

    public function edit(Skill $skill){

        $skill->load('type');

        if (!$skill) {
            return redirect()->back()->with('error', 'Skill not found.');
        }

        $types = Type::query()->select(['type','id'])->orderBy("type",'asc')->get();
        
        return inertia("Admin/Skill/Edit",[
            'skill'=> $skill,
            'types'=> $types
        ]);
    }

    public function update(Request $request, Skill $skill){
        $validatedData = $request->validate([
            'name'=>"required|string|max:20|min:1",
            'slug'=>"required|string|max:20|min:1",
            'icon' => 'nullable|image|mimes:jpeg,png,jpg,webp,gif|max:2048',
            "type_id"=>"required|integer|exists:types,id"
        ]);

        if ($request['icon']) {
            if($skill['icon']){
                dd($skill['icon']);
                $skillIconPath = public_path('storage/' . $skill['icon']);
                if (file_exists($skillIconPath)) {
                    unlink($skillIconPath);
                } 
            $validatedData['icon'] = $request->file("icon")->store("skillIcons",'public');
            } else {
                unset($validatedData['icon']);
            }
        }

        $validatedData['type_id'] = (int)$validatedData['type_id'];

        $skill->update($validatedData);

        return redirect()->back()->with('success', 'Skill updated successfully!');
    }

    public function destroy(Skill $skill){
        if(!$skill){
            return redirect()->back()->with('error', 'Skill not found.');
        }

        if($skill->icon){
            $skillIconPath = public_path('storage/' . $skill->icon);
            if (file_exists($skillIconPath)) {
                unlink($skillIconPath);
            }
        }

        $skill->delete();

        return redirect()->back()->with('success', 'Skill deleted successfully!');
    }
}
