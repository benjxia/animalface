import React from 'react'
import blob from '../assets/blob.png'

class header extends React.Component {
    render(){
        return (
            <img src={blob} alt = 'blob' className= 'blob'></img>
        )
    }
}

export default header //HEADER IS UNUSED