import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import NavBar from './NavBar';
import BookCard from './BookCard';


function MainContainer() {

    // const [authors, setAuthors] = useState([])
  const [books, setBooks] = useState([])
  
  useEffect( () => {
        // fetch('/authors')
        // .then(r => r.json())
        // .then( (fetchedAuthors) => {
        // setAuthors(fetchedAuthors) })

        fetch('/books')
        .then(r => r.json())
        .then( (fetchedBooks) => {
        setBooks(fetchedBooks) }) 
      }, [] )

      // checking the the fetches worked :)
    // console.log("Authors:   ", authors)
    // console.log("Books:   ", books)

    return (
        <div>
        <NavBar />
            <Switch>
          <Route path="/book">
          {books.map((eachBook) => {
          return (
            <BookCard 
            bookInfo = {eachBook}
            key = {eachBook.id} />
            // author = {authors} 
          )
        })}
          </Route>
          </Switch>
          <h1>Maria Make a Search Bar (by title or author)</h1>
          </div>
    )
    
}


export default MainContainer;