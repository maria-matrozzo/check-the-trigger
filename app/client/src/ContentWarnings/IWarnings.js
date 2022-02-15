import React, {useState} from "react";

function IWarnings({content_warning_i}) {

    const [showIncest, setIncest] = useState(false)
    function revealIncest() {
        setIncest(true)
    }
    
    const [showInfertility, setInfertility] = useState(false)
    function revealInfertility() {
        setInfertility(true)
    }
    
    const [showInfidelity, setInfidelity] = useState(false)
    function revealInfidelity() {
        setInfidelity(true)
    }
    
    const [showInjury, setInjury] = useState(false)
    function revealInjury() {
        setInjury(true)
    }
    
    const [showIslamophobia, setIslamophobia] = useState(false)
    function revealIslamophobia() {
        setIslamophobia(true)
    }

    return(
        <div className="columns">
            <p onClick={revealIncest}><b>Incest:</b>  {showIncest ? content_warning_i.incest : "Click Here"}</p>
            <p onClick={revealInfertility}><b>Infertility:</b>  {showInfertility ? content_warning_i.infertility : "Click Here"}</p>
            <p onClick={revealInfidelity}><b>Infidelity:</b>  {showInfidelity ? content_warning_i.infidelity : "Click Here"}</p>
            <p onClick={revealInjury}><b>Injury Detail:</b>  {showInjury ? content_warning_i.injury : "Click Here"}</p>
            <p onClick={revealIslamophobia}><b>Islamophobia:</b>  {showIslamophobia ? content_warning_i.islamophobia : "Click Here"}</p>
        </div>
    )
}

export default IWarnings;