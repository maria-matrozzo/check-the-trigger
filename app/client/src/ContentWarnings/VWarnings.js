import React, {useState} from 'react';

function VWarnings({content_warning_v}) {

    const [showViolence, setViolence] = useState(false)
    function revealViolence() {
        setViolence(true)
    }
    
    const [showVomit, setVomit] = useState(false)
    function revealVomit() {
        setVomit(true)
    }
    
    return(
        <div className="columns">
            <p onClick={revealViolence}><b>Violence:</b>  {showViolence ? content_warning_v.violence : "Click Here"}</p>
            <p onClick={revealVomit}><b>Vomit:</b>  {showVomit ? content_warning_v.vomit : "Click Here"}</p>
        </div>
    )
}

export default VWarnings;