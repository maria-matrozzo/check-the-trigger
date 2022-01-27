import AuthorCard from "./AuthorCard";
import React, {useEffect, useState} from 'react';

function BookCard({bookInfo, author}) {

    const [authors, setAuthors] = useState([])
     
  useEffect( () => {
    fetch('/authors')
    .then(r => r.json())
    .then( (fetchedAuthors) => {
    setAuthors(fetchedAuthors) })

  }, [] )

    console.log("books 2"   , bookInfo.author.name)
    // console.log("authors  ". authors)


    return(
        <div>
            <h1>{bookInfo.title}</h1>
            <img src={bookInfo.image} alt={bookInfo.title} width="600" />
            <p>{bookInfo.pages}</p>
            <p>{bookInfo.genre}</p>
            <p>{bookInfo.publication_date}</p>
            <p>{bookInfo.description}</p>
            <p>Publisher: {bookInfo.publisher}</p>
            <hr></hr>
            <h1>Author: {bookInfo.author.name}</h1>
{/*                 
            {authors.map((eachAuthor) => {
                return (
                    <AuthorCard 
                    authorInfo = {eachAuthor}
                    key = {eachAuthor.id}
                />
                ) */}
            {/* })} */}
                
        </div>
    )
}

export default BookCard;