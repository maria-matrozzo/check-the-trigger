import React, {useState} from "react";

function OWarnings({content_warning_o}) {

    const [showOuting, setOuting] = useState(false)
    function revealOuting() {
        setOuting(true)
    }

    return(
        <div className="columns">
            <p onClick={revealOuting}><b>Outing:</b>  {showOuting ? content_warning_o.outing : "Click Here"}</p>
        </div>
    )
}

export default OWarnings;