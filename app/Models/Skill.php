<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Skill extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        "name",
        "slug",
        "icon",
        "type_id"
    ];

    public function type() {
        return $this->belongsTo(Type::class);
    }
}
