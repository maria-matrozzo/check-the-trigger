import React, {useState} from "react";

function RWarnings({content_warning_r}) {

    const [showRacialSlur, setRacialSlur] = useState(false)
    function revealRacialSlur() {
        setRacialSlur(true)
    }
    
    const [showRacism, setRacism] = useState(false)
    function revealRacism() {
        setRacism(true)
    }
    
    const [showRape, setRape] = useState(false)
    function revealRape() {
        setRape(true)
    }
    
    const [showReligiousBigotry, setReligiousBigotry] = useState(false)
    function revealReligiousBigotry() {
        setReligiousBigotry(true)
    }

    return(
        <div className="columns">
            <p onClick={revealRacialSlur}><b>Racial Slur:</b>  {showRacialSlur ? content_warning_r.racial_slur : "Click Here"}</p>
            <p onClick={revealRacism}><b>Racism:</b>  {showRacism ? content_warning_r.racism : "Click Here"}</p>
            <p onClick={revealRape}><b>Rape:</b>  {showRape ? content_warning_r.rape : "Click Here"}</p>
            <p onClick={revealReligiousBigotry}><b>Religious Bigotry:</b>  {showReligiousBigotry ? content_warning_r.religious_bigotry : "Click Here"}</p>
        </div>
    )
}

export default RWarnings;