import React from 'react';
import './recipeListing.css'

const Recipe = (props) => {
    console.log("in recipe>>>>",props)
    const listing = ({foodData}) => {
        if(foodData){
            return foodData.map((item) => {
                return(
                    <div key={ item.id } className="panel-group">
                        <div className="panel panel-default">
                        
                            <div className="panel-heading">
                            
                                <center>
                                
                                    <h4 className="panel-title">
                                    <a>{item.name}</a>
                                    <br/><br/>
                                    <img src={item.imageURL} className="image"/>
                                    </h4>
                                    <br />
                                    {/* This will toggle details to div id=item.id */}
                                    <a data-toggle="collapse" href={`#${item.id}`}
                                    className="btn btn-info">Details</a>
                                
                                </center>
                            </div>

                        {/* New div with id for Details */}    
                            <div
                                id={ `${item.id}` }
                                className="panel-collapse collapse"
                            >
                                <h3>Steps to cook</h3>
                                <p>{item.steps}</p>
                                <h3>Ingredients</h3>
                                <p>{item.ingredients[0].name}</p>
                                <p>Quantity: {item.ingredients[0].quantity}</p>
                                <div className="panel-footer">
                                    Footer
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            <br/>
            {listing(props)}
            
        </div>
    )
}

export default Recipe;