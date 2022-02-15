import React, {useState} from "react";

function HWarnings({content_warning_h}) {

    const [showHateCrime, setHateCrime] = useState(false)
    function revealHateCrime() {
        setHateCrime(true)
    }
    
    const [showHomophobia, setHomophobia] = useState(false)
    function revealHomophobia() {
        setHomophobia(true)
    }

    return(
        <div className="columns">
            <p onClick={revealHateCrime}><b>Hate Crime:</b>  {showHateCrime ? content_warning_h.hate_crime : "Click Here"}</p>
            <p onClick={revealHomophobia}><b>Homophobia:</b>  {showHomophobia ? content_warning_h.homophobia : "Click Here"}</p>
        </div>
    )
}

export default HWarnings;