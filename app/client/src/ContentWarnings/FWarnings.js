import React, {useState} from "react";

function FWarnings({content_warning_f}) {

    const [showFatphobia, setFatphobia] = useState(false)
    function revealFatphobia() {
        setFatphobia(true)
    }
    
    const [showFire, setFire] = useState(false)
    function revealFire() {
        setFire(true)
    }
    
    const [showForcedInstitutionalization, setForcedInstitutionalization] = useState(false)
    function revealForcedInstitutionalization() {
        setForcedInstitutionalization(true)
    }

    return(
        <div className="columns">
            <p onClick={revealFatphobia}><b>Fatphobia:</b>  {showFatphobia ? content_warning_f.fatphobia : "Click Here"}</p>
            <p onClick={revealFire}><b>Fire:</b>  {showFire ? content_warning_f.fire : "Click Here"}</p>
            <p onClick={revealForcedInstitutionalization}><b>Forced Institutionalization:</b>  {showForcedInstitutionalization ? content_warning_f.forced_institutionalization : "Click Here"}</p>
        </div>
    )
}
export default FWarnings;