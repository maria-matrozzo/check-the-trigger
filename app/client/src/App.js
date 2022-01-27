import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import BookCard from './BookCard';

function App() {

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

  return (
    <div>
      <NavBar />
        <Switch>
          <Route path="/books">
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
    </div>
  );
}

export default App;
