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
      message: ''
    };

    
  }

  handleDoctorIdChange = (event) => {

    // console.log(this.state.doctor_id);
    

    this.setState({
        doctor_id: event.target.value
    });
  }

  handleOwnerIdChange = () => {

    console.log(this.state.owner_id);

    this.setState({
        owner_id: document.querySelector("#owner_id").value
    });
  }

  handleNameChange = () => {

    this.setState({
        name: document.querySelector("#name").value
    });
  }

  handleBreedChange = () => {

    this.setState({
        breed: document.querySelector("#breed").value
    });
  }

  handleAgeChange = () => {

    this.setState({
        age: document.querySelector("#age").value
    });
  }

  handleWeightChange = () => {

    this.setState({
        weight: document.querySelector("#weight").value
    });
  }

  handlePhotoPathChange = () => {

    this.setState({
        photo_path: document.querySelector("#photo_path").value
    });
  }



  handleFormSubmit = (event) => {

    event.preventDefault();

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
  

  render() {
    return (
        <>

        <div>{this.state.message}</div>


        <form onSubmit={this.handleFormSubmit}>
            <input type="number" id="doctor_id" placeholder="Doctor's ID" value={this.state.doctor_id} onChange={this.handleDoctorIdChange} />
            <br/>
            <input type="number" id="owner_id" placeholder="Owner's ID" value={this.state.owner_id} onChange={this.handleOwnerIdChange}/>
            <br/>
            <input type="text" id="name" placeholder="Pet's name" value={this.state.name} onChange={this.handleNameChange} />
            <br/>
            <input type="text" id="breed" placeholder="Breed" value={this.state.breed} onChange={this.handleBreedChange} />
            <br/>
            <input type="number" id="age" placeholder="Pet's age" value={this.state.age} onChange={this.handleAgeChange} />
            <br/>
            <input type="number" id="weight" placeholder="Weight" value={this.state.weight} onChange={this.handleWeightChange} />
            <br/>
            <input type="text" id="photo_path" placeholder="Photo path" value={this.state.photo_path} onChange={this.handlePhotoPathChange} />
            <br/>
            <br/>
            <button type="submit" value="submit">Submit</button>

        </form>
        </>

    )
  }
}