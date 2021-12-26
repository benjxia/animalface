import React from 'react'

class ScanMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {mode: 0};
    }
    render(){
        return (
            <div className = 'ScanMenu' id = 'scanmenu' style = {{backgroundColor: this.props.color}}>
                
            </div>
        );
    }
}

export default ScanMenu