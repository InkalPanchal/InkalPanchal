import React from 'react';
// function Data(props){
//   let data = props.data

//   return  (
//     <p>{data}</p>
//   )
// }
class UncontrolledComponent extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.fileInput = React.createRef();
  }

  // formData = "";
  handleSubmit(e){
    e.preventDefault();
    // this.formData = this.input.current.value;
   console.log(this.input.current.value);
   console.log(this.fileInput.current.files[0].name);
   alert("selected file: "+ this.fileInput.current.files[0].name)
  }
  render() {
    return (
      <div>
       
        <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="Name" className='form-label'>Name:
          </label>
            <input defaultValue="Inkal" className='form-input' type="text" ref={this.input} />
            {this.input.current}
        </div>
        <div>
          <label htmlFor="file" className='form-label'>
            Upload File:
          </label>
          <input type="file" ref={this.fileInput} className="form-input" />
        </div>
        <div>
          <input type="submit" value="Submit" className='btn btn-outline-primary'/>
        </div>
        
      </form>
      {/* <Data data={this.formData} /> */}
      </div>
    )
  }
}



export default UncontrolledComponent;
