import './App.css';
import {Route, Switch} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import BookCard from './BookCard';
import SearchBar from './SearchBar';
import Footer from './Footer';
import About from './About';
import CreatePost from './CreatePost';

function App() {

  const [allBooks, setAllBooks] = useState([])
  const [searchedBooks, setSearchedBooks] = useState([])
  
  useEffect( () => {
        fetch('/books')
        .then(r => r.json())
        .then( (fetchedBooks) => {
        setAllBooks(fetchedBooks) 
        setSearchedBooks(fetchedBooks) }) 
      }, [] )

  // search bar
  function searchFunction(text) {

    let searchResults = allBooks.filter((book) => {
      return ( (book.title).includes(text.charAt(0).toUpperCase() + text.slice(1)) ) 
    })
    
    setSearchedBooks([...searchResults])

  }

  // submit book
  const postBook = (newBook) => {
    fetch('/books',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newBook)
    })
    .then(res => res.json())
    .then(newEntry => {
      setAllBooks([newEntry,...allBooks])
    })
  }

  return (
    <div className="container" >
      <NavBar />

        <Switch>
        <Route path="/books"> 

          <SearchBar 
          searchProp = {searchFunction} />
              
          {searchedBooks.map((eachBook) => {
          return (
            <BookCard 
            bookInfo = {eachBook}
            key = {eachBook.id} />
          )})}
        </Route>

          <Route path="/submit">
            <CreatePost 
            postBook = {postBook}
            key = {postBook.id} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>

      <Footer />

    </div>
  );
}

export default App;
