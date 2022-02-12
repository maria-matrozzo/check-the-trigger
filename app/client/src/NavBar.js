import { Link } from "react-router-dom"; 


function NavBar() {

    return(
      <div className="nav">
        <ul className="menuItems">
          <li><Link to="/" className="link"> <img src="https://lh3.googleusercontent.com/IR0aGlhKN_ceayeiCY4HjY-7nn4pMwDr9ApoWYnuVoBRTB2AMRFZ96Uu13PCSXsDV-_A6Y7ss3uCm6oS2GAMB_CN3aSmULmtqDMvUXhDnvkf8QUgLU7p6xgA94nUdyAOvZSxMgP9=w2400" alt="Check The Trigger" className="logo"/></Link></li>
          <li className="nav_tabs"><Link to="/books" className= "link">Books</Link></li>
          <li className="nav_tabs"><Link to="/suggestbook" className= "link">Suggest a Book</Link></li>
        </ul>
      </div>
    )
  }


export default NavBar;