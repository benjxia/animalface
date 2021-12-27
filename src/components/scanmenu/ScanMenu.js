import React from 'react'
import UploadMenu from './UploadMenu'
import CamMenu from './CamMenu'

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

    setScanMode1(){
        this.setState(() => {
          return {scanmode: 1
        }});
    }

    render(){
        switch(this.state.scanmode){
            case 0:
                //Main scan menu that lets users choose between camera input or file upload. 
                return (
                    <div className = 'ScanMenu' id = 'scanmenu' style = {{backgroundColor: this.props.color}}>
                        <UploadMenu color = {this.props.color} scanmodeswitch = {this.setScanMode0.bind(this)}/>
                        <CamMenu color = {this.props.color} scanmodeswitch = {this.setScanMode0.bind(this)}/>
                        <button className = "ScanBackButton" style = {{backgroundColor: this.props.color}} onClick = {this.props.modeswitch}>Back</button>
                    </div>
                );
            default:
                return null;
        }
    }
}

export default ScanMenu