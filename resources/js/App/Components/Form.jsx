import React from 'react';
import { throws } from 'assert';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doctor_id: 0,
      owner_id: 0,
      name: '',
      breed: '',
      age: 0,
      weight: 0,
      photo_path: '',
      message: '',

      errors: []
    };

    
  }

  validate = (doctor_id, owner_id, name, breed, age, weight, photo_path) => {
    let errors = [];
    if (doctor_id <= 0) {
      errors.push("Doctor`s id has to be bigger than 0.");
    }
    
    if (owner_id <= 0) {
      errors.push("Owners`s id has to be bigger than 0.");
    }

    if (name.length === 0) {
      errors.push("Name can't be empty");
    }

    if (breed.length === 0) {
      errors.push("Breed can't be empty");
    }

    if (age <= 0) {
      errors.push("Age cannot be negative.");
    }

    if (weight <= 0) {
      errors.push("Weight cannot be negative or 0.");
    }

    if (photo_path.length === 0) {
      errors.push("Photo path can't be empty");
    }

    // this.setState({errors: errors})

    return errors
  
  }

  handleDoctorIdChange = (event) => {

    // console.log(this.state.doctor_id);
    

    this.setState({
        doctor_id: event.target.value
    });
  }

  handleOwnerIdChange = (event) => {

    // console.log(this.state.owner_id);

    this.setState({
        owner_id: event.target.value
    });
  }

  handleNameChange = (event) => {

    this.setState({
        name: event.target.value
    });
  }

  handleBreedChange = (event) => {

    this.setState({
        breed: event.target.value
    });
  }

  handleAgeChange = (event) => {

    // console.log(this.state.age);
    this.setState({
        age: event.target.value
    });
  }

  handleWeightChange = (event) => {

    this.setState({
        weight: event.target.value
    });
  }

  handlePhotoPathChange = (event) => {

    this.setState({
        photo_path: event.target.value
    });
  }



  handleFormSubmit = (event) => {

    event.preventDefault();

    const { doctor_id, owner_id, name, breed, age, weight, photo_path } = this.state;

    const errors = this.validate(doctor_id, owner_id, name, breed, age, weight, photo_path);
    

    
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    else{
      this.setState({ errors: [] });
    

    fetch("/store", {
        method: 'POST',
        headers: {
            'Accept':       'application/json',
            'Content-type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify({
            doctor_id: this.state.doctor_id,
            owner_id: this.state.owner_id,
            name: this.state.name,
            breed: this.state.breed,
            age: this.state.age,
            weight: this.state.weight,
            photo_path: this.state.photo_path
        })
        
    })

    .then(response => response.json())
    .then(data => { this.setState({message: data.message} )

    })

  }
    

}
  

  render() {

    
    return (
        <>

        <div>{this.state.message}</div>


        <form onSubmit={this.handleFormSubmit}>

            {this.state.errors.map(error => (
              <p key={error}>Error: {error}</p>
            ))}
          
            <label htmlFor="#doctor_id">Doctor´s id: </label>
            <input type="number" id="doctor_id" placeholder="Doctor's ID" value={this.state.doctor_id} onChange={this.handleDoctorIdChange} />
            <br/>

            <label htmlFor="#owner_id">Owner´s id: </label>
            <input type="number" id="owner_id" placeholder="Owner's ID" value={this.state.owner_id} onChange={this.handleOwnerIdChange}/>
            <br/>

            <label htmlFor="#name">Name: </label>
            <input type="text" id="name" placeholder="Pet's name" value={this.state.name} onChange={this.handleNameChange} />
            <br/>

            <label htmlFor="#breed">Breed: </label>
            <input type="text" id="breed" placeholder="Breed" value={this.state.breed} onChange={this.handleBreedChange} />
            <br/>

            <label htmlFor="#age">Age: </label>
            <input type="number" id="age" placeholder="Pet's age" value={this.state.age} onChange={this.handleAgeChange} />
            <br/>
            <label htmlFor="#weight">Weight: </label>
            <input type="number" id="weight" placeholder="Weight" value={this.state.weight} onChange={this.handleWeightChange} />
            <br/>

            <label htmlFor="#photo_path">Photo path: </label>
            <input type="text" id="photo_path" placeholder="Photo path" value={this.state.photo_path} onChange={this.handlePhotoPathChange} />
            <br/>
            <br/>
            <button type="submit" value="submit">Submit</button>

        </form>
        </>

    )
  }
}