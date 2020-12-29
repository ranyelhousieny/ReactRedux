import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import DisplayItems from '../component/displayItems';

class App extends React.Component {

    componentDidMount () {
        this.props.foodItems();
    }

    render () {
        return (
            <div>
                <DisplayItems datalist={this.props.finalState}></DisplayItems>
            </div>
        )
    }
}

function mapStateToProps ( state ) {
    return ( {
        finalState: state.food
    })
}

export default connect( mapStateToProps, actions )( App );