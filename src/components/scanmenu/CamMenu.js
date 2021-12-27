import React from 'react'
import cam from '../../assets/cam.png'

class CamMenu extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
        <button className = "CamUploadMenu" style = {{backgroundColor: this.props.color}}>
            <img src = {cam} alt = ""></img> <br />
            Use Camera
        </button>
        );
    }
}
export default CamMenu