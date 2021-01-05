import React from 'react';
import FoodItem from '../containers/FoodItem'
import { BrowserRouter } from 'react-router-dom';

let App = () => (
  <BrowserRouter>
  <div>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Food Blog</a>
        </div>
      </div>
    </nav>
     <FoodItem />
    </div>
    </BrowserRouter>
);
export default App;