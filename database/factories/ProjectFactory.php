<?php

namespace Database\Factories;

use App\Models\Skill;
use App\Models\Type;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => $this->faker->word(),
            "description" => $this->faker->sentence(),
            "image" => $this->faker->imageUrl(),
            "link" => $this->faker->url(),
            "github" => $this->faker->url(),
            "slug" => $this->faker->unique()->slug(),
            "created_at" => now(),
            "updated_at" => now(),
        ];
    }
}
