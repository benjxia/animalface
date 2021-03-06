import React from 'react'
import './scanmenu.css'
import upload from '../../assets/upload.png'
import axios from 'axios'

class ScanMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scanmode: 0,
            selectedFile: null,
            server_output: "moo",
        };
        this.imgChangeHandler.bind(this);
        this.uploadSubmitHandler.bind(this);
    }
    /*
    Scan mode 0: Default, Upload menu still up
    Scan mode 1: Transition
    Scan mode 2: Results...
    */
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

    uploadClickHandler = () =>{  // "Proxy" for actual image input
        document.getElementById("uploadfile").click();
    }

    imgChangeHandler = event => {
        this.setState({ selectedFile: event.target.files[0] });
    } 

    uploadSubmitHandler = (event) =>{
        event.preventDefault();

        const data = new FormData();
        data.append('file', this.state.selectedFile);
        axios.post('/upload', data)
        .then(res => {
            this.setState({ server_output: res.data });
            console.log(this.state.server_output);
            console.log("blah");
            console.log(this.state.server_output[2]);
        });
       // console.log(this.state.server_output[0]);
        this.setScanMode1();
    }

    render(){
        switch(this.state.scanmode){
            case 0:
                //Main scan menu that lets users choose between camera input or file upload. 
                return (
                    <div className = 'ScanMenu' id = 'scanmenu' style = {{backgroundColor: this.props.color}}>
                        <form className = "CamUploadContainer" onSubmit = {this.uploadSubmitHandler}>
                                <input id = "uploadfile" type = "file" accept = "image/*" onChange = {this.imgChangeHandler} hidden />
                                <button type = "button" className = "CamUploadMenu" style = {{backgroundColor: this.props.color}} onClick = {this.uploadClickHandler}>
                                    <img src = {upload} alt = ""></img> <br />
                                    Upload Image <br/>
                                    {this.state.selectedFile==null? "" : this.state.selectedFile.name}
                                </button>
                                <button type="submit" className = "ScanBackButton" style = {{backgroundColor: this.props.color}}>
                                    Submit
                                </button>
                                <button className = "ScanBackButton" style = {{backgroundColor: this.props.color}} onClick = {this.props.modeswitch}>Back</button>
                        </form>
                    </div>
                );
            case 1:
                return(
                    <div className = 'ScanMenu' id = 'scanmenu' style = {{backgroundColor: this.props.color}}>
                        Insert some processing animation idk
                        <img style= {{maxWidth:500,maxHeight:500}} src={`http://localhost:3000/${this.state.server_output[0].filename}`} alt= "it didnt work :(" /> 
                    </div>
                );
            default:
                return null;
        }
    }
}

export default ScanMenu