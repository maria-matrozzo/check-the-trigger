import React, {useState} from "react";

function MWarnings({content_warning_m}) {

    const [showMassShooting, setMassShooting] = useState(false)
    function revealMassShooting() {
        setMassShooting(true)
    }
    
    const [showMedicalContent, setMedicalContent] = useState(false)
    function revealMedicalContent() {
        setMedicalContent(true)
    }

    const [showMedicalTrauma, setMedicalTrauma] = useState(false)
    function revealMedicalTrauma() {
        setMedicalTrauma(true)
    }
    
    const [showMentalIllness, setMentalIllness] = useState(false)
    function revealMentalIllness() {
        setMentalIllness(true)
    }
    
    const [showMiscarriage, setMiscarriage] = useState(false)
    function revealMiscarriage() {
        setMiscarriage(true)
    }

    const [showMisogyny, setMisogyny] = useState(false)
    function revealMisogyny() {
        setMisogyny(true)
    }
    
    const [showMurder, setMurder] = useState(false)
    function revealMurder() {
        setMurder(true)
    }

    return(
        <div className="columns">
            <p onClick={revealMassShooting}><b>Mass Shooting:</b>  {showMassShooting ? content_warning_m.mass_shooting : "Click Here"}</p>
            <p onClick={revealMedicalContent}><b>Medical Content:</b>  {showMedicalContent ? content_warning_m.medical_content : "Click Here"}</p>
            <p onClick={revealMedicalTrauma}><b>Medical Trauma:</b>  {showMedicalTrauma ? content_warning_m.medical_trauma : "Click Here"}</p>
            <p onClick={revealMentalIllness}><b>Mental Illness:</b>  {showMentalIllness ? content_warning_m.mental_illness : "Click Here"}</p>
            <p onClick={revealMiscarriage}><b>Miscarriage:</b>  {showMiscarriage ? content_warning_m.miscarriage : "Click Here"}</p>
            <p onClick={revealMisogyny}><b>Misogyny:</b>  {showMisogyny ? content_warning_m.misogyny : "Click Here"}</p>
            <p onClick={revealMurder}><b>Murder:</b>  {showMurder ? content_warning_m.murder : "Click Here"}</p>
        </div>
    )
}

export default MWarnings;