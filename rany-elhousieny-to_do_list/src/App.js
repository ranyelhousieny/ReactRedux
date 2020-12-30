import './App.css';
import React, { Component } from 'react'; 
import Checkbox from "./Components/Checkbox/Checkbox";

class App extends React.Component
{
  constructor ( props )
  {
    super( props );
    this.state = {
      value: "",
      tasks: ["Learn React"]
    }
  }

  onSubmit = (  ) => {
    this.setState( {
      tasks: [ ...this.state.tasks, this.state.value ],
      value: ''
    } );
    console.log( "** onSubmit **", this.state );

  }

  onChangeValue = event => {
    this.setState( { value: event.target.value } );
    console.log( "** onChangeValue **", this.state );
  };
    
  
  render ()
  {
    return (
      <div>
        <center>
          <div>
            <h1>ToDo List for Rany ElHousieny</h1>
          </div>
          <input 
            className='form-control'
            placeholder='Enter Your Task'
            type='text'
            value={ this.state.value }
            onChange={this.onChangeValue}
            
          />
          <button onClick={this.onSubmit}>Add</button>
          <div>
            <h2> Tasks </h2>
            <ul>
              { this.state.tasks.map( ( task ) => {
                return (
                  <div key={ task }>
                    <label>
                    <input type="checkbox" />{ task }</label>
                  </div>
                  
                )
              })}
            </ul>
          </div>
          
        </center>

      </div>
    );
  }
}

export default App;
