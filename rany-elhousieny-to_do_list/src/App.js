import './App.css';
import React, { Component } from 'react'; 
import Checkbox from "./Components/Checkbox/Checkbox";

class App extends React.Component
{
  constructor ( props )
  {
    super( props );
    this.state = { task: ""}
  }

  ranySubmitHandler = ( event ) =>
  {
    
  }
  render ()
  {
    return (
      <div className="App">
        <form onSubmit={this.ranySubmitHandler}>
          <h1>ToDo List for Rany ElHousieny</h1>
          <p>Enter a task</p>
          <input
            type="text"
            value={ this.state.task }/>
          
          <input type='submit' />
        
        </form>
        <ul>
          <li><Checkbox task={ this.state.task }/></li>
        </ul>
      </div>
    );
  }
}

export default App;
