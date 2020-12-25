import './App.css';
import React, { Component } from 'react'; 

class App extends React.Component
{
  constructor ( props )
  {
    super( props );
    this.state = { tasks: []}
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
            type="text" />
          
          <input type='submit' />
        
        </form>
      </div>
    );
  }
}

export default App;
