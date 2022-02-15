import React, {useState} from "react";

function WWarnings({content_warning_w}) {

    const [showWar, setWar] = useState(false)
    function revealWar() {
        setWar(true)
    }

    return(
        <div className="columns">
            <p onClick={revealWar}><b>War:</b>  {showWar ? content_warning_w.war : "Click Here"}</p>
        </div>
    )
}

export default WWarnings;