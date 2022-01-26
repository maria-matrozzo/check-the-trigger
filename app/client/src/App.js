import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  
  const [authors, setAuthors] = useState([])
  // const [books, setBooks] = useState([])
  
  useEffect( () => {
        fetch('/authors')
        .then(r => r.json())
        .then( (fetchedGames) => {
        setAuthors(fetchedGames) })
      }, [] )

      // checking the the fetches worked :)
    console.log("authors:   ", authors)
    // console.log("Books:   ", books)


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
