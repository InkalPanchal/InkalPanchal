import React from 'react';

class SelectTag extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value : 'Coconut'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }
  handleSubmit(event){
    alert("Selected "+this.state.value);
    event.preventDefault();
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Pick your favorite:
            <select  value={this.state.value} onChange={this.handleChange} className="form form-select">
              <option value="grapefruit">GrapesFruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label><br />
          <input type="submit" value="submit" className='btn btn-outline-primary'/>
        </form>
      </div>
    )
  }
}

export default SelectTag;
