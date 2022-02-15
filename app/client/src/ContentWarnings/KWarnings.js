import React, {useState} from 'react';

function KWarnings({content_warning_k}) {

    const [showKidnapping, setKidnapping] = useState(false)
    function revealKidnapping() {
        setKidnapping(true)
    }

    return(
        <div className="columns">
            <p onClick={revealKidnapping}><b>Kidnapping:</b>  {showKidnapping ? content_warning_k.kidnapping : "Click Here"}</p>
        </div>
    )
}

export default KWarnings;