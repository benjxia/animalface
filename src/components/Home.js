import React from 'react'
import ScanButton from './home/ScanButton'

class Home extends React.Component {
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
       // if(this.state.active){ //Home screen
            return (
        <div className = 'Whichanimal'>
            Which Animal Do You Look Like? <br></br>
            <ScanButton text = 'Scan' color = {this.props.color} modeswitch = {this.props.modeswitch}/> 
            {/* 
            this.setInactive here allows the child component (The 'Scan button)
            to set the entire main componenent as inactive
            */}
        </div>
            );
    }
}
    


export default Home