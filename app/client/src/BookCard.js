import React, {useState} from 'react';
import {Route, Switch} from "react-router-dom";
import { ReadMoreToggler } from 'read-more-read-less-toggler'
import ContentWarningSort from  './NavContentWarning';
import AllContentWarnings from './ContentWarnings/AllContentWarnings';
import NoContentWarning from './ContentWarnings/NoContentWarning';
import None from './ContentWarnings/None';
import AWarnings from './ContentWarnings/AWarnings';
import BWarnings from './ContentWarnings/BWarnings';
import CWarnings from './ContentWarnings/CWarnings';
import DWarnings from './ContentWarnings/DWarnings';
import EWarnings from './ContentWarnings/EWarnings';
import FWarnings from './ContentWarnings/FWarnings';
import GWarnings from './ContentWarnings/GWarnings';
import HWarnings from './ContentWarnings/HWarnings';
import IWarnings from './ContentWarnings/IWarnings';
import KWarnings from './ContentWarnings/KWarnings';
import LWarnings from './ContentWarnings/LWarnings';
import MWarnings from './ContentWarnings/MWarnings';
import OWarnings from './ContentWarnings/OWarnings';
import PWarnings from './ContentWarnings/PWarnings';
import RWarnings from './ContentWarnings/RWarnings';
import SWarnings from './ContentWarnings/SWarnings';
import TWarnings from './ContentWarnings/TWarnings';
import VWarnings from './ContentWarnings/VWarnings';
import WWarnings from './ContentWarnings/WWarnings';
import XWarnings from './ContentWarnings/XWarnings';

function BookCard({bookInfo}) {

    const [showAbandonment, setAbandonment] = useState(false)
    const [showAbleism, setAbleism] = useState(false)
    const [showAbortion, setAbortion] = useState(false)
    const [showAcephobia, setAcephobia] = useState(false)
    const [showAddiction, setAddiction] = useState(false)
    const [showAdultMinorRelationship, setAdultMinorRelationship] = useState(false)
    const [showAlcohol, setAlcohol] = useState(false)
    const [showAlcohosim, setAlcohosim] = useState(false)
    const [showAnimalCruelty, setAnimalCruelty] = useState(false)
    const [showAnimalDeath, setAnimalDeath] = useState(false)
    const [showAntisemitism, setAntisemitism] = useState(false)
    const [showBiphobia, setBiphobia] = useState(false)
    const [showBlood, setBlood] = useState(false)
    const [showBodyHorror, setBodyHorror] = useState(false)
    const [showBodyShaming, setBodyShaming] = useState(false)
    const [showBullying, setBullying] = useState(false)
    const [showCancer, setCancer] = useState(false)
    const [showCannibalism, setCannibalism] = useState(false)
    const [showCarAccident, setCarAccident] = useState(false)
    const [showChildAbuse, setChildAbuse] = useState(false)
    const [showChildDeath, setChildDeath] = useState(false)
    const [showChronicIllness, setChronicIllness] = useState(false)
    const [showClassism, setClassism] = useState(false)
    const [showColonization, setColonization] = useState(false)
    const [showConfinement, setConfinement] = useState(false)
    const [showCulturalAppropriation, setCulturalAppropriation] = useState(false)
    const [showCursing, setCursing] = useState(false)
    const [showDeath, setDeath] = useState(false)


    return(
        <div className="container">
            <article className="card">
                <img src={bookInfo.image} alt={bookInfo.title} className="card_image" />
                <ul className="tag_box">
                    <li className="tag"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>   {bookInfo.author.name}</li>

                    <li className="tag"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
                        <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                        </svg>   {bookInfo.pages}</li>

                    <li className="tag"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-hash" viewBox="0 0 16 16">
                        <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>
                        </svg>   {bookInfo.genre}</li>
                </ul>
                
                <div className="card_text">
                    <h1>{bookInfo.title}</h1>
                    <div className="card_bar"></div>               
                
                    <ReadMoreToggler 
                    desktopBreakLines={3}
                    topGradient="#000000"
                    bottomGradient="#000000" 
                    buttonColor="#523129">    
                   
                        <div className="card_p">{bookInfo.description}</div>
                        <div className="card_bar"></div>   
                    </ReadMoreToggler>
                        
                </div>
                    <h2>Content Warnings</h2>  
                          
                
                    <ContentWarningSort />
                    <Switch>
                        <Route path="/books/all">
                            <AllContentWarnings 
                            content_warning_all = {bookInfo.content_warnings}
                            showAbandonment= {showAbandonment}
                            setAbandonment = {setAbandonment}
                            showAbleism = {showAbleism}
                            setAbleism = {setAbleism}
                            showAbortion = {showAbortion}
                            setAbortion = {setAbortion}
                            showAcephobia = {showAcephobia}
                            setAcephobia = {setAcephobia}
                            showAddiction = {showAddiction}
                            setAddiction = {setAddiction}
                            showAdultMinorRelationship = {showAdultMinorRelationship}
                            setAdultMinorRelationship = {setAdultMinorRelationship}
                            showAlcohol = {showAlcohol}
                            setAlcohol = {setAlcohol}
                            showAlcohosim = {showAlcohosim}
                            setAlcohosim = {setAlcohosim}
                            showAnimalCruelty = {showAnimalCruelty}
                            setAnimalCruelty = {setAnimalCruelty}
                            showAnimalDeath = {showAnimalDeath}
                            setAnimalDeath = {setAnimalDeath}
                            showAntisemitism = {showAntisemitism}
                            setAntisemitism = {setAntisemitism} 
                            showBiphobia = {showBiphobia} 
                            setBiphobia = {setBiphobia}
                            showBlood = {showBlood}
                            setBlood = {setBlood}
                            showBodyHorror = {showBodyHorror}
                            setBodyHorror = {setBodyHorror}
                            showBodyShaming = {showBodyShaming}
                            setBodyShaming = {setBodyShaming}
                            showBullying = {showBullying}
                            setBullying = {setBullying}
                            showCancer = {showCancer}
                            setCancer = {setCancer}
                            showCannibalism = {showCannibalism}
                            setCannibalism = {setCannibalism}
                            showCarAccident = {showCarAccident}
                            setCarAccident = {setCarAccident}
                            showChildAbuse = {showChildAbuse}
                            setChildAbuse = {setChildAbuse}
                            showChildDeath = {showChildDeath}
                            setChildDeath = {setChildDeath}
                            showChronicIllness = {showChronicIllness}
                            setChronicIllness = {setChronicIllness}
                            showClassism = {showClassism}
                            setClassism = {setClassism}
                            showColonization = {showColonization}
                            setColonization = {setColonization}
                            showConfinement = {showConfinement}
                            setConfinement = {setConfinement}
                            showCulturalAppropriation = {showCulturalAppropriation}
                            setCulturalAppropriation = {setCulturalAppropriation}
                            showCursing = {showCursing}
                            setCursing = {setCursing}
                            showDeath = {showDeath}
                            setDeath = {setDeath} />
                        </Route>

                        <Route path="/books/a">
                            <AWarnings 
                            content_warning_a = {bookInfo.content_warnings} />
                        </Route>
                        
                        <Route path="/books/b">
                            <BWarnings 
                            content_warning_b = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/c">
                            <CWarnings 
                            content_warning_c = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/d">
                            <DWarnings 
                            content_warning_d = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/e">
                            <EWarnings 
                            content_warning_e = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/f">
                            <FWarnings 
                            content_warning_f = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/g">
                            <GWarnings 
                            content_warning_g = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/h">
                            <HWarnings 
                            content_warning_h = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/i">
                            <IWarnings 
                            content_warning_i = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/j">
                            <NoContentWarning />
                        </Route>

                        <Route path="/books/k">
                            <KWarnings 
                            content_warning_k = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/l">
                            <LWarnings 
                            content_warning_l = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/m">
                            <MWarnings 
                            content_warning_m = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/n">
                            <NoContentWarning />
                        </Route>

                        <Route path="/books/o">
                            <OWarnings 
                            content_warning_o = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/p">
                            <PWarnings 
                            content_warning_p = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/q">
                            <NoContentWarning />
                        </Route>

                        <Route path="/books/r">
                            <RWarnings 
                            content_warning_r = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/s">
                            <SWarnings 
                            content_warning_s = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/t">
                            <TWarnings 
                            content_warning_t = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/u">
                            <NoContentWarning />
                        </Route>

                        <Route path="/books/v">
                            <VWarnings 
                            content_warning_v = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/w">
                            <WWarnings 
                            content_warning_w = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/x">
                            <XWarnings 
                            content_warning_x = {bookInfo.content_warnings}/>
                        </Route>

                        <Route path="/books/y">
                            <NoContentWarning />
                        </Route>

                        <Route path="/books/z">
                            <NoContentWarning />
                        </Route>

                        <Route path="/books/none">
                            <None />
                        </Route>

                    </Switch>
                
            </article>
        </div>
    )
}

export default BookCard;