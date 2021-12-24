import React from 'react'

const ScanButton = ({text}) => {
    const onClick = () => {
        
    }
    return(
        <button onClick = {onClick} className= 'ScanButton'>
            {text}
        </button>
    );
}

ScanButton.defaultProps = {
    text : 'N/A'
}

export default ScanButton