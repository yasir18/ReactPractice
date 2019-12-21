import React,{Component} from "react";
import ReactDOM from 'react-dom';

class RefsApp extends Component{
    constructor(){
        super()
        this.state={
            data:''
        }
        this.changeInputEvent=this.changeInput.bind(this);
        this.clearInputEvent=this.clearInputEvent.bind(this);
    }

    changeInput(event){
        this.setState({
            data : event.target.value
        });
    }

    clearInputEvent(){
        this.setState({
            data:''
        });
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }

    render(){
        return(
            <div>
                 <input type='text' value={this.state.data} onChange={this.changeInputEvent} ref="myInput"/>
                 <button onClick={this.clearInputEvent}>clear</button>
                 <h5>The state value is {this.state.data}</h5>
            </div>
           
            
        )
    }

}

export default RefsApp