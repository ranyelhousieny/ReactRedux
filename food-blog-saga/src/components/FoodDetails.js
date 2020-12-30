import { connect } from 'react-redux';
import { getFoodItemAction } from '../redux/actions';
import Listing from './DetailsList'
import React from 'react';


// Functional component
let FoodDetails = ( props ) => {
    console.log( "********** [FoodDetails] *********" );
    console.log( 'Props = ', props );
    console.log( 'url = ', props.match.url );
    console.log( '***************************************' );
    const foodList = props.food;
    console.log( "Food List = ", foodList );
    props.getFoodDetails(props.match.url);
    let food = {}
    if ( foodList ) {
        foodList.map( ( item ) => {
            if ( `/food/${item.id}` === props.match.url ) {
                food = item;
                console.log( "%%%%%%%%%% Found it %%%%%%%%", food );
            }
        } );
    }
    console.log( "%%%%%%%%%% Found it %%%%%%%%", food );
    return (
        <div>
            <h1>Food Details</h1>
            <Listing detaildata={food} />
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        food: state.food
    }
}

const mapDispatchToProps = ( dispatch ) => ( {
    getFoodDetails: getFoodItemAction
})

FoodDetails = connect( mapStateToProps, mapDispatchToProps )( FoodDetails );

export default FoodDetails;