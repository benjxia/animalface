import React from 'react'

class ScanMenu extends React.Component {
    render(){
        return (
            <div className = 'ScanMenu' id = 'scanmenu' style = {{backgroundColor: this.props.color}}>
            </div>
        );
    }
}

export default ScanMenu
