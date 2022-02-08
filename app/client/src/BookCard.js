import React, {useState} from 'react';

function BookCard({bookInfo}) {

    const [showAbandoment, setAbandoment] = useState(false)
    function revealAbandonment() {
        setAbandoment(true)
    }

    const [showAbleism, setAbleism] = useState(false)
    function revealAbleism() {
        setAbleism(true)
    }

    const [showAbortion, setAbortion] = useState(false)
    function revealAbortion() {
        setAbortion(true)
    }

    const [showAcephobia, setAcephobia] = useState(false)
    function revealAcephobia() {
        setAcephobia(true)
    }

    const [showAddiction, setAddiction] = useState(false)
    function revealAddiction() {
        setAddiction(true)
    }

    const [showAdultMinorRelationship, setAdultMinorRelationship] = useState(false)
    function revealAdultMinorRelationship() {
        setAdultMinorRelationship(true)
    }

    const [showAlcohol, setAlcohol] = useState(false)
    function revealAlcohol() {
        setAlcohol(true)
    }

    const [showAlcohosim, setAlcohosim] = useState(false)
    function revealAlcohosim() {
        setAlcohosim(true)
    }

    const [showAnimalCruelty, setAnimalCruelty] = useState(false)
    function revealAnimalCruelty() {
        setAnimalCruelty(true)
    }

    const [showAnimalDeath, setAnimalDeath] = useState(false)
    function revealAnimalDeath() {
        setAnimalDeath(true)
    }

    const [showAntisemitism, setAntisemitism] = useState(false)
    function revealAntisemitism() {
        setAntisemitism(true)
    }

    const [showBiphobia, setBiphobia] = useState(false)
    function revealBiphobia() {
        setBiphobia(true)
    }

    const [showBlood, setBlood] = useState(false)
    function revealBlood() {
        setBlood(true)
    }

    const [showBodyHorror, setBodyHorror] = useState(false)
    function revealBodyHorror() {
        setBodyHorror(true)
    }

    const [showBodyShaming, setBodyShaming] = useState(false)
    function revealBodyShaming() {
        setBodyShaming(true)
    }

    const [showBullying, setBullying] = useState(false)
    function revealBullying() {
        setBullying(true)
    }

    const [showCancer, setCancer] = useState(false)
    function revealCancer() {
        setCancer(true)
    }

    const [showCannibalism, setCannibalism] = useState(false)
    function revealCannibalism() {
        setCannibalism(true)
    }

    const [showCarAccident, setCarAccident] = useState(false)
    function revealCarAccident() {
        setCarAccident(true)
    }

    const [showChildAbuse, setChildAbuse] = useState(false)
    function revealChildAbuse() {
        setChildAbuse(true)
    }

    const [showChildDeath, setChildDeath] = useState(false)
    function revealChildDeath() {
        setChildDeath(true)
    }

    const [showChronicIllness, setChronicIllness] = useState(false)
    function revealChronicIllness() {
        setChronicIllness(true)
    }
    
    const [showClassism, setClassism] = useState(false)
    function revealClassism() {
        setClassism(true)
    }
    
    const [showColonization, setColonization] = useState(false)
    function revealColonization() {
        setColonization(true)
    }
    
    const [showConfinement, setConfinement] = useState(false)
    function revealConfinement() {
        setConfinement(true)
    }
    
    const [showCulturalAppropriation, setCulturalAppropriation] = useState(false)
    function revealCulturalAppropriation() {
        setCulturalAppropriation(true)
    }
    
    const [showCursing, setCursing] = useState(false)
    function revealCursing() {
        setCursing(true)
    }
    
    const [showDeadnaming, setDeadnaming] = useState(false)
    function revealDeadnaming() {
        setDeadnaming(true)
    }
    
    const [showDeath, setDeath] = useState(false)
    function revealDeath() {
        setDeath(true)
    }
    
    const [showDeathOfAParent, setDeathOfAParent] = useState(false)
    function revealDeathOfAParent() {
        setDeathOfAParent(true)
    }
    
    const [showDementia, setDementia] = useState(false)
    function revealDementia() {
        setDementia(true)
    }
    
    const [showDomesticAbuse, setDomesticAbuse] = useState(false)
    function revealDomesticAbuse() {
        setDomesticAbuse(true)
    }
    
    const [showDrugAbuse, setDrugAbuse] = useState(false)
    function revealDrugAbuse() {
        setDrugAbuse(true)
    }
    
    const [showDrugUse, setDrugUse] = useState(false)
    function revealDrugUse() {
        setDrugUse(true)
    }
    
    const [showDysphoria, setDysphoria] = useState(false)
    function revealDysphoria() {
        setDysphoria(true)
    }
    
    const [showEatingDisorder, setEatingDisorder] = useState(false)
    function revealEatingDisorder() {
        setEatingDisorder(true)
    }
    
    const [showEmotionalAbuse, setEmotionalAbuse] = useState(false)
    function revealEmotionalAbuse() {
        setEmotionalAbuse(true)
    }
    
    const [showExcrement, setExcrement] = useState(false)
    function revealExcrement() {
        setExcrement(true)
    }
    
    const [showFatphobia, setFatphobia] = useState(false)
    function revealFatphobia() {
        setFatphobia(true)
    }
    
    const [showFire, setFire] = useState(false)
    function revealFire() {
        setFire(true)
    }
    
    const [showForcedInstitutionalization, setForcedInstitutionalization] = useState(false)
    function revealForcedInstitutionalization() {
        setForcedInstitutionalization(true)
    }
    
    const [showGaslighting, setGaslighting] = useState(false)
    function revealGaslighting() {
        setGaslighting(true)
    }
    
    const [showGenocide, setGenocide] = useState(false)
    function revealGenocide() {
        setGenocide(true)
    }
    
    const [showGore, setGore] = useState(false)
    function revealGore() {
        setGore(true)
    }
    
    const [showGrief, setGrief] = useState(false)
    function revealGrief() {
        setGrief(true)
    }
    
    const [showGunViolence, setGunViolence] = useState(false)
    function revealGunViolence() {
        setGunViolence(true)
    }
    
    const [showHateCrime, setHateCrime] = useState(false)
    function revealHateCrime() {
        setHateCrime(true)
    }
    
    const [showHomophobia, setHomophobia] = useState(false)
    function revealHomophobia() {
        setHomophobia(true)
    }
    
    const [showIncest, setIncest] = useState(false)
    function revealIncest() {
        setIncest(true)
    }
    
    const [showInfertility, setInfertility] = useState(false)
    function revealInfertility() {
        setInfertility(true)
    }
    
    const [showInfidelity, setInfidelity] = useState(false)
    function revealInfidelity() {
        setInfidelity(true)
    }
    
    const [showInjury, setInjury] = useState(false)
    function revealInjury() {
        setInjury(true)
    }
    
    const [showIslamophobia, setIslamophobia] = useState(false)
    function revealIslamophobia() {
        setIslamophobia(true)
    }
    
    const [showKidnapping, setKidnapping] = useState(false)
    function revealKidnapping() {
        setKidnapping(true)
    }
    
    const [showLesbophobia, setLesbophobia] = useState(false)
    function revealLesbophobia() {
        setLesbophobia(true)
    }
    
    const [showMassShooting, setMassShooting] = useState(false)
    function revealMassShooting() {
        setMassShooting(true)
    }
    
    const [showMedicalContent, setMedicalContent] = useState(false)
    function revealMedicalContent() {
        setMedicalContent(true)
    }

    const [showMedicalTrauma, setMedicalTrauma] = useState(false)
    function revealMedicalTrauma() {
        setMedicalTrauma(true)
    }
    
    const [showMentalIllness, setMentalIllness] = useState(false)
    function revealMentalIllness() {
        setMentalIllness(true)
    }
    
    const [showMiscarriage, setMiscarriage] = useState(false)
    function revealMiscarriage() {
        setMiscarriage(true)
    }

    const [showMisogyny, setMisogyny] = useState(false)
    function revealMisogyny() {
        setMisogyny(true)
    }
    
    const [showMurder, setMurder] = useState(false)
    function revealMurder() {
        setMurder(true)
    }
    
    const [showOuting, setOuting] = useState(false)
    function revealOuting() {
        setOuting(true)
    }
    
    const [showPanicAttack, setPanicAttack] = useState(false)
    function revealPanicAttack() {
        setPanicAttack(true)
    }
    
    const [showPedophilia, setPedophilia] = useState(false)
    function revealPedophilia() {
        setPedophilia(true)
    }
    
    const [showPhysicalAbuse, setPhysicalAbuse] = useState(false)
    function revealPhysicalAbuse() {
        setPhysicalAbuse(true)
    }
    
    const [showPoliceBrutality, setPoliceBrutality] = useState(false)
    function revealPoliceBrutality() {
        setPoliceBrutality(true)
    }
    
    const [showPregnancy, setPregnancy] = useState(false)
    function revealPregnancy() {
        setPregnancy(true)
    }
    
    const [showRacialSlur, setRacialSlur] = useState(false)
    function revealRacialSlur() {
        setRacialSlur(true)
    }
    
    const [showRacism, setRacism] = useState(false)
    function revealRacism() {
        setRacism(true)
    }
    
    const [showRape, setRape] = useState(false)
    function revealRape() {
        setRape(true)
    }
    
    const [showReligiousBigotry, setReligiousBigotry] = useState(false)
    function revealReligiousBigotry() {
        setReligiousBigotry(true)
    }
    
    const [showSchizophrenia, setSchizophrenia] = useState(false)
    function revealSchizophrenia() {
        setSchizophrenia(true)
    }
    
    const [showSchoolShooting, setSchoolShooting] = useState(false)
    function revealSchoolShooting() {
        setSchoolShooting(true)
    }
    
    const [showSelfHarm, setSelfHarm] = useState(false)
    function revealSelfHarm() {
        setSelfHarm(true)
    }
    
    const [showSexism, setSexism] = useState(false)
    function revealSexism() {
        setSexism(true)
    }
    
    const [showSexualAssault, setSexualAssault] = useState(false)
    function revealSexualAssault() {
        setSexualAssault(true)
    }
    
    const [showSexualHarrassment, setSexualHarrassment] = useState(false)
    function revealSexualHarrassment() {
        setSexualHarrassment(true)
    }
    
    const [showSexualViolence, setSexualViolence] = useState(false)
    function revealSexualViolence() {
        setSexualViolence(true)
    }
    
    const [showSlavery, setSlavery] = useState(false)
    function revealSlavery() {
        setSlavery(true)
    }
    
    const [showStalking, setStalking] = useState(false)
    function revealStalking() {
        setStalking(true)
    }
    
    const [showSuicidalThoughts, setSuicidalThoughts] = useState(false)
    function revealSuicidalThoughts() {
        setSuicidalThoughts(true)
    }
    
    const [showSuicide, setSuicide] = useState(false)
    function revealSuicide() {
        setSuicide(true)
    }
    
    const [showSuicideAttempt, setSuicideAttempt] = useState(false)
    function revealSuicideAttempt() {
        setSuicideAttempt(true)
    }
    
    const [showTerminalIllness, setTerminalIllness] = useState(false)
    function revealTerminalIllness() {
        setTerminalIllness(true)
    }
    
    const [showTorture, setTorture] = useState(false)
    function revealTorture() {
        setTorture(true)
    }
    
    const [showToxicFriendship, setToxicFriendship] = useState(false)
    function revealToxicFriendship() {
        setToxicFriendship(true)
    }
    
    const [showToxicRelationship, setToxicRelationship] = useState(false)
    function revealToxicRelationship() {
        setToxicRelationship(true)
    }
    
    const [showTrafficking, setTrafficking] = useState(false)
    function revealTrafficking() {
        setTrafficking(true)
    }
    
    const [showTransphobia, setTransphobia] = useState(false)
    function revealTransphobia() {
        setTransphobia(true)
    }
    
    const [showViolence, setViolence] = useState(false)
    function revealViolence() {
        setViolence(true)
    }
    
    const [showVomit, setVomit] = useState(false)
    function revealVomit() {
        setVomit(true)
    }
    
    const [showWar, setWar] = useState(false)
    function revealWar() {
        setWar(true)
    }
    
    const [showXenophobia, setXenophobia] = useState(false)
    function revealXenophobia() {
        setXenophobia(true)
    }
    
    return(
        <article className="card">
            <img src={bookInfo.image} alt={bookInfo.title} />
            <ul className="tag_box">
                <li className="tag"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
                <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                </svg>   {bookInfo.pages}</li>

                <li className="tag"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-hash" viewBox="0 0 16 16">
                <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>
                </svg>   {bookInfo.genre}</li>

                <li className="tag"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>   {bookInfo.author.name}</li>
            </ul>

                <div className="card_text">
                        <h1>{bookInfo.title}</h1>
                    <div className="card_bar"></div>
                <div className="card_p">{bookInfo.description}</div>

                <div className="card_bar"></div>

                <h3>Check the Trigger</h3>

                <div className="columns">
                    <p onClick={revealAbandonment}> {showAbandoment ? bookInfo.content_warnings.abandonment : "Abandonment: Click Here"} </p>
                    <p onClick={revealAbleism}> {showAbleism ? bookInfo.content_warnings.ableism : "Ableism: Click Here"}  </p>
                    <p onClick={revealAbortion}> {showAbortion ? bookInfo.content_warnings.abortion : "Abortion: Click Here"}  </p>
                    <p onClick={revealAcephobia}> {showAcephobia ? bookInfo.content_warnings.acephobia : "Acephobia: Click Here"}  </p>
                    <p onClick={revealAddiction}> {showAddiction ? bookInfo.content_warnings.addiction : "Addiction: Click Here"}  </p>
                    <p onClick={revealAdultMinorRelationship}> {showAdultMinorRelationship ? bookInfo.content_warnings.adult_minor_relationship : "Adult/minor Relationship: Click Here"}  </p>
                    <p onClick={revealAlcohol}> {showAlcohol ? bookInfo.content_warnings.alcohol : "Alcohol: Click Here"}  </p>
                    <p onClick={revealAlcohosim}> {showAlcohosim ? bookInfo.content_warnings.alcoholism : "Alcoholism: Click Here"}  </p>
                    <p onClick={revealAnimalCruelty}> {showAnimalCruelty ? bookInfo.content_warnings.animal_cruelty : "Animal Cruelty: Click Here"}  </p>
                    <p onClick={revealAnimalDeath}> {showAnimalDeath ? bookInfo.content_warnings.animal_death : "Animal Death: Click Here"}  </p>
                    <p onClick={revealAntisemitism}> {showAntisemitism ? bookInfo.content_warnings.antisemitism : "Antisemitism: Click Here"}  </p>
                    <p onClick={revealBiphobia}> {showBiphobia ? bookInfo.content_warnings.biphobia : "Biphobia: Click Here"}  </p>
                    <p onClick={revealBlood}> {showBlood ? bookInfo.content_warnings.blood : "Blood: Click Here"}  </p>
                    <p onClick={revealBodyHorror}> {showBodyHorror ? bookInfo.content_warnings.body_horror : "Body Horror: Click Here"}  </p>
                    <p onClick={revealBodyShaming}> {showBodyShaming ? bookInfo.content_warnings.body_shaming : "Body Shaming: Click Here"}  </p>
                    <p onClick={revealBullying}> {showBullying ? bookInfo.content_warnings.bullying : "bullying: Click Here"}  </p>
                    <p onClick={revealCancer}> {showCancer ? bookInfo.content_warnings.cancer : "Cancer: Click Here"}  </p>
                    <p onClick={revealCannibalism}> {showCannibalism ? bookInfo.content_warnings.cannibalism : "Cannibalism: Click Here"}  </p>
                    <p onClick={revealCarAccident}> {showCarAccident ? bookInfo.content_warnings.car_accident : "Car Accident: Click Here"}  </p>
                    <p onClick={revealChildAbuse}> {showChildAbuse ? bookInfo.content_warnings.child_abuse : "Child Abuse: Click Here"}  </p>
                    <p onClick={revealChildDeath}> {showChildDeath ? bookInfo.content_warnings.child_death : "Child Death: Click Here"}  </p>
                    <p onClick={revealChronicIllness}> {showChronicIllness ? bookInfo.content_warnings.chronic_illness : "Chronic Illness: Click Here"}  </p>
                    <p onClick={revealClassism}> {showClassism ? bookInfo.content_warnings.classism : "Classism: Click Here"}  </p>
                    <p onClick={revealColonization}> {showColonization ? bookInfo.content_warnings.colonization : "Colonization: Click Here"}  </p>
                    <p onClick={revealConfinement}> {showConfinement ? bookInfo.content_warnings.confinement : "Confinement: Click Here"}  </p>
                    <p onClick={revealCulturalAppropriation}> {showCulturalAppropriation ? bookInfo.content_warnings.cultural_appropriation : "Cultural Appropriation: Click Here"}  </p>
                    <p onClick={revealCursing}> {showCursing ? bookInfo.content_warnings.cursing : "Cursing: Click Here"}  </p>
                    <p onClick={revealDeadnaming}> {showDeadnaming ? bookInfo.content_warnings.deadnaming : "Deadnaming: Click Here"}  </p>
                    <p onClick={revealDeath}> {showDeath ? bookInfo.content_warnings.death : "Death: Click Here"}  </p>
                    <p onClick={revealDeathOfAParent}> {showDeathOfAParent ? bookInfo.content_warnings.death_of_a_parent : "Death of a Parent: Click Here"}  </p>
                    <p onClick={revealDementia}> {showDementia ? bookInfo.content_warnings.dementia : "Dementia: Click Here"}  </p>
                    <p onClick={revealDomesticAbuse}> {showDomesticAbuse ? bookInfo.content_warnings.domestic_abuse : "Domestic Violence: Click Here"}  </p>
                    <p onClick={revealDrugAbuse}> {showDrugAbuse ? bookInfo.content_warnings.drug_abuse : "Drug Abuse: Click Here"}  </p>
                    <p onClick={revealDrugUse}> {showDrugUse ? bookInfo.content_warnings.drug_use : "Drug Use: Click Here"}  </p>
                    <p onClick={revealDysphoria}> {showDysphoria ? bookInfo.content_warnings.dysphoria : "Dysphoria: Click Here"}  </p>
                    <p onClick={revealEatingDisorder}> {showEatingDisorder ? bookInfo.content_warnings.eating_disorder : "Eating Disorder: Click Here"}  </p>
                    <p onClick={revealEmotionalAbuse}> {showEmotionalAbuse ? bookInfo.content_warnings.emotional_abuse : "Emotional Abuse: Click Here"}  </p>
                    <p onClick={revealExcrement}> {showExcrement ? bookInfo.content_warnings.excrement : "Excrement: Click Here"}  </p>
                    <p onClick={revealFatphobia}> {showFatphobia ? bookInfo.content_warnings.fatphobia : "Fatphobia: Click Here"}  </p>
                    <p onClick={revealFire}> {showFire ? bookInfo.content_warnings.fire : "Fire: Click Here"}  </p>
                    <p onClick={revealForcedInstitutionalization}> {showForcedInstitutionalization ? bookInfo.content_warnings.forced_institutionalization : "Forced Institutionalization: Click Here"}  </p>
                    <p onClick={revealGaslighting}> {showGaslighting ? bookInfo.content_warnings.gaslighting : "Gaslighting: Click Here"}  </p>
                    <p onClick={revealGenocide}> {showGenocide ? bookInfo.content_warnings.genocide : "Genocide: Click Here"}  </p>
                    <p onClick={revealGore}> {showGore ? bookInfo.content_warnings.gore : "Gore: Click Here"}  </p>
                    <p onClick={revealGrief}> {showGrief ? bookInfo.content_warnings.grief : "Grief: Click Here"}  </p>
                    <p onClick={revealGunViolence}> {showGunViolence ? bookInfo.content_warnings.gun_violence : "Gun Violence: Click Here"}  </p>
                    <p onClick={revealHateCrime}> {showHateCrime ? bookInfo.content_warnings.hate_crime : "Hate Crime: Click Here"}  </p>
                    <p onClick={revealHomophobia}> {showHomophobia ? bookInfo.content_warnings.homophobia : "Homophobia: Click Here"}  </p>
                    <p onClick={revealIncest}> {showIncest ? bookInfo.content_warnings.incest : "Incest: Click Here"}  </p>
                    <p onClick={revealInfertility}> {showInfertility ? bookInfo.content_warnings.infertility : "Infertility: Click Here"}  </p>
                    <p onClick={revealInfidelity}> {showInfidelity ? bookInfo.content_warnings.infidelity : "Infidelity: Click Here"}  </p>
                    <p onClick={revealInjury}> {showInjury ? bookInfo.content_warnings.injury : "Injury Detail: Click Here"}  </p>
                    <p onClick={revealIslamophobia}> {showIslamophobia ? bookInfo.content_warnings.islamophobia : "Islamophobia: Click Here"}  </p>
                    <p onClick={revealKidnapping}> {showKidnapping ? bookInfo.content_warnings.kidnapping : "Kidnapping: Click Here"}  </p>
                    <p onClick={revealLesbophobia}> {showLesbophobia ? bookInfo.content_warnings.lesbophobia : "Lesbophobia: Click Here"}  </p>
                    <p onClick={revealMassShooting}> {showMassShooting ? bookInfo.content_warnings.mass_shooting : "Mass Shooting: Click Here"}  </p>
                    <p onClick={revealMedicalContent}> {showMedicalContent ? bookInfo.content_warnings.medical_content : "Medical Content: Click Here"}  </p>
                    <p onClick={revealMedicalTrauma}> {showMedicalTrauma ? bookInfo.content_warnings.medical_trauma : "Medical Trauma: Click Here"}  </p>
                    <p onClick={revealMentalIllness}> {showMentalIllness ? bookInfo.content_warnings.mental_illness : "Mental Illness: Click Here"}  </p>
                    <p onClick={revealMiscarriage}> {showMiscarriage ? bookInfo.content_warnings.miscarriage : "Miscarriage: Click Here"}  </p>
                    <p onClick={revealMisogyny}> {showMisogyny ? bookInfo.content_warnings.misogyny : "Misogyny: Click Here"}  </p>
                    <p onClick={revealMurder}> {showMurder ? bookInfo.content_warnings.murder : "Murder: Click Here"}  </p>
                    <p onClick={revealOuting}> {showOuting ? bookInfo.content_warnings.outing : "Outing: Click Here"}  </p>
                    <p onClick={revealPanicAttack}> {showPanicAttack ? bookInfo.content_warnings.panic_attack : "Panic Attack: Click Here"}  </p>
                    <p onClick={revealPedophilia}> {showPedophilia ? bookInfo.content_warnings.pedophilia : "Pedophilia: Click Here"}  </p>
                    <p onClick={revealPhysicalAbuse}> {showPhysicalAbuse ? bookInfo.content_warnings.physical_abuse : "Physical Abuse: Click Here"}  </p>
                    <p onClick={revealPoliceBrutality}> {showPoliceBrutality ? bookInfo.content_warnings.police_brutality : "Police Brutality: Click Here"}  </p>
                    <p onClick={revealPregnancy}> {showPregnancy ? bookInfo.content_warnings.pregnancy : "Pregnancy: Click Here"}  </p>
                    <p onClick={revealRacialSlur}> {showRacialSlur ? bookInfo.content_warnings.racial_slur : "Racial Slur: Click Here"}  </p>
                    <p onClick={revealRacism}> {showRacism ? bookInfo.content_warnings.racism : "Racism: Click Here"}  </p>
                    <p onClick={revealRape}> {showRape ? bookInfo.content_warnings.rape : "Rape: Click Here"}  </p>
                    <p onClick={revealReligiousBigotry}> {showReligiousBigotry ? bookInfo.content_warnings.religious_bigotry : "Religious Bigotry: Click Here"}  </p>
                    <p onClick={revealSchizophrenia}> {showSchizophrenia ? bookInfo.content_warnings.schizophrenia : "Schizophrenia: Click Here"}  </p>
                    <p onClick={revealSchoolShooting}> {showSchoolShooting ? bookInfo.content_warnings.school_shooting : "School Shooting: Click Here"}  </p>
                    <p onClick={revealSelfHarm}> {showSelfHarm ? bookInfo.content_warnings.self_harm : "Self Harm: Click Here"}  </p>
                    <p onClick={revealSexism}> {showSexism ? bookInfo.content_warnings.sexism : "Sexism: Click Here"}  </p>
                    <p onClick={revealSexualAssault}> {showSexualAssault ? bookInfo.content_warnings.sexual_assault : "Sexual Assault: Click Here"}  </p>
                    <p onClick={revealSexualHarrassment}> {showSexualHarrassment ? bookInfo.content_warnings.sexual_harrassment : "Sexual Harrassment: Click Here"}  </p>
                    <p onClick={revealSexualViolence}> {showSexualViolence ? bookInfo.content_warnings.violence : "Violence: Click Here"}  </p>
                    <p onClick={revealSlavery}> {showSlavery ? bookInfo.content_warnings.slavery : "Slavery: Click Here"}  </p>
                    <p onClick={revealStalking}> {showStalking ? bookInfo.content_warnings.stalking : "Stalking: Click Here"}  </p>
                    <p onClick={revealSuicidalThoughts}> {showSuicidalThoughts ? bookInfo.content_warnings.suicidal_thoughts : "Suicial Thoughts: Click Here"}  </p>
                    <p onClick={revealSuicide}> {showSuicide ? bookInfo.content_warnings.suicide : "Suicide: Click Here"}  </p>
                    <p onClick={revealSuicideAttempt}> {showSuicideAttempt ? bookInfo.content_warnings.suicide_attempt : "Suicide Attempt: Click Here"}  </p>
                    <p onClick={revealTerminalIllness}> {showTerminalIllness ? bookInfo.content_warnings.terminal_illness : "Terminal Illness: Click Here"}  </p>
                    <p onClick={revealTorture}> {showTorture ? bookInfo.content_warnings.torture : "Torture: Click Here"}  </p>
                    <p onClick={revealToxicFriendship}> {showToxicFriendship ? bookInfo.content_warnings.toxic_friendship : "Toxic Friendhsip: Click Here"}  </p>
                    <p onClick={revealToxicRelationship}> {showToxicRelationship ? bookInfo.content_warnings.toxic_relationship : "Toxic Relationship: Click Here"}  </p>
                    <p onClick={revealTrafficking}> {showTrafficking ? bookInfo.content_warnings.trafficking : "Trafficking: Click Here"}  </p>
                    <p onClick={revealTransphobia}> {showTransphobia ? bookInfo.content_warnings.transphobia : "Transphobia: Click Here"}  </p>
                    <p onClick={revealViolence}> {showViolence ? bookInfo.content_warnings.violence : "Violence: Click Here"}  </p>
                    <p onClick={revealVomit}> {showVomit ? bookInfo.content_warnings.vomit : "Vomit: Click Here"}  </p>
                    <p onClick={revealWar}> {showWar ? bookInfo.content_warnings.war : "War: Click Here"}  </p>
                    <p onClick={revealXenophobia}> {showXenophobia ? bookInfo.content_warnings.xenophobia : "Xenophobia: Click Here"}  </p>
            </div>

            </div>
        </article>
    )
}

export default BookCard;