import React from 'react'
import ScanMenu from './ScanMenu'
import ScanButton from './ScanButton'

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {active: true};
    }
    setInactive(){
        this.setState(prevState => ({
            active: !prevState.active
        }));
        
    }
    render(){
        if(this.state.active){
            return (
                <div className = 'Whichanimal'>
                    Which Animal Do You Look Like? <br></br>
                    <ScanButton text = 'Scan' main = {this.setInactive.bind(this)}/> 
                    {/* 
                    this.setInactive here allows the child component (The 'Scan button)
                    to set the entire main componenent as inactive
                    */}
                </div>
            );
        }else{
            return (
                <ScanMenu color = {this.props.color}/>
            );
        }
    }
    
}

export default Main