import './App.css';
import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import Navbar from './components/Navbar';

const url = 'http://localhost:8900/products';
const initialList = [
    {
            "id":1,
            "name":"Grand Piano",
            "price":44500,
            "type":"manual",
            "description":"Grand piano is great for beginner or adult. It adopted the famous French dream series, its sound source has stable, clearer sound and more vivid expression of the performance of the player.What’s more, keyboard material upgrade, and this piano features multi functions, so you can learn piano more easily and happily!",
            "img":"https://i.ibb.co/wc6qzwW/piano.png"
        },
        {
            "id":2,
            "name":"Electric Guitar",
            "price":11337,
            "type":"Electric",
            "description":" This acoustic guitar is built with great sound quality, high durability and increased ease of use for both beginners as well as professionals. The 39 inch stature makes it easy to handle and carry around without compromising on the sound quality. The selected Body woods allows high fidelity resonating hollow chamber and the rosewood fretboard makes is very durable with great sound carrying capabilities. If you are looking for a great quality acoustic guitar then this is a perfect choice",
            "img":"https://i.ibb.co/JsbJrBB/electricguitar.png"
        }
  ]

const App = () => {
  
  // Create a state to hold product list
  const [ productList, setProductList ] = useState( initialList );
  console.log( 'state', productList );
  
  // Get Product List from server
  useEffect( () => {
    console.log( '**** Calling useEffect ******', productList );
    Axios.get( url )
      .then( result => {
        console.log( 'result', result );
        setProductList( result.data );
      });
    
  }, [])
  
  console.log( 'state', productList );


  return (
    <div>
      <Navbar />
      <hr />
      <div className='container'>
        { productList.map(  item  => (
          <li key={ item.id }>{ item.name }</li>
        ))}
      </div>
      
    </div>
  );
};

export default App;
