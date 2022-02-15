import React, {useState} from 'react';

function CWarnings({content_warning_c}) {

    const [showCancer, setCancer] = useState(false)
    function revealCancer() {
        setCancer(true)
    }

    const [showCannibalism, setCannibalism] = useState(false)
    function revealCannibalism() {
        setCannibalism(true)
    }

    const [showCarAccident, setCarAccident] = useState(false)
    function revealCarAccident() {
        setCarAccident(true)
    }

    const [showChildAbuse, setChildAbuse] = useState(false)
    function revealChildAbuse() {
        setChildAbuse(true)
    }

    const [showChildDeath, setChildDeath] = useState(false)
    function revealChildDeath() {
        setChildDeath(true)
    }

    const [showChronicIllness, setChronicIllness] = useState(false)
    function revealChronicIllness() {
        setChronicIllness(true)
    }
    
    const [showClassism, setClassism] = useState(false)
    function revealClassism() {
        setClassism(true)
    }
    
    const [showColonization, setColonization] = useState(false)
    function revealColonization() {
        setColonization(true)
    }
    
    const [showConfinement, setConfinement] = useState(false)
    function revealConfinement() {
        setConfinement(true)
    }
    
    const [showCulturalAppropriation, setCulturalAppropriation] = useState(false)
    function revealCulturalAppropriation() {
        setCulturalAppropriation(true)
    }
    
    const [showCursing, setCursing] = useState(false)
    function revealCursing() {
        setCursing(true)
    }

    return(
        <div className="columns">
            <p onClick={revealCancer}><b>Cancer:</b>  {showCancer ? content_warning_c.cancer : "Click Here"}</p>
            <p onClick={revealCannibalism}><b>Cannibalism:</b>  {showCannibalism ? content_warning_c.cannibalism : "Click Here"}</p>
            <p onClick={revealCarAccident}><b>Car Accident:</b>  {showCarAccident ? content_warning_c.car_accident : "Click Here"}</p>
            <p onClick={revealChildAbuse}><b>Child Abuse:</b>  {showChildAbuse ? content_warning_c.child_abuse : "Click Here"}</p>
            <p onClick={revealChildDeath}><b>Child Death:</b>  {showChildDeath ? content_warning_c.child_death : "Click Here"}</p>
            <p onClick={revealChronicIllness}><b>Chronic Illness:</b>  {showChronicIllness ? content_warning_c.chronic_illness : "Click Here"}</p>
            <p onClick={revealClassism}><b>Classism:</b>  {showClassism ? content_warning_c.classism : "Click Here"}</p>
            <p onClick={revealColonization}><b>Colonization:</b>  {showColonization ? content_warning_c.colonization : " Click Here"}</p>
            <p onClick={revealConfinement}><b>Confinement:</b>  {showConfinement ? content_warning_c.confinement : "Click Here"}</p>
            <p onClick={revealCulturalAppropriation}><b>Cultural Appropriation:</b>  {showCulturalAppropriation ? content_warning_c.cultural_appropriation : "Click Here"}</p>
            <p onClick={revealCursing}><b>Cursing:</b>  {showCursing ? content_warning_c.cursing : "Click Here"}</p>
        </div>
    )
}

export default CWarnings;