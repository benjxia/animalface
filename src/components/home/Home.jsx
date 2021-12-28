import React from 'react'

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {active: true};
    }

    render(){
       // if(this.state.active){ //Home screen
            return (
        <div className = 'Whichanimal'>
            Which Animal Do You Look Like? <br />
            <button className= 'ModeButton' onClick = {this.props.modeswitch} style = {{backgroundColor: this.props.color}}>
                {/*
                Props.main is the function in Main.js that sets the main component inactive and makes it
                not render anything.
                */}

                Scan
            </button>
        </div>
            );
    }
}
    


export default Home