import React, {useState} from "react";

function AllContentWarnings({content_warning_all, showAbandonment, setAbandonment, showAbleism, setAbleism, showAbortion, setAbortion, showAcephobia, setAcephobia, showAddiction, setAddiction, showAdultMinorRelationship, setAdultMinorRelationship, showAlcohol, setAlcohol, showAlcohosim, setAlcohosim, showAnimalCruelty, setAnimalCruelty, showAnimalDeath, setAnimalDeath, showAntisemitism, setAntisemitism, showBiphobia, setBiphobia, showBlood, setBlood, showBodyHorror, setBodyHorror, showBodyShaming, setBodyShaming, showBullying, setBullying, showCancer, setCancer, showCannibalism, setCannibalism, showCarAccident, setCarAccident, showChildAbuse, setChildAbuse, showChildDeath, setChildDeath, showChronicIllness, setChronicIllness, showClassism, setClassism, showColonization, setColonization, showConfinement, setConfinement, showCulturalAppropriation, setCulturalAppropriation, showCursing, setCursing, showDeath, setDeath}) {


function revealAbandonment() {
    setAbandonment(true)
}


function revealAbleism() {
    setAbleism(true)
}


function revealAbortion() {
    setAbortion(true)
}


function revealAcephobia() {
    setAcephobia(true)
}

function revealAddiction() {
    setAddiction(true)
}

function revealAdultMinorRelationship() {
    setAdultMinorRelationship(true)
}

function revealAlcohol() {
    setAlcohol(true)
}

function revealAlcohosim() {
    setAlcohosim(true)
}

function revealAnimalCruelty() {
    setAnimalCruelty(true)
}

function revealAnimalDeath() {
    setAnimalDeath(true)
}

function revealAntisemitism() {
    setAntisemitism(true)
}

function revealBiphobia() {
    setBiphobia(true)
}

function revealBlood() {
    setBlood(true)
}

function revealBodyHorror() {
    setBodyHorror(true)
}

function revealBodyShaming() {
    setBodyShaming(true)
}

function revealBullying() {
    setBullying(true)
}

function revealCancer() {
    setCancer(true)
}

function revealCannibalism() {
    setCannibalism(true)
}

function revealCarAccident() {
    setCarAccident(true)
}

function revealChildAbuse() {
    setChildAbuse(true)
}

function revealChildDeath() {
    setChildDeath(true)
}

function revealChronicIllness() {
    setChronicIllness(true)
}

function revealClassism() {
    setClassism(true)
}

function revealColonization() {
    setColonization(true)
}

function revealConfinement() {
    setConfinement(true)
}

function revealCulturalAppropriation() {
    setCulturalAppropriation(true)
}

function revealCursing() {
    setCursing(true)
}

const [showDeadnaming, setDeadnaming] = useState(false)
function revealDeadnaming() {
    setDeadnaming(true)
}

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
    <div className="columns">
        <p onClick={revealAbandonment}><b>Abandonment:</b>  {showAbandonment ? content_warning_all.abandonment : "Click Here"}</p>
        <p onClick={revealAbleism}><b>Ableism:</b>  {showAbleism ? content_warning_all.ableism : "Click Here"}</p>
        <p onClick={revealAbortion}><b>Abortion:</b>  {showAbortion ? content_warning_all.abortion : "Click Here"}</p>
        <p onClick={revealAcephobia}><b>Acephobia:</b>  {showAcephobia ? content_warning_all.acephobia : "Click Here"}</p>
        <p onClick={revealAddiction}><b>Addiction:</b>  {showAddiction ? content_warning_all.addiction : "Click Here"}</p>
        <p onClick={revealAdultMinorRelationship}><b>Adult/minor Relationship:</b>  {showAdultMinorRelationship ? content_warning_all.adult_minor_relationship : "Click Here"}</p>
        <p onClick={revealAlcohol}><b>Alcohol:</b>  {showAlcohol ? content_warning_all.alcohol : "Click Here"}</p>
        <p onClick={revealAlcohosim}><b>Alcoholism:</b>  {showAlcohosim ? content_warning_all.alcoholism : "Click Here"}</p>
        <p onClick={revealAnimalCruelty}><b>Animal Cruelty:</b>  {showAnimalCruelty ? content_warning_all.animal_cruelty : "Click Here"}</p>
        <p onClick={revealAnimalDeath}><b>Animal Death:</b>  {showAnimalDeath ? content_warning_all.animal_death : "Click Here"}</p>
        <p onClick={revealAntisemitism}><b>Antisemitism:</b>  {showAntisemitism ? content_warning_all.antisemitism : "Click Here"}</p>
        <p onClick={revealBiphobia}><b>Biphobia:</b>  {showBiphobia ? content_warning_all.biphobia : "Click Here"}</p>
        <p onClick={revealBlood}><b>Blood:</b>  {showBlood ? content_warning_all.blood : "Blood: Click Here"}</p>
        <p onClick={revealBodyHorror}><b>Body Horror:</b>  {showBodyHorror ? content_warning_all.body_horror : "Click Here"}</p>
        <p onClick={revealBodyShaming}><b>Body Shaming:</b>  {showBodyShaming ? content_warning_all.body_shaming : "Click Here"}</p>
        <p onClick={revealBullying}><b>Bullying:</b>  {showBullying ? content_warning_all.bullying : "Click Here"}</p>
        <p onClick={revealCancer}><b>Cancer:</b>  {showCancer ? content_warning_all.cancer : "Click Here"}</p>
        <p onClick={revealCannibalism}><b>Cannibalism:</b>  {showCannibalism ? content_warning_all.cannibalism : "Click Here"}</p>
        <p onClick={revealCarAccident}><b>Car Accident:</b>  {showCarAccident ? content_warning_all.car_accident : "Click Here"}</p>
        <p onClick={revealChildAbuse}><b>Child Abuse:</b>  {showChildAbuse ? content_warning_all.child_abuse : "Click Here"}</p>
        <p onClick={revealChildDeath}><b>Child Death:</b>  {showChildDeath ? content_warning_all.child_death : "Click Here"}</p>
        <p onClick={revealChronicIllness}><b>Chronic Illness:</b>  {showChronicIllness ? content_warning_all.chronic_illness : "Click Here"}</p>
        <p onClick={revealClassism}><b>Classism:</b>  {showClassism ? content_warning_all.classism : "Click Here"}</p>
        <p onClick={revealColonization}><b>Colonization:</b>  {showColonization ? content_warning_all.colonization : " Click Here"}</p>
        <p onClick={revealConfinement}><b>Confinement:</b>  {showConfinement ? content_warning_all.confinement : "Click Here"}</p>
        <p onClick={revealCulturalAppropriation}><b>Cultural Appropriation:</b>  {showCulturalAppropriation ? content_warning_all.cultural_appropriation : "Click Here"}</p>
        <p onClick={revealCursing}><b>Cursing:</b>  {showCursing ? content_warning_all.cursing : "Click Here"}</p>
        <p onClick={revealDeadnaming}><b>Deadnaming:</b>  {showDeadnaming ? content_warning_all.deadnaming : "Click Here"}</p>
        <p onClick={revealDeath}><b>Death:</b>  {showDeath ? content_warning_all.death : "Click Here"}</p>
        <p onClick={revealDeathOfAParent}><b>Death of a Parent:</b>  {showDeathOfAParent ? content_warning_all.death_of_a_parent : "Click Here"}</p>
        <p onClick={revealDementia}><b>Dementia:</b>  {showDementia ? content_warning_all.dementia : "Click Here"}</p>
        <p onClick={revealDomesticAbuse}><b>Domestic Violence:</b>  {showDomesticAbuse ? content_warning_all.domestic_abuse : "Click Here"}</p>
        <p onClick={revealDrugAbuse}><b>Drug Abuse:</b>  {showDrugAbuse ? content_warning_all.drug_abuse : "Click Here"}</p>
        <p onClick={revealDrugUse}><b>Drug Use:</b>  {showDrugUse ? content_warning_all.drug_use : "Click Here"}</p>
        <p onClick={revealDysphoria}><b>Dysphoria:</b>  {showDysphoria ? content_warning_all.dysphoria : "Click Here"}</p>
        <p onClick={revealEatingDisorder}><b>Eating Disorder:</b>  {showEatingDisorder ? content_warning_all.eating_disorder : "Click Here"}</p>
        <p onClick={revealEmotionalAbuse}><b>Emotional Abuse:</b>  {showEmotionalAbuse ? content_warning_all.emotional_abuse : "Click Here"}</p>
        <p onClick={revealExcrement}><b>Excrement:</b>  {showExcrement ? content_warning_all.excrement : "Click Here"}</p>
        <p onClick={revealFatphobia}><b>Fatphobia:</b>  {showFatphobia ? content_warning_all.fatphobia : "Click Here"}</p>
        <p onClick={revealFire}><b>Fire:</b>  {showFire ? content_warning_all.fire : "Click Here"}</p>
        <p onClick={revealForcedInstitutionalization}><b>Forced Institutionalization:</b>  {showForcedInstitutionalization ? content_warning_all.forced_institutionalization : "Click Here"}</p>
        <p onClick={revealGaslighting}><b>Gaslighting:</b>  {showGaslighting ? content_warning_all.gaslighting : "Click Here"}</p>
        <p onClick={revealGenocide}><b>Genocide:</b>  {showGenocide ? content_warning_all.genocide : "Click Here"}</p>
        <p onClick={revealGore}><b>Gore:</b>  {showGore ? content_warning_all.gore : "Click Here"}</p>
        <p onClick={revealGrief}><b>Grief:</b>  {showGrief ? content_warning_all.grief : "Click Here"}</p>
        <p onClick={revealGunViolence}><b>Gun Violence:</b>  {showGunViolence ? content_warning_all.gun_violence : "Click Here"}</p>
        <p onClick={revealHateCrime}><b>Hate Crime:</b>  {showHateCrime ? content_warning_all.hate_crime : "Click Here"}</p>
        <p onClick={revealHomophobia}><b>Homophobia:</b>  {showHomophobia ? content_warning_all.homophobia : "Click Here"}</p>
        <p onClick={revealIncest}><b>Incest:</b>  {showIncest ? content_warning_all.incest : "Click Here"}</p>
        <p onClick={revealInfertility}><b>Infertility:</b>  {showInfertility ? content_warning_all.infertility : "Click Here"}</p>
        <p onClick={revealInfidelity}><b>Infidelity:</b>  {showInfidelity ? content_warning_all.infidelity : "Click Here"}</p>
        <p onClick={revealInjury}><b>Injury Detail:</b>  {showInjury ? content_warning_all.injury : "Click Here"}</p>
        <p onClick={revealIslamophobia}><b>Islamophobia:</b>  {showIslamophobia ? content_warning_all.islamophobia : "Click Here"}</p>
        <p onClick={revealKidnapping}><b>Kidnapping:</b>  {showKidnapping ? content_warning_all.kidnapping : "Click Here"}</p>
        <p onClick={revealLesbophobia}><b>Lesbophobia:</b>  {showLesbophobia ? content_warning_all.lesbophobia : "Click Here"}</p>
        <p onClick={revealMassShooting}><b>Mass Shooting:</b>  {showMassShooting ? content_warning_all.mass_shooting : "Click Here"}</p>
        <p onClick={revealMedicalContent}><b>Medical Content:</b>  {showMedicalContent ? content_warning_all.medical_content : "Click Here"}</p>
        <p onClick={revealMedicalTrauma}><b>Medical Trauma:</b>  {showMedicalTrauma ? content_warning_all.medical_trauma : "Click Here"}</p>
        <p onClick={revealMentalIllness}><b>Mental Illness:</b>  {showMentalIllness ? content_warning_all.mental_illness : "Click Here"}</p>
        <p onClick={revealMiscarriage}><b>Miscarriage:</b>  {showMiscarriage ? content_warning_all.miscarriage : "Click Here"}</p>
        <p onClick={revealMisogyny}><b>Misogyny:</b>  {showMisogyny ? content_warning_all.misogyny : "Click Here"}</p>
        <p onClick={revealMurder}><b>Murder:</b>  {showMurder ? content_warning_all.murder : "Click Here"}</p>
        <p onClick={revealOuting}><b>Outing:</b>  {showOuting ? content_warning_all.outing : "Click Here"}</p>
        <p onClick={revealPanicAttack}><b>Panic Attack:</b>  {showPanicAttack ? content_warning_all.panic_attack : "Click Here"}</p>
        <p onClick={revealPedophilia}><b>Pedophilia:</b>  {showPedophilia ? content_warning_all.pedophilia : "Click Here"}</p>
        <p onClick={revealPhysicalAbuse}><b>Physical Abuse:</b>  {showPhysicalAbuse ? content_warning_all.physical_abuse : "Click Here"}</p>
        <p onClick={revealPoliceBrutality}><b>Police Brutality:</b>  {showPoliceBrutality ? content_warning_all.police_brutality : "Click Here"}</p>
        <p onClick={revealPregnancy}><b>Pregnancy:</b>  {showPregnancy ? content_warning_all.pregnancy : "Click Here"}</p>
        <p onClick={revealRacialSlur}><b>Racial Slur:</b>  {showRacialSlur ? content_warning_all.racial_slur : "Click Here"}</p>
        <p onClick={revealRacism}><b>Racism:</b>  {showRacism ? content_warning_all.racism : "Click Here"}</p>
        <p onClick={revealRape}><b>Rape:</b>  {showRape ? content_warning_all.rape : "Click Here"}</p>
        <p onClick={revealReligiousBigotry}><b>Religious Bigotry:</b>  {showReligiousBigotry ? content_warning_all.religious_bigotry : "Click Here"}</p>
        <p onClick={revealSchizophrenia}><b>Schizophrenia:</b>  {showSchizophrenia ? content_warning_all.schizophrenia : "Click Here"}</p>
        <p onClick={revealSchoolShooting}><b>School Shooting:</b>  {showSchoolShooting ? content_warning_all.school_shooting : "Click Here"}</p>
        <p onClick={revealSelfHarm}><b>Self Harm:</b>  {showSelfHarm ? content_warning_all.self_harm : "Click Here"}</p>
        <p onClick={revealSexism}><b>Sexism:</b>  {showSexism ? content_warning_all.sexism : "Click Here"}</p>
        <p onClick={revealSexualAssault}><b>Sexual Assault:</b>  {showSexualAssault ? content_warning_all.sexual_assault : "Click Here"}</p>
        <p onClick={revealSexualHarrassment}><b>Sexual Harrassment:</b>  {showSexualHarrassment ? content_warning_all.sexual_harrassment : "Click Here"}</p>
        <p onClick={revealSexualViolence}><b>Sexual Violence:</b>  {showSexualViolence ? content_warning_all.violence : "Click Here"}</p>
        <p onClick={revealSlavery}><b>Slavery:</b>  {showSlavery ? content_warning_all.slavery : "Click Here"}</p>
        <p onClick={revealStalking}><b>Stalking:</b>  {showStalking ? content_warning_all.stalking : "Click Here"}</p>
        <p onClick={revealSuicidalThoughts}><b>Suicial Thoughts:</b>  {showSuicidalThoughts ? content_warning_all.suicidal_thoughts : "Click Here"}</p>
        <p onClick={revealSuicide}><b>Suicide:</b>  {showSuicide ? content_warning_all.suicide : "Click Here"}</p>
        <p onClick={revealSuicideAttempt}><b>Suicide Attempt:</b>  {showSuicideAttempt ? content_warning_all.suicide_attempt : "Click Here"}</p>
        <p onClick={revealTerminalIllness}><b>Terminal Illness:</b>  {showTerminalIllness ? content_warning_all.terminal_illness : "Click Here"}</p>
        <p onClick={revealTorture}><b>Torture:</b>  {showTorture ? content_warning_all.torture : "Click Here"}</p>
        <p onClick={revealToxicFriendship}><b>Toxic Friendhsip:</b>  {showToxicFriendship ? content_warning_all.toxic_friendship : "Click Here"}</p>
        <p onClick={revealToxicRelationship}><b>Toxic Relationship:</b>  {showToxicRelationship ? content_warning_all.toxic_relationship : "Click Here"}</p>
        <p onClick={revealTrafficking}><b>Trafficking:</b>  {showTrafficking ? content_warning_all.trafficking : "Click Here"}</p>
        <p onClick={revealTransphobia}><b>Transphobia:</b>  {showTransphobia ? content_warning_all.transphobia : "Click Here"}</p>
        <p onClick={revealViolence}><b>Violence:</b>  {showViolence ? content_warning_all.violence : "Click Here"}</p>
        <p onClick={revealVomit}><b>Vomit:</b>  {showVomit ? content_warning_all.vomit : "Click Here"}</p>
        <p onClick={revealWar}><b>War:</b>  {showWar ? content_warning_all.war : "Click Here"}</p>
        <p onClick={revealXenophobia}><b>Xenophobia:</b>  {showXenophobia ? content_warning_all.xenophobia : "Click Here"}</p>
    </div>
    )
}

export default AllContentWarnings;