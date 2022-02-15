import React, {useState} from "react";

function DWarnings({content_warning_d}){

    const [showDeadnaming, setDeadnaming] = useState(false)
    function revealDeadnaming() {
        setDeadnaming(true)
    }
    
    const [showDeath, setDeath] = useState(false)
    function revealDeath() {
        setDeath(true)
    }
    
    const [showDeathOfAParent, setDeathOfAParent] = useState(false)
    function revealDeathOfAParent() {
        setDeathOfAParent(true)
    }
    
    const [showDementia, setDementia] = useState(false)
    function revealDementia() {
        setDementia(true)
    }
    
    const [showDomesticAbuse, setDomesticAbuse] = useState(false)
    function revealDomesticAbuse() {
        setDomesticAbuse(true)
    }
    
    const [showDrugAbuse, setDrugAbuse] = useState(false)
    function revealDrugAbuse() {
        setDrugAbuse(true)
    }
    
    const [showDrugUse, setDrugUse] = useState(false)
    function revealDrugUse() {
        setDrugUse(true)
    }
    
    const [showDysphoria, setDysphoria] = useState(false)
    function revealDysphoria() {
        setDysphoria(true)
    }

    return(
        <div className="columns">
            <p onClick={revealDeadnaming}><b>Deadnaming:</b>  {showDeadnaming ? content_warning_d.deadnaming : "Click Here"}</p>
            <p onClick={revealDeath}><b>Death:</b>  {showDeath ? content_warning_d.death : "Click Here"}</p>
            <p onClick={revealDeathOfAParent}><b>Death of a Parent:</b>  {showDeathOfAParent ? content_warning_d.death_of_a_parent : "Click Here"}</p>
            <p onClick={revealDementia}><b>Dementia:</b>  {showDementia ? content_warning_d.dementia : "Click Here"}</p>
            <p onClick={revealDomesticAbuse}><b>Domestic Violence:</b>  {showDomesticAbuse ? content_warning_d.domestic_abuse : "Click Here"}</p>
            <p onClick={revealDrugAbuse}><b>Drug Abuse:</b>  {showDrugAbuse ? content_warning_d.drug_abuse : "Click Here"}</p>
            <p onClick={revealDrugUse}><b>Drug Use:</b>  {showDrugUse ? content_warning_d.drug_use : "Click Here"}</p>
            <p onClick={revealDysphoria}><b>Dysphoria:</b>  {showDysphoria ? content_warning_d.dysphoria : "Click Here"}</p>
        </div>
    )
}

export default DWarnings;