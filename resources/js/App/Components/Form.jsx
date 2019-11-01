import React from 'react';
import { throws } from 'assert';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doctor_id: 0,
      owner_id: null,
      name: null,
      breed: null,
      age: null,
      weight: null,
      photo_path: null

    };

    
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

}
  

  render() {
    return (
        <>
        <form onSubmit={this.handleFormSubmit}>
            <input type="number" id="doctor_id" placeholder="Doctor's ID" value={this.state.doctor_id} />
            <br/>
            <input type="number" id="owner_id" placeholder="Owner's ID" value={this.state.owner_id} />
            <br/>
            <input type="text" id="name" placeholder="Pet's name" value={this.state.name} />
            <br/>
            <input type="text" id="breed" placeholder="Breed" value={this.state.breed} />
            <br/>
            <input type="number" id="age" placeholder="Pet's age" value={this.state.age} />
            <br/>
            <input type="number" id="weight" placeholder="Weight" value={this.state.weight} />
            <br/>
            <input type="text" id="photo_path" placeholder="Photo path" value={this.state.photo_path} />
            <br/>
            <br/>
            <button type="submit" value="submit">Submit</button>

        </form>
        </>

    )
  }
}