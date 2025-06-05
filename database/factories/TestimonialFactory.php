<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Testimonial>
 */
class TestimonialFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'position' => $this->faker->jobTitle(),
            'company' => $this->faker->company(),
            'testimonial' => $this->faker->paragraph(),
            'rating' => $this->faker->numberBetween(1, 5),
            'is_approved' => $this->faker->boolean(),
            'image' => $this->faker->imageUrl(640, 480, 'people', true, 'TestimonialImage'),
        ];
    }
}
