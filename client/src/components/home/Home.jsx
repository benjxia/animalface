import React from 'react'

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {active: true};
    }
//className= 'ModeButton' onClick = {this.props.modeswitch} style = {{backgroundColor: this.props.color}}
    render(){
       // if(this.state.active){ //Home screen
            return (
        <div className = 'Whichanimal'>
            Which Animal Do You Look Like? <br />
        <button type = "submit" className= 'ModeButton' onClick = {this.props.modeswitch} style = {{backgroundColor: this.props.color}}> 
            Scan
        </button>
        </div>
        );
    }
}
    


export default Home