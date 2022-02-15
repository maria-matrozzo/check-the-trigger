import React from "react";
import { Link } from "react-router-dom"; 

function Home() {

    return(
        <div>
            <img src="https://lh3.googleusercontent.com/aGhniU5Wuyj3cIGhMWi7SE5nBdBwfp3vksLU4SSW78DBEvwYsG4moTa7UZv6zfpT9F_qo--99eU_q7hz3_Yo23TCZ8H1EnxX8Jlzwk18xwjen_GDGxIcVzjTKaK2vqU9guplDKxm=w2400" alt="Check the Trigger Banner" className="banner"/>
            <hr></hr>
            <div className="container">
                <h1>What is check the trigger?</h1>
                    <p>The whole point of trigger warnings is that they are personal to you. If there are events that you wish to avoid before reading a book</p>
                    <button><Link to="/books" className= "link">Go to Books</Link></button>
            </div>
        </div>
    )
}

export default Home;