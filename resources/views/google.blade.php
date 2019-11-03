@extends('layout')

@section('google')

  <label for="search"></label>
    <form method="GET"> 
      <input id="search" type="text" name="name">
      <button type="submit">Search</button>
    </form>

@foreach ($pets as $pet)
    <p>{{ $pet->name }}</p>
    <p>{{ $pet->breed }}</p>
    <p>{{ $pet->age }}</p>
    <p>{{ $pet->weight }}</p>
    <p><img src="{{ $pet->photo_path }}" alt=""></p>

@endforeach

    
@endsection