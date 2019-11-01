<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Animal;


class AnimalController extends Controller
{
    public function store(Request $request)
    {
        $animal = new Animal;
        $animal->doctor_id = $request->input('doctor_id');
        $animal->owner_id = $request->input('owner_id');
        $animal->name = $request->input('name');
        $animal->breed = $request->input('breed');
        $animal->age = $request->input('age');
        $animal->weight = $request->input('weight');
        $animal->photo_path = $request->input('photo_path');
        $animal->save();

        return [
            'status' => 'success',
            'message' => 'The data was successfully saved on the server.'
     ];

    }
}
