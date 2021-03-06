import React from 'react';

const Listing = (props) => { //functional component. displays the specific product details passed as props to this component
    console.log("[Listing ", props)
    return(
        <div>
            <div className="col-md-6">
                <h1>{props.detaildata.name}</h1>
                <img
                    src={ props.detaildata.img }
                    className="img-responsive"
                    alt="" />
            </div>
            <div className="col-md-6">
                <h2>Description</h2>
                <p>{props.detaildata.description}</p>
            </div>

        </div>
    )

}

export default Listing;
