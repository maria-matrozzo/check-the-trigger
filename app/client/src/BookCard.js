import React, {useState} from 'react';

function BookCard({bookInfo}) {

    // all of the trigger warning toggles
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

    // read more toggle
    const [readMore, setReadMore]= useState(false)
    const linkName = readMore ? 'Hide << ' : 'Content Warnings >>'
    const extraContent = 
        <div className="columns">
            <p onClick={revealAbandonment}><b>Abandonment:</b>  {showAbandoment ? bookInfo.content_warnings.abandonment : "Click Here"}</p>
            <p onClick={revealAbleism}><b>Ableism:</b>  {showAbleism ? bookInfo.content_warnings.ableism : "Click Here"}</p>
            <p onClick={revealAbortion}><b>Abortion:</b>  {showAbortion ? bookInfo.content_warnings.abortion : "Click Here"}</p>
            <p onClick={revealAcephobia}><b>Acephobia:</b>  {showAcephobia ? bookInfo.content_warnings.acephobia : "Click Here"}</p>
            <p onClick={revealAddiction}><b>Addiction:</b>  {showAddiction ? bookInfo.content_warnings.addiction : "Click Here"}</p>
            <p onClick={revealAdultMinorRelationship}><b>Adult/minor Relationship:</b>  {showAdultMinorRelationship ? bookInfo.content_warnings.adult_minor_relationship : "Click Here"}</p>
            <p onClick={revealAlcohol}><b>Alcohol:</b>  {showAlcohol ? bookInfo.content_warnings.alcohol : "Click Here"}</p>
            <p onClick={revealAlcohosim}><b>Alcoholism:</b>  {showAlcohosim ? bookInfo.content_warnings.alcoholism : "Click Here"}</p>
            <p onClick={revealAnimalCruelty}><b>Animal Cruelty:</b>  {showAnimalCruelty ? bookInfo.content_warnings.animal_cruelty : "Click Here"}</p>
            <p onClick={revealAnimalDeath}><b>Animal Death:</b>  {showAnimalDeath ? bookInfo.content_warnings.animal_death : "Click Here"}</p>
            <p onClick={revealAntisemitism}><b>Antisemitism:</b>  {showAntisemitism ? bookInfo.content_warnings.antisemitism : "Click Here"}</p>
            <p onClick={revealBiphobia}><b>Biphobia:</b>  {showBiphobia ? bookInfo.content_warnings.biphobia : "Click Here"}</p>
            <p onClick={revealBlood}><b>Blood:</b>  {showBlood ? bookInfo.content_warnings.blood : "Blood: Click Here"}</p>
            <p onClick={revealBodyHorror}><b>Body Horror:</b>  {showBodyHorror ? bookInfo.content_warnings.body_horror : "Click Here"}</p>
            <p onClick={revealBodyShaming}><b>Body Shaming:</b>  {showBodyShaming ? bookInfo.content_warnings.body_shaming : "Click Here"}</p>
            <p onClick={revealBullying}><b>Bullying:</b>  {showBullying ? bookInfo.content_warnings.bullying : "Click Here"}</p>
            <p onClick={revealCancer}><b>Cancer:</b>  {showCancer ? bookInfo.content_warnings.cancer : "Click Here"}</p>
            <p onClick={revealCannibalism}><b>Cannibalism:</b>  {showCannibalism ? bookInfo.content_warnings.cannibalism : "Click Here"}</p>
            <p onClick={revealCarAccident}><b>Car Accident:</b>  {showCarAccident ? bookInfo.content_warnings.car_accident : "Click Here"}</p>
            <p onClick={revealChildAbuse}><b>Child Abuse:</b>  {showChildAbuse ? bookInfo.content_warnings.child_abuse : "Click Here"}</p>
            <p onClick={revealChildDeath}><b>Child Death:</b>  {showChildDeath ? bookInfo.content_warnings.child_death : "Click Here"}</p>
            <p onClick={revealChronicIllness}><b>Chronic Illness:</b>  {showChronicIllness ? bookInfo.content_warnings.chronic_illness : "Click Here"}</p>
            <p onClick={revealClassism}><b>Classism:</b>  {showClassism ? bookInfo.content_warnings.classism : "Click Here"}</p>
            <p onClick={revealColonization}><b>Colonization:</b>  {showColonization ? bookInfo.content_warnings.colonization : " Click Here"}</p>
            <p onClick={revealConfinement}><b>Confinement:</b>  {showConfinement ? bookInfo.content_warnings.confinement : "Click Here"}</p>
            <p onClick={revealCulturalAppropriation}><b>Cultural Appropriation:</b>  {showCulturalAppropriation ? bookInfo.content_warnings.cultural_appropriation : "Click Here"}</p>
            <p onClick={revealCursing}><b>Cursing:</b>  {showCursing ? bookInfo.content_warnings.cursing : "Click Here"}</p>
            <p onClick={revealDeadnaming}><b>Deadnaming:</b>  {showDeadnaming ? bookInfo.content_warnings.deadnaming : "Click Here"}</p>
            <p onClick={revealDeath}><b>Death:</b>  {showDeath ? bookInfo.content_warnings.death : "Click Here"}</p>
            <p onClick={revealDeathOfAParent}><b>Death of a Parent:</b>  {showDeathOfAParent ? bookInfo.content_warnings.death_of_a_parent : "Click Here"}</p>
            <p onClick={revealDementia}><b>Dementia:</b>  {showDementia ? bookInfo.content_warnings.dementia : "Click Here"}</p>
            <p onClick={revealDomesticAbuse}><b>Domestic Violence:</b>  {showDomesticAbuse ? bookInfo.content_warnings.domestic_abuse : "Click Here"}</p>
            <p onClick={revealDrugAbuse}><b>Drug Abuse:</b>  {showDrugAbuse ? bookInfo.content_warnings.drug_abuse : "Click Here"}</p>
            <p onClick={revealDrugUse}><b>Drug Use:</b>  {showDrugUse ? bookInfo.content_warnings.drug_use : "Click Here"}</p>
            <p onClick={revealDysphoria}><b>Dysphoria:</b>  {showDysphoria ? bookInfo.content_warnings.dysphoria : "Click Here"}</p>
            <p onClick={revealEatingDisorder}><b>Eating Disorder:</b>  {showEatingDisorder ? bookInfo.content_warnings.eating_disorder : "Click Here"}</p>
            <p onClick={revealEmotionalAbuse}><b>Emotional Abuse:</b>  {showEmotionalAbuse ? bookInfo.content_warnings.emotional_abuse : "Click Here"}</p>
            <p onClick={revealExcrement}><b>Excrement:</b>  {showExcrement ? bookInfo.content_warnings.excrement : "Click Here"}</p>
            <p onClick={revealFatphobia}><b>Fatphobia:</b>  {showFatphobia ? bookInfo.content_warnings.fatphobia : "Click Here"}</p>
            <p onClick={revealFire}><b>Fire:</b>  {showFire ? bookInfo.content_warnings.fire : "Click Here"}</p>
            <p onClick={revealForcedInstitutionalization}><b>Forced Institutionalization:</b>  {showForcedInstitutionalization ? bookInfo.content_warnings.forced_institutionalization : "Click Here"}</p>
            <p onClick={revealGaslighting}><b>Gaslighting:</b>  {showGaslighting ? bookInfo.content_warnings.gaslighting : "Click Here"}</p>
            <p onClick={revealGenocide}><b>Genocide:</b>  {showGenocide ? bookInfo.content_warnings.genocide : "Click Here"}</p>
            <p onClick={revealGore}><b>Gore:</b>  {showGore ? bookInfo.content_warnings.gore : "Click Here"}</p>
            <p onClick={revealGrief}><b>Grief:</b>  {showGrief ? bookInfo.content_warnings.grief : "Click Here"}</p>
            <p onClick={revealGunViolence}><b>Gun Violence:</b>  {showGunViolence ? bookInfo.content_warnings.gun_violence : "Click Here"}</p>
            <p onClick={revealHateCrime}><b>Hate Crime:</b>  {showHateCrime ? bookInfo.content_warnings.hate_crime : "Click Here"}</p>
            <p onClick={revealHomophobia}><b>Homophobia:</b>  {showHomophobia ? bookInfo.content_warnings.homophobia : "Click Here"}</p>
            <p onClick={revealIncest}><b>Incest:</b>  {showIncest ? bookInfo.content_warnings.incest : "Click Here"}</p>
            <p onClick={revealInfertility}><b>Infertility:</b>  {showInfertility ? bookInfo.content_warnings.infertility : "Click Here"}</p>
            <p onClick={revealInfidelity}><b>Infidelity:</b>  {showInfidelity ? bookInfo.content_warnings.infidelity : "Click Here"}</p>
            <p onClick={revealInjury}><b>Injury Detail:</b>  {showInjury ? bookInfo.content_warnings.injury : "Click Here"}</p>
            <p onClick={revealIslamophobia}><b>Islamophobia:</b>  {showIslamophobia ? bookInfo.content_warnings.islamophobia : "Click Here"}</p>
            <p onClick={revealKidnapping}><b>Kidnapping:</b>  {showKidnapping ? bookInfo.content_warnings.kidnapping : "Click Here"}</p>
            <p onClick={revealLesbophobia}><b>Lesbophobia:</b>  {showLesbophobia ? bookInfo.content_warnings.lesbophobia : "Click Here"}</p>
            <p onClick={revealMassShooting}><b>Mass Shooting:</b>  {showMassShooting ? bookInfo.content_warnings.mass_shooting : "Click Here"}</p>
            <p onClick={revealMedicalContent}><b>Medical Content:</b>  {showMedicalContent ? bookInfo.content_warnings.medical_content : "Click Here"}</p>
            <p onClick={revealMedicalTrauma}><b>Medical Trauma:</b>  {showMedicalTrauma ? bookInfo.content_warnings.medical_trauma : "Click Here"}</p>
            <p onClick={revealMentalIllness}><b>Mental Illness:</b>  {showMentalIllness ? bookInfo.content_warnings.mental_illness : "Click Here"}</p>
            <p onClick={revealMiscarriage}><b>Miscarriage:</b>  {showMiscarriage ? bookInfo.content_warnings.miscarriage : "Click Here"}</p>
            <p onClick={revealMisogyny}><b>Misogyny:</b>  {showMisogyny ? bookInfo.content_warnings.misogyny : "Click Here"}</p>
            <p onClick={revealMurder}><b>Murder:</b>  {showMurder ? bookInfo.content_warnings.murder : "Click Here"}</p>
            <p onClick={revealOuting}><b>Outing:</b>  {showOuting ? bookInfo.content_warnings.outing : "Click Here"}</p>
            <p onClick={revealPanicAttack}><b>Panic Attack:</b>  {showPanicAttack ? bookInfo.content_warnings.panic_attack : "Click Here"}</p>
            <p onClick={revealPedophilia}><b>Pedophilia:</b>  {showPedophilia ? bookInfo.content_warnings.pedophilia : "Click Here"}</p>
            <p onClick={revealPhysicalAbuse}><b>Physical Abuse:</b>  {showPhysicalAbuse ? bookInfo.content_warnings.physical_abuse : "Click Here"}</p>
            <p onClick={revealPoliceBrutality}><b>Police Brutality:</b>  {showPoliceBrutality ? bookInfo.content_warnings.police_brutality : "Click Here"}</p>
            <p onClick={revealPregnancy}><b>Pregnancy:</b>  {showPregnancy ? bookInfo.content_warnings.pregnancy : "Click Here"}</p>
            <p onClick={revealRacialSlur}><b>Racial Slur:</b>  {showRacialSlur ? bookInfo.content_warnings.racial_slur : "Click Here"}</p>
            <p onClick={revealRacism}><b>Racism:</b>  {showRacism ? bookInfo.content_warnings.racism : "Click Here"}</p>
            <p onClick={revealRape}><b>Rape:</b>  {showRape ? bookInfo.content_warnings.rape : "Click Here"}</p>
            <p onClick={revealReligiousBigotry}><b>Religious Bigotry:</b>  {showReligiousBigotry ? bookInfo.content_warnings.religious_bigotry : "Click Here"}</p>
            <p onClick={revealSchizophrenia}><b>Schizophrenia:</b>  {showSchizophrenia ? bookInfo.content_warnings.schizophrenia : "Click Here"}</p>
            <p onClick={revealSchoolShooting}><b>School Shooting:</b>  {showSchoolShooting ? bookInfo.content_warnings.school_shooting : "Click Here"}</p>
            <p onClick={revealSelfHarm}><b>Self Harm:</b>  {showSelfHarm ? bookInfo.content_warnings.self_harm : "Click Here"}</p>
            <p onClick={revealSexism}><b>Sexism:</b>  {showSexism ? bookInfo.content_warnings.sexism : "Click Here"}</p>
            <p onClick={revealSexualAssault}><b>Sexual Assault:</b>  {showSexualAssault ? bookInfo.content_warnings.sexual_assault : "Click Here"}</p>
            <p onClick={revealSexualHarrassment}><b>Sexual Harrassment:</b>  {showSexualHarrassment ? bookInfo.content_warnings.sexual_harrassment : "Click Here"}</p>
            <p onClick={revealSexualViolence}><b>Sexual Violence:</b>  {showSexualViolence ? bookInfo.content_warnings.violence : "Click Here"}</p>
            <p onClick={revealSlavery}><b>Slavery:</b>  {showSlavery ? bookInfo.content_warnings.slavery : "Click Here"}</p>
            <p onClick={revealStalking}><b>Stalking:</b>  {showStalking ? bookInfo.content_warnings.stalking : "Click Here"}</p>
            <p onClick={revealSuicidalThoughts}><b>Suicial Thoughts:</b>  {showSuicidalThoughts ? bookInfo.content_warnings.suicidal_thoughts : "Click Here"}</p>
            <p onClick={revealSuicide}><b>Suicide:</b>  {showSuicide ? bookInfo.content_warnings.suicide : "Click Here"}</p>
            <p onClick={revealSuicideAttempt}><b>Suicide Attempt:</b>  {showSuicideAttempt ? bookInfo.content_warnings.suicide_attempt : "Click Here"}</p>
            <p onClick={revealTerminalIllness}><b>Terminal Illness:</b>  {showTerminalIllness ? bookInfo.content_warnings.terminal_illness : "Click Here"}</p>
            <p onClick={revealTorture}><b>Torture:</b>  {showTorture ? bookInfo.content_warnings.torture : "Click Here"}</p>
            <p onClick={revealToxicFriendship}><b>Toxic Friendhsip:</b>  {showToxicFriendship ? bookInfo.content_warnings.toxic_friendship : "Click Here"}</p>
            <p onClick={revealToxicRelationship}><b>Toxic Relationship:</b>  {showToxicRelationship ? bookInfo.content_warnings.toxic_relationship : "Click Here"}</p>
            <p onClick={revealTrafficking}><b>Trafficking:</b>  {showTrafficking ? bookInfo.content_warnings.trafficking : "Click Here"}</p>
            <p onClick={revealTransphobia}><b>Transphobia:</b>  {showTransphobia ? bookInfo.content_warnings.transphobia : "Click Here"}</p>
            <p onClick={revealViolence}><b>Violence:</b>  {showViolence ? bookInfo.content_warnings.violence : "Click Here"}</p>
            <p onClick={revealVomit}><b>Vomit:</b>  {showVomit ? bookInfo.content_warnings.vomit : "Click Here"}</p>
            <p onClick={revealWar}><b>War:</b>  {showWar ? bookInfo.content_warnings.war : "Click Here"}</p>
            <p onClick={revealXenophobia}><b>Xenophobia:</b>  {showXenophobia ? bookInfo.content_warnings.xenophobia : "Click Here"}</p>
        </div>


    
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

                    <div className="card_p">{bookInfo.description}</div>

                    <div className="card_bar"></div>
                

                <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
                    {readMore && extraContent}
                </div>
            </article>
        </div>
    )
}

export default BookCard;