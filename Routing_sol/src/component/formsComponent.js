import React, {Component } from 'react';

const url ="http://localhost:8900/enquiries"

class FormContainer extends Component {
    constructor(){
        super()

        this.state={
            name:'',
            phone:'',
            email:'',
            subject:''
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangPhone = this.handleChangPhone.bind(this);
        this.handleChangEmail = this.handleChangEmail.bind(this);
        this.handleChangSubject = this.handleChangSubject.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event){
        this.setState({name:event.target.value});
    }

    handleChangPhone(event){
        this.setState({phone:event.target.value});
    }
    handleChangEmail(event){
        this.setState({email:event.target.value});
    }
    handleChangSubject(event){
        this.setState({subject:event.target.value});
    }

    handleSubmit(event){
        var random = Math.floor(Math.random()*1000)
        var data = {
            id:random,
            name: this.state.name,
            phone:this.state.phone ,
            email:this.state.email,
            subject:this.state.subject,
          }
    
        fetch(url,{
            method:'POST',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
              },
              body: JSON.stringify(data)
        })
        .then((response) => response.json())
  
        
        
        alert('Submitted')
    }

    
    render(){
        return(
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleChangeName}
                            id="name"/>
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.phone}
                            onChange={this.handleChangPhone}
                            id="phone"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleChangEmail}
                            id="title"/>
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.subject}
                            onChange={this.handleChangSubject}
                            id="title"/>
                    </div>
                    <button type="submit" className="btn btn-success"
                    onClick={this.handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}



export default FormContainer;