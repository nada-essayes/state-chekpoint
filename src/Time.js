import React,{Component}from "react";
class Time extends Component{
 state={
    time : 0
  }
  componentDidMount=()=>{
    setInterval(()=>{this.setState(prevState=>({time:prevState.time +1}))

    },1000)
  }
    render(){
    return(
     <div>
        {this.state.time}
     </div>
    )
  }

}  


export default Time;