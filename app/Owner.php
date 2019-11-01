<?php

namespace App;
use App\Animal;


use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{
    public function animals() 
    {
        return $this->hasMany('App\Animal');
    }
}
