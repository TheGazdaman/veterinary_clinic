<?php

namespace App;

use App\Doctor;
use App\Owner;
use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    public function doctor() {
        return $this->belongsTo('App\Doctor');
    }

    public function owner() {
        return $this->belongsTo('App\Owner');
    }
}
