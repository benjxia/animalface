import React from 'react'
import ScanMenu from './scanmenu/ScanMenu'
import ScanButton from './home/ScanButton'

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {active: true};
    }
    toggleState(){ //Toggles between home screen and menu
        this.setState(prevState => ({
            active: !prevState.active
        }));
        
    }
    render(){
        if(this.state.active){ //Home screen
            return (
                <div className = 'Whichanimal'>
                    Which Animal Do You Look Like? <br></br>
                    <ScanButton text = 'Scan' main = {this.toggleState.bind(this)}/> 
                    {/* 
                    this.setInactive here allows the child component (The 'Scan button)
                    to set the entire main componenent as inactive
                    */}
                </div>
            );
        }else{ // Menu screen
            return (
                <ScanMenu color = {this.props.color} main = {this.toggleState.bind(this)}/>
            );
        }
    }
    
}

export default Main