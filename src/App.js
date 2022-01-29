
import './App.css';
import React, { Component } from 'react';
import image from './image.png';
import Time from './Time.js';
class App extends Component {
  state={
    Person:{
      fullName:'Essayes Nada',
      bio:"Master's degree in Computer Sciences",
      profession:'Student',
      imgSrc:{image}
    },
    shows:true
  };
  HandleClick=()=>{
 
  this.setState(state => ({
    shows: !state.shows
  }));
  console.log(this.state.shows)
  };

  render(){
   
  return (
    <div className="App">
      <h1>{this.state.Person.fullName}</h1>
      <h1>{this.state.Person.bio}</h1>
      <h1>{this.state.Person.profession}</h1>
     <center><img src={require('./image.png')} /></center>
    
      <br></br>
     
     <button  onClick={this.HandleClick}>Click </button>
     {
       this.state.shows ? (<p>  {this.state.Person.fullName}</p>) : (<p>Can't show you</p>)
     }
  
      <Time/>
    </div>
  );
  }
}

export default App;
