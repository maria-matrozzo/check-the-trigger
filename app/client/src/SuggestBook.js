import React, {useState} from "react";

function SuggestBook() {

    const [formData, setFormData] = useState({
        title: '',
        author: '',
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // postBook(formData)
    }
    
    return (
        <div className="container">
            <h1>Suggest a Book</h1>
        </div>
    )
}

export default SuggestBook;