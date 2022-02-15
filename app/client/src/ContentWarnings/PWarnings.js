import React, {useState} from "react";

function PWarnings({content_warning_p}) {

    const [showPanicAttack, setPanicAttack] = useState(false)
    function revealPanicAttack() {
        setPanicAttack(true)
    }
    
    const [showPedophilia, setPedophilia] = useState(false)
    function revealPedophilia() {
        setPedophilia(true)
    }
    
    const [showPhysicalAbuse, setPhysicalAbuse] = useState(false)
    function revealPhysicalAbuse() {
        setPhysicalAbuse(true)
    }
    
    const [showPoliceBrutality, setPoliceBrutality] = useState(false)
    function revealPoliceBrutality() {
        setPoliceBrutality(true)
    }
    
    const [showPregnancy, setPregnancy] = useState(false)
    function revealPregnancy() {
        setPregnancy(true)
    }

    return(
        <div className="columns">
            <p onClick={revealPanicAttack}><b>Panic Attack:</b>  {showPanicAttack ? content_warning_p.panic_attack : "Click Here"}</p>
            <p onClick={revealPedophilia}><b>Pedophilia:</b>  {showPedophilia ? content_warning_p.pedophilia : "Click Here"}</p>
            <p onClick={revealPhysicalAbuse}><b>Physical Abuse:</b>  {showPhysicalAbuse ? content_warning_p.physical_abuse : "Click Here"}</p>
            <p onClick={revealPoliceBrutality}><b>Police Brutality:</b>  {showPoliceBrutality ? content_warning_p.police_brutality : "Click Here"}</p>
            <p onClick={revealPregnancy}><b>Pregnancy:</b>  {showPregnancy ? content_warning_p.pregnancy : "Click Here"}</p>
        </div>
    )
}

export default PWarnings;