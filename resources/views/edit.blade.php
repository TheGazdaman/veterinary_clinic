@extends('layout')

@section('content')

@foreach ($animals as $animal)
          <div class="col-sm">    
              <div class="card" style="width: 18rem;">
                  <div class="card-body">
                      <h5 class="card-title">{{ $animal->name }}</h5>
                    <p>Breed: {{ $animal->breed }}</p>
                    <p>Age: {{ $animal->age }}</p>
                    <p>Weight: {{ $animal->weight }}</p>
                    <p>
                      <img src="{{ $animal->photo_path }}" class="card-img-top" alt="">
                    </p>
                    <a href="/display/{{ $animal->id }}/edit" class="btn btn-default" style="background: lightblue">Edit</a>
                </div>
              </div>
          </div>
      @endforeach

@endsection