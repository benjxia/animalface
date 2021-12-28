import React from 'react'
import cam from '../../assets/cam.png'
import upload from '../../assets/upload.png'

class PicMenu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "CamUploadContainer">
                <button className = "CamUploadMenu" style = {{backgroundColor: this.props.color}}>
                    <img src = {upload} alt = ""></img> <br />
                    Upload Image
                </button>
                <button className = "CamUploadMenu" style = {{backgroundColor: this.props.color}}>
                    <img src = {cam} alt = ""></img> <br />
                    Use Camera
                </button>
                <button className = "ScanBackButton" style = {{backgroundColor: this.props.color}} onClick = {this.props.modeswitch}>Back</button>
            </div>
        );
    }

}
export default PicMenu