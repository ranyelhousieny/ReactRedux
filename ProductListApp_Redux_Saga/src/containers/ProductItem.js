import React from 'react';
import { connect } from 'react-redux'

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
//display the products data

//functional Component
let ProductItem = ({ article }) => ( //ternary op. Display product  data from RESP API if variable , else return null. 
                                     //article is data retreived by  reducer from the redux store in ./reducers/index.js

    article ?
    article.map((item) => {// map() calls this code iteratively for every record in "article" array
        return (
            <article key={item.id} style={articleStyle}>
                <div className="media">
                <div className="media-left">
                    <img src={item.img} className="media-object" alt="" style={imgStyle} />
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{item.name}</h4>
                    <p>{item.description}</p>
                </div>
            </div>
            
            </article>
        )
    })
 :
 null
);

const mapStateToProps = (state) => ({  article: state.products  }); //system defined function receives the state from reducers
//article: props to which the retreived state is assigned. //same props "article" is passed to the "ProductItem" component above
//article.products: state received from the reducer

ProductItem = connect(mapStateToProps,null)(ProductItem);//Loading component is connected to Redux  Store using the connect function 
//mapStateToProps : data from the store to connect to the component
//null as there is no  custom action method mapping that dispatches actions from the store for displaying individual products (eg. No button click etc.)
//ProductItem: component that needs to connect to the Redux Store

export default ProductItem;