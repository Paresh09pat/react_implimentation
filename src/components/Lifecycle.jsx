import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'Paresh'
        }
    }

    componentDidMount(){
        console.log('didmount');
    }
    componentDidUpdate(){
        console.log('didupdate');
    }
    componentWillUnmount(){
        console.log('willunmount');
    }

 handleChange=(event)=>{
   this.setState({name:event.target.value})          // look into it
}


  render() {
    return (
     <>
      <p> My name is : {this.state.name}</p>
     <input onChange={this.handleChange}></input>
     
     
     
     </>
    )
  }
}
