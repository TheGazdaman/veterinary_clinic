<?php

namespace App\Http\Controllers;
use App\Animal;

use Illuminate\Http\Request;

class DisplayController extends Controller
{
    public function index()
    {
        $animals = Animal::orderBy('id', 'desc')
        ->paginate(6);

        return view('display', compact('animals'));

        //return $animals;
    } 

}
