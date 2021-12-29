import React from 'react'
import './scanmenu.css'
import cam from '../../assets/cam.png'
import upload from '../../assets/upload.png'
import axios from 'axios'

class ScanMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scanmode: 0,
            imginput: null,
            fileUploadState:""
        };
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

    fileSelectedHandler = event => {
        this.setState({
            imginput: event.target.files[0]
        })
    }
    fileUploadHandler = () =>{
        console.log("send help");
        /*
        const fd = new FormData();
        fd.append('image',this.state.imginput,this.state.imginput.name);
        axios.post('some url thing', fd.then(res => {console.log(res);}));
        */
    }

    uploadImgHandler = () =>{
        document.getElementById("uploadfile").click();
        //this.fileUploadHandler();
        //this.setScanMode1(); 
    }

    render(){
        switch(this.state.scanmode){
            case 0:
                //Main scan menu that lets users choose between camera input or file upload. 
                return (
                    <div className = 'ScanMenu' id = 'scanmenu' style = {{backgroundColor: this.props.color}}>
                        <div className = "CamUploadContainer">
                            <input id = "uploadfile" type = "file" accept = "image/*" onChange = {this.fileSelectedHandler} hidden/>
                            <button className = "CamUploadMenu" style = {{backgroundColor: this.props.color}} onClick = {this.uploadImgHandler.bind(this)}>
                                <img src = {upload} alt = ""></img> <br />
                                Upload Image
                            </button>
                            {/*
                             <button className = "CamUploadMenu" style = {{backgroundColor: this.props.color}}>
                                <img src = {cam} alt = ""></img> <br />
                                Use Camera
                            </button>
                            */}

                            <button className = "ScanBackButton" style = {{backgroundColor: this.props.color}} onClick = {this.props.modeswitch}>Back</button>
                        </div>
                    </div>
                );
            case 1:
                return(
                    <div className = 'ScanMenu' id = 'scanmenu' style = {{backgroundColor: this.props.color}}>


                    </div>
                );
            default:
                return null;
        }
    }
}

export default ScanMenu