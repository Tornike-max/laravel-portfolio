<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'image' => $this->image,
            'link' => $this->link,
            'github' => $this->github,
            'slug' => $this->slug,
            'type' => $this->type ? [
                'id' => $this->type->id,
                'name' => $this->type->name,
            ] : null,
            'skills' => $this->skills ? $this->skills->map(function ($skill) {
                return [
                    'id' => $skill->id,
                    'name' => $skill->name,
                ];
            }) : [],
        ];
    }
}
