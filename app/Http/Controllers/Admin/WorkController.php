<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;

class WorkController extends Controller
{
    public function index(){

        $works = Project::query()->with(['type', 'skills'])
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return inertia('Admin/Work/Index',[
            "works"=>  ProjectResource::collection($works),
        ]);
    }
}
