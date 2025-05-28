<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Technology>
 */
class TechnologyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
       $technologies = [
        'frontend' => ['React', 'Vue.js', 'Angular', 'Svelte'],
        'backend' => ['Node.js', 'Django', 'Ruby on Rails', 'Laravel'],
        'database' => ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
        'devops' => ['Docker', 'Kubernetes', 'AWS', 'Azure'],
        'mobile' => ['Flutter', 'React Native', 'Swift', 'Kotlin'],
    ];

    $flatTechnologies = [];

    foreach ($technologies as $type => $items) {
        foreach ($items as $tech) {
            $flatTechnologies[] = [
                'title' => $tech,
                'slug' => Str::slug($tech),
                'description' => fake()->paragraph(),
                'icon' => fake()->imageUrl(64, 64, 'technologies', true),
                'type' => $type,
            ];
        }
    }

    return fake()->randomElement($flatTechnologies);
    }
}
