<?php

namespace Database\Seeders;

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


        foreach (['Frontend', 'Backend', 'Fullstack', 'Mobile'] as $value) {
            Type::factory()->create([
                'type' => $value,
            ]);
        }

        // Technology::factory(10)->create();

       
        // Type::factory()->create([
        //     'type' => 'Backend',
        // ]);
    }
}
