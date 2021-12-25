import React from 'react'

class ScanButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {active: true};

        this.handleClick = this.handleClick.bind(this); //unused at the moment
    }

    handleClick(){ //unused at the moment
        this.setState(prevState => ({
            active: !prevState.active
        }));
    }

    render(){
        return(
            <button className= 'ScanButton' onClick = {this.props.main}>
                {/*
                Props.main is the function in Main.js that sets the main component inactive and makes it
                not render anything.
                */}

                Scan
            </button>
            );
    }
}



export default ScanButton