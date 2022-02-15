import React, {useState} from 'react';

function AWarnings({content_warning_a}) {

    const [showAbandoment, setAbandoment] = useState(false)
    function revealAbandonment() {
        setAbandoment(true)
    }

    const [showAbleism, setAbleism] = useState(false)
    function revealAbleism() {
        setAbleism(true)
    }

    const [showAbortion, setAbortion] = useState(false)
    function revealAbortion() {
        setAbortion(true)
    }

    const [showAcephobia, setAcephobia] = useState(false)
    function revealAcephobia() {
        setAcephobia(true)
    }

    const [showAddiction, setAddiction] = useState(false)
    function revealAddiction() {
        setAddiction(true)
    }

    const [showAdultMinorRelationship, setAdultMinorRelationship] = useState(false)
    function revealAdultMinorRelationship() {
        setAdultMinorRelationship(true)
    }

    const [showAlcohol, setAlcohol] = useState(false)
    function revealAlcohol() {
        setAlcohol(true)
    }

    const [showAlcohosim, setAlcohosim] = useState(false)
    function revealAlcohosim() {
        setAlcohosim(true)
    }

    const [showAnimalCruelty, setAnimalCruelty] = useState(false)
    function revealAnimalCruelty() {
        setAnimalCruelty(true)
    }

    const [showAnimalDeath, setAnimalDeath] = useState(false)
    function revealAnimalDeath() {
        setAnimalDeath(true)
    }

    const [showAntisemitism, setAntisemitism] = useState(false)
    function revealAntisemitism() {
        setAntisemitism(true)
    }

    return (
        <div className="columns">
            <p onClick={revealAbandonment}><b>Abandonment:</b>  {showAbandoment ? content_warning_a.abandonment : "Click Here"}</p>
            <p onClick={revealAbleism}><b>Ableism:</b>  {showAbleism ? content_warning_a.ableism : "Click Here"}</p>
            <p onClick={revealAbortion}><b>Abortion:</b>  {showAbortion ? content_warning_a.abortion : "Click Here"}</p>
            <p onClick={revealAcephobia}><b>Acephobia:</b>  {showAcephobia ? content_warning_a.acephobia : "Click Here"}</p>
            <p onClick={revealAddiction}><b>Addiction:</b>  {showAddiction ? content_warning_a.addiction : "Click Here"}</p>
            <p onClick={revealAdultMinorRelationship}><b>Adult/minor Relationship:</b>  {showAdultMinorRelationship ? content_warning_a.adult_minor_relationship : "Click Here"}</p>
            <p onClick={revealAlcohol}><b>Alcohol:</b>  {showAlcohol ? content_warning_a.alcohol : "Click Here"}</p>
            <p onClick={revealAlcohosim}><b>Alcoholism:</b>  {showAlcohosim ? content_warning_a.alcoholism : "Click Here"}</p>
            <p onClick={revealAnimalCruelty}><b>Animal Cruelty:</b>  {showAnimalCruelty ? content_warning_a.animal_cruelty : "Click Here"}</p>
            <p onClick={revealAnimalDeath}><b>Animal Death:</b>  {showAnimalDeath ? content_warning_a.animal_death : "Click Here"}</p>
            <p onClick={revealAntisemitism}><b>Antisemitism:</b>  {showAntisemitism ? content_warning_a.antisemitism : "Click Here"}</p>
        </div>
    )
}

export default AWarnings;