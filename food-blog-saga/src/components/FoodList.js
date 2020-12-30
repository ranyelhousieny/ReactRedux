import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom'

const imgStyle = {//custom css styling
  height: '200px',
  width: '200px',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};

const articleStyle = { //custom css styling
    width: '70%',
    margin: '10px auto',
    color: 'olive',
    border: '4px solid RebeccaPurple ',
    borderRadius: '5%'
}

// Function component
let FoodList = ( props ) => {
    console.log( "[FoodList compnent in ./components/FoodList" );
    console.log( "FoodList.Props = ", props );
    return (
    props.food ?
        props.food.map( ( item ) => {
            return (
                <article
                    className="col-md-1"
                    key={ item.id }
                    style={articleStyle}
                >
                    <h1>{ item.name }</h1>
                    <img src={ item.img } alt="Burger" style={ imgStyle }/>
                    <div>
                        <button>
                            <Link to={`/food/${item.id}`}>
                                Details
                            </Link>
                        </button>
                    </div>
                    
                    <hr/>
                </article>
        )
        } )
        :
            null
    )

}
       


//mapStateToProps is a system defined function receives the state from reducers
//food: props to which the retreived state is assigned. 
//same props "food" is passed to the "FoodList" component above
//article.products: state received from the reducer
const mapStateToProps = ( state ) => ( { food: state.food } );

//Loading component is connected to Redux  Store using the connect function
//mapStateToProps : data from the store to connect to the component
//null as there is no  custom action method mapping that dispatches actions from the store for displaying individual products (eg. No button click etc.)
//ProductItem: component that needs to connect to the Redux Store
FoodList = connect( mapStateToProps )( FoodList );

export default FoodList;