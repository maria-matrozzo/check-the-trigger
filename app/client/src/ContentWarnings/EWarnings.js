import React, {useState} from "react";

function EWarnings({content_warning_e}) {

    const [showEatingDisorder, setEatingDisorder] = useState(false)
    function revealEatingDisorder() {
        setEatingDisorder(true)
    }
    
    const [showEmotionalAbuse, setEmotionalAbuse] = useState(false)
    function revealEmotionalAbuse() {
        setEmotionalAbuse(true)
    }
    
    const [showExcrement, setExcrement] = useState(false)
    function revealExcrement() {
        setExcrement(true)
    }

    return(
        <div className="columns">
            <p onClick={revealEatingDisorder}><b>Eating Disorder:</b>  {showEatingDisorder ? content_warning_e.eating_disorder : "Click Here"}</p>
            <p onClick={revealEmotionalAbuse}><b>Emotional Abuse:</b>  {showEmotionalAbuse ? content_warning_e.emotional_abuse : "Click Here"}</p>
            <p onClick={revealExcrement}><b>Excrement:</b>  {showExcrement ? content_warning_e.excrement : "Click Here"}</p>
        </div>
    )
}

export default EWarnings;