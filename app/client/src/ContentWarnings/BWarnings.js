import React, {useState} from 'react';

function BWarnings({content_warning_b}){

    const [showBiphobia, setBiphobia] = useState(false)
    function revealBiphobia() {
        setBiphobia(true)
    }

    const [showBlood, setBlood] = useState(false)
    function revealBlood() {
        setBlood(true)
    }

    const [showBodyHorror, setBodyHorror] = useState(false)
    function revealBodyHorror() {
        setBodyHorror(true)
    }

    const [showBodyShaming, setBodyShaming] = useState(false)
    function revealBodyShaming() {
        setBodyShaming(true)
    }

    const [showBullying, setBullying] = useState(false)
    function revealBullying() {
        setBullying(true)
    }

    return(
        <div className="columns">
            <p onClick={revealBiphobia}><b>Biphobia:</b>  {showBiphobia ? content_warning_b.biphobia : "Click Here"}</p>
            <p onClick={revealBlood}><b>Blood:</b>  {showBlood ? content_warning_b.blood : "Click Here"}</p>
            <p onClick={revealBodyHorror}><b>Body Horror:</b>  {showBodyHorror ? content_warning_b.body_horror : "Click Here"}</p>
            <p onClick={revealBodyShaming}><b>Body Shaming:</b>  {showBodyShaming ? content_warning_b.body_shaming : "Click Here"}</p>
            <p onClick={revealBullying}><b>Bullying:</b>  {showBullying ? content_warning_b.bullying : "Click Here"}</p>
        </div>
    )
}

export default BWarnings;