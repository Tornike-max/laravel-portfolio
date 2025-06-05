<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Project extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        "name",
        "description",
        "image",
        "link",
        "github",
        "slug",
        "type_id",
        "skill_id",
    ];

    public function type() {
        return $this->belongsTo(Type::class);
    }
    public function skills() {
        return $this->belongsTo(Skill::class);
    }

}
