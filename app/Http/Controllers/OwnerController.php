<?php

namespace App\Http\Controllers;
use App\Owner;
use App\Animal;

use Illuminate\Http\Request;

class OwnerController extends Controller
{
    public function index() {
        $owners = Owner::orderBy('surname', 'ASC')
        ->limit(20)
        ->with('animals')
        ->get();
        
        return $owners;
    }

    public function search(Request $request) {
        $pets = Animal::where('name', $request->input('name'))
        ->get();
   
        return view('search', compact('pets'));
    }
}
