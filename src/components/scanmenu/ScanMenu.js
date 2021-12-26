import React from 'react'
import UploadMenu from './UploadMenu'

class ScanMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {scanmode: 0};
    }

    setScanMode0(){
        this.setState(() => {
          return {scanmode: 0
        }});
    }

    render(){
        switch(this.state.scanmode){
            case 0:
                return (
                    <div className = 'ScanMenu' id = 'scanmenu' style = {{backgroundColor: this.props.color}}>
                        <UploadMenu color = {this.props.color} scanmodeswitch = {this.setScanMode0.bind(this)}/>
                    </div>
                );
            default:
                return null;
        }
    }
}

export default ScanMenu