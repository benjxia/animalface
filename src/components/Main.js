import React from 'react'
import ScanButton from './ScanButton'

class Main extends React.Component {
    render(){
        return (
            <div className = 'Whichanimal'>
                Which Animal Do You Look Like? <br></br>
                <ScanButton text = 'Scan'/>
            </div>
        );
    }
}

export default Main