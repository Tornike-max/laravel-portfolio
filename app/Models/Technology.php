<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Technology extends Model
{
        use HasFactory, Notifiable;

        protected $fillable = [
            "name",
            "slug",
            "description",
            "icon",
            "type",
        ];

        public function type()
        {
            return $this->belongsTo(Type::class);
        }

}
