<?php

use Illuminate\Database\Seeder;

class OwnersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // WARNING: this seeder truncates your people, aliases and images tables
        DB::table('animals')->truncate();   // animals
        DB::table('owners')->truncate();    // owners
        
        $source_file = storage_path('clients.json'); // data.json
        if (!file_exists($source_file)) {
            die('Source file '.$source_file.' not found');
        }
        
        $data = json_decode(file_get_contents($source_file));
        
        
        foreach ($data as $item) {

            $owner = new \App\Owner; // \App\owner
            
            $owner->first_name = $item->first_name;  // first_name
            $owner->surname = $item->surname;        // surname
        
        
            $owner->save();
        
            foreach ($item->pets as $pet) {
                $animal = new \App\Animal;            // \App\Animal
                $animal->name = $pet->name;
                $animal->owner_id = $owner->id;
                $animal->breed = $pet->breed; 
                $animal->weight = $pet->weight;
                $animal->age = $pet->age; 
                $animal->photo_path = 'images/'.$pet->photo;       
                $animal->save();
            }
        }
    }
}
