//import Header from './components/Header'
import React from 'react';
import Home from './components/Home'
import ScanMenu from './components/scanmenu/ScanMenu'
import {randColor} from './simple_scripts/randcolor'

class App extends React.Component {
  constructor(props){
    super(props);
    //Sets background and menu to random color
    this.state = {mode: 0};
    this.c = randColor();
    document.getElementById("main").style.backgroundColor = this.c;
  }

  setMode(i){
    this.setState((i) => {
      return {mode: 1};
    });
  }

  render(){
    switch(this.state.mode){
      case 0:
        return ( //meat of the page
          <div className="App">
            <Home color = {this.c} modeswitch = {this.setMode.bind(this)}/>
          </div>
        );
      case 1:
        return (
          <ScanMenu color = {this.c} main = {this.setMode.bind(this)}/>
        );

      default:
        return null;
    }

  }

}


export default App
