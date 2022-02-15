import React, {useState} from "react";

function SWarnings({content_warning_s}) {

    const [showSchizophrenia, setSchizophrenia] = useState(false)
    function revealSchizophrenia() {
        setSchizophrenia(true)
    }
    
    const [showSchoolShooting, setSchoolShooting] = useState(false)
    function revealSchoolShooting() {
        setSchoolShooting(true)
    }
    
    const [showSelfHarm, setSelfHarm] = useState(false)
    function revealSelfHarm() {
        setSelfHarm(true)
    }
    
    const [showSexism, setSexism] = useState(false)
    function revealSexism() {
        setSexism(true)
    }
    
    const [showSexualAssault, setSexualAssault] = useState(false)
    function revealSexualAssault() {
        setSexualAssault(true)
    }
    
    const [showSexualHarrassment, setSexualHarrassment] = useState(false)
    function revealSexualHarrassment() {
        setSexualHarrassment(true)
    }
    
    const [showSexualViolence, setSexualViolence] = useState(false)
    function revealSexualViolence() {
        setSexualViolence(true)
    }
    
    const [showSlavery, setSlavery] = useState(false)
    function revealSlavery() {
        setSlavery(true)
    }
    
    const [showStalking, setStalking] = useState(false)
    function revealStalking() {
        setStalking(true)
    }
    
    const [showSuicidalThoughts, setSuicidalThoughts] = useState(false)
    function revealSuicidalThoughts() {
        setSuicidalThoughts(true)
    }
    
    const [showSuicide, setSuicide] = useState(false)
    function revealSuicide() {
        setSuicide(true)
    }
    
    const [showSuicideAttempt, setSuicideAttempt] = useState(false)
    function revealSuicideAttempt() {
        setSuicideAttempt(true)
    }

    return(
        <div className="columns">
            <p onClick={revealSchizophrenia}><b>Schizophrenia:</b>  {showSchizophrenia ? content_warning_s.schizophrenia : "Click Here"}</p>
            <p onClick={revealSchoolShooting}><b>School Shooting:</b>  {showSchoolShooting ? content_warning_s.school_shooting : "Click Here"}</p>
            <p onClick={revealSelfHarm}><b>Self Harm:</b>  {showSelfHarm ? content_warning_s.self_harm : "Click Here"}</p>
            <p onClick={revealSexism}><b>Sexism:</b>  {showSexism ? content_warning_s.sexism : "Click Here"}</p>
            <p onClick={revealSexualAssault}><b>Sexual Assault:</b>  {showSexualAssault ? content_warning_s.sexual_assault : "Click Here"}</p>
            <p onClick={revealSexualHarrassment}><b>Sexual Harrassment:</b>  {showSexualHarrassment ? content_warning_s.sexual_harrassment : "Click Here"}</p>
            <p onClick={revealSexualViolence}><b>Sexual Violence:</b>  {showSexualViolence ? content_warning_s.violence : "Click Here"}</p>
            <p onClick={revealSlavery}><b>Slavery:</b>  {showSlavery ? content_warning_s.slavery : "Click Here"}</p>
            <p onClick={revealStalking}><b>Stalking:</b>  {showStalking ? content_warning_s.stalking : "Click Here"}</p>
            <p onClick={revealSuicidalThoughts}><b>Suicial Thoughts:</b>  {showSuicidalThoughts ? content_warning_s.suicidal_thoughts : "Click Here"}</p>
            <p onClick={revealSuicide}><b>Suicide:</b>  {showSuicide ? content_warning_s.suicide : "Click Here"}</p>
            <p onClick={revealSuicideAttempt}><b>Suicide Attempt:</b>  {showSuicideAttempt ? content_warning_s.suicide_attempt : "Click Here"}</p>
        </div>
    )
}

export default SWarnings;