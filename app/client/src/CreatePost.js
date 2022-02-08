import React, {useState} from "react";

function CreatePost({postBook}) {

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        image: '',
        pages: '',
        genre: '',
        description: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postBook(formData)
    }
    
    return (
        <div class="form-style-6">
            <form onSubmit={handleSubmit}>
                <label>
                Title:
                <input type="text" name="title" value={formData.title} onChange={handleChange}/>
                </label>

                <label>
                Author:
                <input type="text" name="author" value={formData.author} onChange={handleChange}/>
                </label>

                <label>
                Image:
                <input type="text" name="image" value={formData.image} onChange={handleChange}/>
                </label>

                <label>
                Pages:
                <input type="text" name="pages" value={formData.pages} onChange={handleChange}/>
                </label>

                <label>
                Genre:
                <input type="text" name="genre" value={formData.genre} onChange={handleChange}/>
                </label>

                <label>
                Description:
                <input type="text" name="description" value={formData.description} onChange={handleChange}/>
                </label>

                <input type="submit" value="Submit" />
                </form>
        </div>

    )
}

export default CreatePost;