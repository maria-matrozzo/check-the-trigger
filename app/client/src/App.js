import './App.css';
import {Route, Switch} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import BookCard from './BookCard';
import SearchBar from './SearchBar';
import Footer from './Footer';
import SuggestBook from './SuggestBook';
import Home from './Home';

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

    let bookResults = allBooks.filter((book) => {
      return ( (book.title).includes(text.charAt(0).toUpperCase() + text.slice(1)) ) 
    })
    
    setSearchedBooks([...bookResults])

  }



  return (
    <div>
      <NavBar />
      
      <div>

        <Switch>
          <Route path="/books"> 

            <SearchBar 
            searchFunction = {searchFunction} />
               
            {searchedBooks.map((eachBook) => {
            return (
              <BookCard 
              bookInfo = {eachBook}
              key = {eachBook.id} />
            )})}
          </Route>

          <Route path="/suggestbook">
            <SuggestBook />
          </Route>

          <Route path="/">
              <Home />
          </Route>

        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
