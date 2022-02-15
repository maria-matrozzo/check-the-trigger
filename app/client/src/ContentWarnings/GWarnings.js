import React, {useState} from "react";

function GWarnings({content_warning_g}){

    const [showGaslighting, setGaslighting] = useState(false)
    function revealGaslighting() {
        setGaslighting(true)
    }
    
    const [showGenocide, setGenocide] = useState(false)
    function revealGenocide() {
        setGenocide(true)
    }
    
    const [showGore, setGore] = useState(false)
    function revealGore() {
        setGore(true)
    }
    
    const [showGrief, setGrief] = useState(false)
    function revealGrief() {
        setGrief(true)
    }
    
    const [showGunViolence, setGunViolence] = useState(false)
    function revealGunViolence() {
        setGunViolence(true)
    }

    return(
        <div className="columns">
            <p onClick={revealGaslighting}><b>Gaslighting:</b>  {showGaslighting ? content_warning_g.gaslighting : "Click Here"}</p>
            <p onClick={revealGenocide}><b>Genocide:</b>  {showGenocide ? content_warning_g.genocide : "Click Here"}</p>
            <p onClick={revealGore}><b>Gore:</b>  {showGore ? content_warning_g.gore : "Click Here"}</p>
            <p onClick={revealGrief}><b>Grief:</b>  {showGrief ? content_warning_g.grief : "Click Here"}</p>
            <p onClick={revealGunViolence}><b>Gun Violence:</b>  {showGunViolence ? content_warning_g.gun_violence : "Click Here"}</p>
        </div>
    )
}

export default GWarnings;