import React, {useState} from 'react';

function XWarnings({content_warning_x}) {

    const [showXenophobia, setXenophobia] = useState(false)
    function revealXenophobia() {
        setXenophobia(true)
    }

    return(
        <div className="columns">
            <p onClick={revealXenophobia}><b>Xenophobia:</b>  {showXenophobia ? content_warning_x.xenophobia : "Click Here"}</p>
        </div>
    )
}

export default XWarnings;