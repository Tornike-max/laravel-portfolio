<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Skill;
use App\Models\Technology;
use App\Models\Type;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);


        // foreach (['Frontend', 'Backend', 'Fullstack', 'Mobile'] as $value) {
        //     Type::factory()->create([
        //         'type' => $value,
        //     ]);
        // }

        // $skills = [
        //     [
        //         "name" => "PHP",
        //         "slug" => "php",
        //         "icon" => fake()->imageUrl(640, 480, 'abstract', true, 'PHPIcon'),
        //     ],
        //     [
        //         "name" => "JavaScript",
        //         "slug" => "javascript",
        //         "icon" => fake()->imageUrl(640, 480, 'abstract', true, 'JavaScriptIcon'),
        //     ],
        //     [
        //         "name" => "Laravel",
        //         "slug" => "laravel",
        //         "icon" => fake()->imageUrl(640, 480, 'abstract', true, 'LaravelIcon'),
        //     ],
        //     [
        //         "name" => "React JS",
        //         "slug" => "react-js",
        //         "icon" => fake()->imageUrl(640, 480, 'abstract', true, 'ReactJSIcon'),
        //     ],
        //     [
        //         "name" => "Tailwind CSS",
        //         "slug" => "tailwind-css",
        //         "icon" => fake()->imageUrl(640, 480, 'abstract', true, 'TailwindIcon'),
        //     ],
        //     [
        //         "name" => "TypeScript",
        //         "slug" => "typescript",
        //         "icon" => fake()->imageUrl(640, 480, 'abstract', true, 'TypeScriptIcon'),
        //     ],
        //     [
        //         "name" => "MySQL",
        //         "slug" => "mysql",
        //         "icon" => fake()->imageUrl(640, 480, 'abstract', true, 'MySQLIcon'),
        //     ],
        //     [
        //         "name" => "PostgreSQL",
        //         "slug" => "postgresql",
        //         "icon" => fake()->imageUrl(640, 480, 'abstract', true, 'PostgreSQLIcon'),
        //     ],
        //     [
        //         "name" => "Framer Motion",
        //         "slug" => "framer-motion",
        //         "icon" => fake()->imageUrl(640, 480, 'abstract', true, 'FramerMotionIcon'),
        //     ],
        //     [
        //         "name" => "Next JS",
        //         "slug" => "next-js",
        //         "icon" => fake()->imageUrl(640, 480, 'abstract', true, 'NextJSIcon'),
        //     ],
        //     [
        //         "name" => "Material UI",
        //         "slug" => "material-ui",
        //         "icon" => fake()->imageUrl(640, 480, 'abstract', true, 'MaterialUIIcon'),
        //     ],
        // ];
        
        // foreach ($skills as $skill) {
        //     Skill::factory()->create($skill);
        // }

        // Technology::factory(10)->create();

        Project::factory(10)->create();
       
        // Type::factory()->create([
        //     'type' => 'Backend',
        // ]);
    }
}
