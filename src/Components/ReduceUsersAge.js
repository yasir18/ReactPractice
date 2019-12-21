import React, { Component } from "react";

class UsersApp extends Component{
  constructor(props){
    super(props);
    this.state={
      users : [
        {Name:"Smith",Age:20},
        {Name:"Warner",Age:30},
        {Name:"Maxwell",Age:40}
      ]
    };
    this.RedeceAge=this.ReduceAgeBy10.bind(this);
  }

  ReduceAgeBy10(){
    var updatedUsers=this.state.users.map((user)=>{
     let tempUser = user;
     tempUser.Age -=10;
     return tempUser;
  })
    this.setState({
      users : updatedUsers
    })
  }
  
  render(){
    return(
      <div>
        <h3>Users List</h3>
        <button onClick={this.RedeceAge}> Reduce Age By 10 </button>
        <Users users={this.state.users}/>
      </div>
      
    )   
  }
}


class Users extends Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    return(
      this.props.users.map((user)=>{
          return (
          //<User Name={user.Name} Age={user.Age} />
          <User {...user}/> //spread operator
          )
      })
    )
  }
}


const User = (props) => {
  return(
    <h4>Name: {props.Name} | Age: {props.Age} </h4>
  )
}

export default UsersApp;