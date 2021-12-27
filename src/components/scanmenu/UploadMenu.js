import React from 'react'
import upload from '../../assets/upload.png'

class UploadMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button className = "CamUploadMenu" style = {{backgroundColor: this.props.color}}>
                <img src = {upload} alt = ""></img> <br />
                Upload Image
            </button>
        );
    }
}

export default UploadMenu