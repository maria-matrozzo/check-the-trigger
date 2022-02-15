import React, {useState} from "react";

function LWarnings({content_warning_l}) {

    const [showLesbophobia, setLesbophobia] = useState(false)
    function revealLesbophobia() {
        setLesbophobia(true)
    }

    return(
        <div className="columns">
            <p onClick={revealLesbophobia}><b>Lesbophobia:</b>  {showLesbophobia ? content_warning_l.lesbophobia : "Click Here"}</p>
        </div>
    )
}

export default LWarnings;