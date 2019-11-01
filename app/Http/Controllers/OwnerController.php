<?php

namespace App\Http\Controllers;
use App\Owner;

use Illuminate\Http\Request;

class OwnerController extends Controller
{
    public function index() {
        $owners = Owner::orderBy('surname', 'ASC')->limit(20)->with('animals')->get();
        return $owners;
    }
}
