import React, {useState} from "react";

function TWarnings({content_warning_t}) {

    const [showTerminalIllness, setTerminalIllness] = useState(false)
    function revealTerminalIllness() {
        setTerminalIllness(true)
    }
    
    const [showTorture, setTorture] = useState(false)
    function revealTorture() {
        setTorture(true)
    }
    
    const [showToxicFriendship, setToxicFriendship] = useState(false)
    function revealToxicFriendship() {
        setToxicFriendship(true)
    }
    
    const [showToxicRelationship, setToxicRelationship] = useState(false)
    function revealToxicRelationship() {
        setToxicRelationship(true)
    }
    
    const [showTrafficking, setTrafficking] = useState(false)
    function revealTrafficking() {
        setTrafficking(true)
    }
    
    const [showTransphobia, setTransphobia] = useState(false)
    function revealTransphobia() {
        setTransphobia(true)
    }

    return(
        <div className="columns">
            <p onClick={revealTerminalIllness}><b>Terminal Illness:</b>  {showTerminalIllness ? content_warning_t.terminal_illness : "Click Here"}</p>
            <p onClick={revealTorture}><b>Torture:</b>  {showTorture ? content_warning_t.torture : "Click Here"}</p>
            <p onClick={revealToxicFriendship}><b>Toxic Friendhsip:</b>  {showToxicFriendship ? content_warning_t.toxic_friendship : "Click Here"}</p>
            <p onClick={revealToxicRelationship}><b>Toxic Relationship:</b>  {showToxicRelationship ? content_warning_t.toxic_relationship : "Click Here"}</p>
            <p onClick={revealTrafficking}><b>Trafficking:</b>  {showTrafficking ? content_warning_t.trafficking : "Click Here"}</p>
            <p onClick={revealTransphobia}><b>Transphobia:</b>  {showTransphobia ? content_warning_t.transphobia : "Click Here"}</p>
        </div>
    )
}

export default TWarnings;