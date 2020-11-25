import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput';
import { Component } from 'react';


class App extends Component{
  
  state = {
    username: "super-Duncan"
  }

  inputChangedHandler = (event) =>{
    console.log("here")
    this.setState({username: event.target.value});
  }



  render(){
    return (
      <div className="App">
        <UserInput 
          changed = {this.inputChangedHandler}
          currentName = {this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="Lynne" />

      </div>
    );
  }
}
export default App;
