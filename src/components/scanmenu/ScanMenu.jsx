import React from 'react'
import PicMenu from './PicMenu'
import './scanmenu.css'

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
                        <PicMenu color = {this.props.color} modeswitch = {this.props.modeswitch} />
                    </div>
                );
            default:
                return null;
        }
    }
}

export default ScanMenu