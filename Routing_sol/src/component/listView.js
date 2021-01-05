import React, {Component} from 'react';
import DisplayComponent from './displayComponent';

const url = "http://localhost:8900/courses"

class ListView extends Component {
    constructor(){
        super();

        this.state = {
            courses:''
        }
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        
        .then(response => response.json())
        .then((data,err) => { 
            this.setState({
                courses:data
            })
        })
    }

    render(){
        return(
            <React.Fragment>
                <DisplayComponent
                    subject={ this.state.courses }>    
                </DisplayComponent>
            </React.Fragment>
        )
    }
}

export default ListView;