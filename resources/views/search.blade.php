<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Veterinary Clinic</title>
</head>
<body>

    <div class="jumbotron">
        <h1 class="display-4">Veterinary Clinic</h1>
      </div>

      <label for="search"></label>
        <form method="GET"> 
          <input id="search" type="text" name="name">
          <button type="submit">Search</button>
        </form>
    
    @foreach ($pets as $pet)
      <div class="card" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">{{ $pet->name }}</h5>
              <p>Breed: {{ $pet->breed }}</p>
              <p>Age: {{ $pet->age }}</p>
              <p>Weight: {{ $pet->weight }}</p>
              <p><img class="card-img-top"  src="{{ $pet->photo_path }}" alt=""></p>
              <a href="/search/{{ $pet->id }}/edit" class="btn btn-default" style="background: lightblue">Edit</a>
        </div>
      </div>
    @endforeach

 
</body>
</html>