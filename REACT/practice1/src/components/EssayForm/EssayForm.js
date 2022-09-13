import React from 'react';

class EssayForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value : ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  
  }
  
  handleChange(event){
    this.setState({value : event.target.value});
  }
  handleSubmit(event){
    alert("Submitted Successfully: "+ this.state.value)
    event.prevenDefault();
  }

  render(){
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <textarea type="text" value={this.state.value} placeholder="Please write an essay." onChange={this.handleChange} />
            </div>
            <input type="submit" value="submit" className='btn btn-outline-primary'/>
        </form>

        <div>
          <p>Essay: {this.state.value}</p>
        </div>
      </div>
    )
  }
}
export default EssayForm;
