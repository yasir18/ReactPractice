import React, { Component } from "react";

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {isLogin:false};

    this.handleClick=this.handleClick.bind(this);
    this.createAlert=this.createAlert.bind(this);
  }

  handleClick(){
      this.setState({
        isLogin : this.state.isLogin?false:true
      })
  }

  createAlert =(param) => {
    //var val=this.state.isLogin
    alert(`hi ${param}`)
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick} >{this.state.isLogin? "LogOut":"Login"}</button>
        <Message isLogin={this.state.isLogin} createAlert={this.createAlert}/>
        <button onClick={()=>this.createAlert("sdas")}> click to fire an alert from parent</button>
      </div>
      
    )
    }
}

class  Message extends React.Component {
  constructor(props){
    super(props);
    this.fireParentEvent=this.fireParentEvent.bind(this);
  }

  fireParentEvent = () => {
    this.props.createAlert("hii")
  }
  render(){
    return(
      <div>
        <h3>{this.props.isLogin ? "Welcome MR X": "Please login"}</h3>
        <button onClick={this.fireParentEvent}> click to fire an alert from child</button>
      </div>
      
    )
  }
        
}

export default Login;