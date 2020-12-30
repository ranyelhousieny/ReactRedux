//root component, binds all the files on ./Containers (Button / Loading & ProductItem)

import React from 'react';
import Button from '../containers/Button';
import ProductItem from '../containers/ProductItem'
import Loading from '../containers/Loading'


let App = () => ( //functional component
  <div>
     <Button />      {/*Initiates the API call to the json-server hosted REST API  */}
     <Loading />     {/*Displays the spinner control until the services responds with data*/}
     <br/>
     <ProductItem /> {/*Once the data is returned from the REST API, displays it */}
  </div>
);
export default App;