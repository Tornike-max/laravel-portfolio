<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialsController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'testimonial' => 'required|string|max:1000',
            'company' => 'nullable|string|max:255',
            'position' => 'nullable|string|max:255',
            'rating' => 'required|integer|min:1|max:5',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp,gif|max:2048',
        ]);

        if($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('testimonials', 'public');
            $validated['image'] = $imagePath;
        }

        Testimonial::create($validated);

        return redirect()->back()->with('success', 'Testimonial submitted successfully!');
    }
}
