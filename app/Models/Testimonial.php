<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Testimonial extends Model
{
     use HasFactory, Notifiable;

     protected $fillable = [
         'name',
         'testimonial',
         'company',
         'position',
         'rating',
         'image',
         'rating',
     ];
}
