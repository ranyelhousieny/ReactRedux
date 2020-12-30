// Import Actions
import { getFoodAction } from './redux/actions';
import { connect } from 'react-redux';
import FoodList from './components/FoodList'
import { Route, NavLink, BrowserRouter, Switch } from 'react-router-dom';
import FoodDetails from './components/FoodDetails';


// Function Component
let App = ( props ) => {
  props.getFood();
  return (
    <BrowserRouter>
      <div>
        <ul>
          <FoodList />
        </ul>

        <Switch>
          <Route exact path='/' component={ FoodList } />
          <Route exact path='/food/:id' component={ FoodDetails } />

        </Switch>
        
    
    </div>
    </BrowserRouter>
    
  );
};

//Custom const variable that holds the ref to the action that is called on button click
const mapDispatchToProps = {
  getFood: getFoodAction
};

App = connect(null, mapDispatchToProps)(App)
export default App;
