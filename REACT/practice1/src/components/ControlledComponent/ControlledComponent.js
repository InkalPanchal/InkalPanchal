import React from 'react';
import SelectTag from '../SelectTag/SelectTag';
import EssayForm from '../EssayForm/EssayForm';

function Data(props){
  let formdata = props.data
  return (
    <div>
      <li>{formdata.name}</li>
    </div>
  )
}

class ControlledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      name: "Inkal",
      isGoing: true,
      numberOfGuests: 2
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    let value;
    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    } else {
      value = event.target.value
    }

    const name = event.target.name;

    this.setState({
      [name]: value
    })
  }
  arr = []
  handleSubmit(event) {
    event.preventDefault();
    this.arr.push(this.state);
    console.log(this.arr);
  }
  render() {
    return (
      <div className='m-3'>
        <h5>Handling Multiple Inputs</h5>
        <form onSubmit={this.handleSubmit} className="form">
          <div className=''>

            <label className='form-label col-sm-1' htmlFor="number">Number:
            </label>
              <input className='form-input col-sm-2'
                type="number"
                name="id"
                value={this.state.id}
                onChange={this.handleChange}
              />
            <br />
            <label className='form-label col-sm-1' htmlFor="Name">Name:
            </label>
              <input className='form-input col-sm-2'
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            <br />
            <label className='form-label me-2' htmlFor="isGoing">
              IsGoing
            </label>
              <input className='form-input'
                type="checkbox"
                name="isGoing"
                checked={this.state.isGoing}
                onChange={this.handleChange}
              />
            <br />
            <label className='form-label col-sm-1' htmlFor="numberOfGuests">
              NumberOfGuests
            </label>
              <input className='form-input col-sm-2'
                type="number"
                name="numberOfGuests"
                value={this.state.numberOfGuests}
                onChange={this.handleChange}
              />
          </div>
          <input type="submit" className='btn btn-outline-primary' value="submit" />
        </form>
        <Data data={this.state}/>
        <hr />
        <h6>Textarea</h6>
        <EssayForm />
        <hr />
        <h6>Select Tag</h6>
        <SelectTag />
      </div>
    )
  }
}

export default ControlledComponent;
