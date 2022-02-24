import { Link } from "react-router-dom"; 


function NavBar() {

    return(
      <div className="nav">
        <ul className="menuItems">
          <li><Link to="/" className="link"> <img src="https://lh3.googleusercontent.com/Uw_AP1s7aTVWa8b4j1Ducq6bOUTqvRCYU-1tCNQusYcG4c-Y3onYiOg5U2Q4JDKGSN9FTau-J2_cvUM0hYjvxwl8wIC7z097dfbZnpA6WtVZcaDgjrjQp0KFtkQa1DgfcBY84SIhbgVggx05DVjGKhdIGKWb3Ev5WWlqiiGJvtpKlyNWFNNuRQQi_P1-lmifbhPkyqig0_lf1NWrz00CmbsMTKxZSC5aR8W7jMeVdcq9vSeBLFZJ76-2SmVyUN2e_NxHf-vzVaRCvKOTbv8sCoeqDA9tfDm_Rhk_7CeZpdlZjfYkxo5OIWsjic0Ls5VEonuSE1czyAyHj-FsuAfbrQfFeC577UI48yYauNJPKcXzxHeEgh31LtQ0JPG3UBQeus6ns78n99lZSVX7aEPGciT_QXV7R_ZBoFkObrdqI8JHON3cx_DqiztbrltWGGjwsz58OjfjXz2m6VXxPU8Uk-9T1ZtOz3Ek53KO72iUkaUDBKgVsfR8fu0s3lNfRASbXegnCkYteGoF4xcVMleYSL_tD5TlDRwg84oECyOQp0frj3fM0ROu6UBkX0e4Sj6bnBguEwOEFe-OSmBDhrC2gc9b2q-VF1bEkzZB5pgq0fKVHHMlxX8a4wvxP-qddDftIBvwRvi66I51P_KYpY65SdWJr2b0BHvyUEljcHTq9SkRF9KchUucTlFdwUr4NWfNGMUmJ84KbzsXrcGbaV0_BPc=w200-h40-no?authuser=0" alt="Check The Trigger" className="logo"/></Link></li>
          <li className="nav_tabs"><Link to="/books" className= "link">Books</Link></li>
          {/* <li className="nav_tabs"><Link to="/suggestbook" className= "link">Suggest a Book</Link></li> */}
        </ul>
      </div>
    )
  }


export default NavBar;