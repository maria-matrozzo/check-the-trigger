import { Link } from "react-router-dom"; 
import React from 'react';

function NavContentWarning() {

    return(
      <div className="content_nav">
        <ul className="content_ul">
          <li className="content_tabs"><Link to="/books/all" className= "content_link">All</Link></li>
          <li className="content_tabs"><Link to="/books/a" className= "content_link">A</Link></li>
          <li className="content_tabs"><Link to="/books/b" className= "content_link">B</Link></li>
          <li className="content_tabs"><Link to="/books/c" className= "content_link">C</Link></li>
          <li className="content_tabs"><Link to="/books/d" className= "content_link">D</Link></li>
          <li className="content_tabs"><Link to="/books/e" className= "content_link">E</Link></li>
          <li className="content_tabs"><Link to="/books/f" className= "content_link">F</Link></li>
          <li className="content_tabs"><Link to="/books/g" className= "content_link">G</Link></li>
          <li className="content_tabs"><Link to="/books/h" className= "content_link">H</Link></li>
          <li className="content_tabs"><Link to="/books/i" className= "content_link">I</Link></li>
          <li className="content_tabs"><Link to="/books/j" className= "content_link">J</Link></li>
          <li className="content_tabs"><Link to="/books/k" className= "content_link">K</Link></li>
          <li className="content_tabs"><Link to="/books/l" className= "content_link">L</Link></li>
          <li className="content_tabs"><Link to="/books/m" className= "content_link">M</Link></li>
          <li className="content_tabs"><Link to="/books/n" className= "content_link">N</Link></li>
          <li className="content_tabs"><Link to="/books/o" className= "content_link">O</Link></li>
          <li className="content_tabs"><Link to="/books/p" className= "content_link">P</Link></li>
          <li className="content_tabs"><Link to="/books/q" className= "content_link">Q</Link></li>
          <li className="content_tabs"><Link to="/books/r" className= "content_link">R</Link></li>
          <li className="content_tabs"><Link to="/books/s" className= "content_link">S</Link></li>
          <li className="content_tabs"><Link to="/books/t" className= "content_link">T</Link></li>
          <li className="content_tabs"><Link to="/books/u" className= "content_link">U</Link></li>
          <li className="content_tabs"><Link to="/books/v" className= "content_link">V</Link></li>
          <li className="content_tabs"><Link to="/books/w" className= "content_link">W</Link></li>
          <li className="content_tabs"><Link to="/books/x" className= "content_link">X</Link></li>
          <li className="content_tabs"><Link to="/books/y" className= "content_link">Y</Link></li>
          <li className="content_tabs"><Link to="/books/z" className= "content_link">Z</Link></li>
          <li className="content_tabs"><Link to="/books/none" className= "content_link">None</Link></li>
        </ul>
      </div>
    )
  }

export default NavContentWarning;