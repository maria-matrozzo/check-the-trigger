import React from 'react';

function BookCard({bookInfo}) {

    // console.log("author:   ", bookInfo.author)
    console.log("content warnings:   ", bookInfo.content_warnings)

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
                    <p> Abandonment: {bookInfo.content_warnings.abandonment}</p>
                    <p> Ableism: {bookInfo.content_warnings.ableism} </p>
                    <p> Abortion: {bookInfo.content_warnings.abortion} </p>
                    <p> Acephobia: {bookInfo.content_warnings.acephobia} </p>
                    <p>Addiction: {bookInfo.content_warnings.addiction}</p>
                    <p>Adult/minor Relationship: {bookInfo.content_warnings.adult_minor_relationship}</p>
                    <p>Alcohol: {bookInfo.content_warnings.alcohol}</p>
                    <p>Alcoholism: {bookInfo.content_warnings.alcoholism}</p>
                    <p>Animal Cruelty: {bookInfo.content_warnings.animal_cruelty}</p>
                    <p>Animal Death: {bookInfo.content_warnings.animal_death}</p>
                    <p>Antisemitism: {bookInfo.content_warnings.antisemitism}</p>
                    <p>Biphobia: {bookInfo.content_warnings.biphobia}</p>
                    <p>Blood: {bookInfo.content_warnings.blood}</p>
                    <p>Body Horror:{bookInfo.content_warnings.blood_horror}</p>
                    <p>Body Shaming: {bookInfo.content_warnings.body_shaming}</p>
                    <p>Bullying: {bookInfo.content_warnings.bullying}</p>
                    <p>Cancer: {bookInfo.content_warnings.cancer}</p>
                    <p>Cannibalism: {bookInfo.content_warnings.cannibalism}</p>
                    <p>Car Accident: {bookInfo.content_warnings.car_accident}</p>
                    <p>Child Abuse: {bookInfo.content_warnings.child_abuse}</p>
                    <p>Child Death: {bookInfo.content_warnings.child_death}</p>
                    <p>Chronic Illness: {bookInfo.content_warnings.chronic_illness}</p>
                    <p>Classism: {bookInfo.content_warnings.classism}</p>
                    <p>Colonization: {bookInfo.content_warnings.colonization}</p>
                    <p>Confinement: {bookInfo.content_warnings.confinement}</p>
                    <p>Cultural Appropriation: {bookInfo.content_warnings.cultural_appropriation}</p>
                    <p>Cursing: {bookInfo.content_warnings.cursing}</p>
                    <p>Deadnaming: {bookInfo.content_warnings.deadnaming}</p>
                    <p>Death: {bookInfo.content_warnings.death}</p>
                    <p>Death of a Parent: {bookInfo.content_warnings.death_of_a_parent}</p>
                    <p>Dementia: {bookInfo.content_warnings.dementia}</p>
                    <p>Domestic Abuse:{bookInfo.content_warnings.domestic_abuse}</p>
                    <p>Drug Abuse: {bookInfo.content_warnings.drug_abuse}</p>
                    <p>Drug Use: {bookInfo.content_warnings.drug_use}</p>
                    <p>Dysphoria: {bookInfo.content_warnings.dysphoria}</p>
                    <p>Eating Disorder: {bookInfo.content_warnings.eating_disorder}</p>
                    <p>Emotional Abuse: {bookInfo.content_warnings.emotional_abuse}</p>
                    <p>Excrement: {bookInfo.content_warnings.excrement}</p>
                    <p>Fatphobia: {bookInfo.content_warnings.fatphobia}</p>
                    <p>Fire: {bookInfo.content_warnings.fire}</p>
                    <p>Forced Institutionalization: {bookInfo.content_warnings.forced_institutionalization}</p>
                    <p>Gaslighting: {bookInfo.content_warnings.gaslighting}</p>
                    <p>Genocide: {bookInfo.content_warnings.genocide}</p>
                    <p>Gore: {bookInfo.content_warnings.gore}</p>
                    <p>Grief: {bookInfo.content_warnings.grief}</p>
                    <p>Gun Violence: {bookInfo.content_warnings.gun_violence}</p>
                    <p>Hate Crime: {bookInfo.content_warnings.hate_crime}</p>
                    <p>Homophobia: {bookInfo.content_warnings.homophobia}</p>
                    <p>Incest: {bookInfo.content_warnings.incest}</p>
                    <p>Infertility: {bookInfo.content_warnings.infertility}</p>
                    <p>Infidelity: {bookInfo.content_warnings.infidelity}</p>
                    <p>Injury: {bookInfo.content_warnings.injury}</p>
                    <p>Islamophobia: {bookInfo.content_warnings.islamophobia}</p>
                    <p>Kidnapping: {bookInfo.content_warnings.kidnapping}</p>
                    <p>Lesbophobia: {bookInfo.content_warnings.lesbophobia}</p>
                    <p>Mass Shooting: {bookInfo.content_warnings.mass_shooting}</p>
                    <p>Medical Content: {bookInfo.content_warnings.medical_content}</p>
                    <p>Medical Trauma: {bookInfo.content_warnings.medical_trauma}</p>
                    <p>Mental Illness: {bookInfo.content_warnings.mental_illness}</p>
                    <p>Miscarriage: {bookInfo.content_warnings.miscarriage}</p>
                    <p>Misogyny: {bookInfo.content_warnings.misogyny}</p>
                    <p>Murder: {bookInfo.content_warnings.murder}</p>
                    <p>Outing: {bookInfo.content_warnings.outing}</p>
                    <p>Pannic Attack: {bookInfo.content_warnings.panic_attack}</p>
                    <p>Pedophilia: {bookInfo.content_warnings.pedophilia}</p>
                    <p>Physical Abuse: {bookInfo.content_warnings.physical_abuse}</p>
                    <p>Police Brutality: {bookInfo.content_warnings.police_brutality}</p>
                    <p>Pregnancy: {bookInfo.content_warnings.pregnancy}</p>
                    <p>Racial Slur: {bookInfo.content_warnings.racial_slur}</p>
                    <p>Racism: {bookInfo.content_warnings.racism}</p>
                    <p>Rape: {bookInfo.content_warnings.rape}</p>
                    <p>Religious Bigotry: {bookInfo.content_warnings.religious_bigotry}</p>
                    <p>Schizophrenia: {bookInfo.content_warnings.schizophrenia}</p>
                    <p>School Shooting: {bookInfo.content_warnings.school_shooting}</p>
                    <p>Self Harm: {bookInfo.content_warnings.self_harm}</p>
                    <p>Sexism: {bookInfo.content_warnings.sexism}</p>
                    <p>Sexual Assault: {bookInfo.content_warnings.sexual_assault}</p>
                    <p>Sexual Harrassment: {bookInfo.content_warnings.sexual_harrassment}</p>
                    <p>Sexual Violence: {bookInfo.content_warnings.sexual_violence}</p>
                    <p>Slavery: {bookInfo.content_warnings.slavery}</p>
                    <p>Stalking: {bookInfo.content_warnings.stalking}</p>
                    <p>Suicidal Thoughts: {bookInfo.content_warnings.suicidal_thoughts}</p>
                    <p>Suicide: {bookInfo.content_warnings.suicide}</p>
                    <p>Suicide Attempt: {bookInfo.content_warnings.suicide_attempt}</p>
                    <p>Terminal Illness: {bookInfo.content_warnings.terminal_illness}</p>
                    <p>Torture: {bookInfo.content_warnings.torture}</p>
                    <p>Toxic Friendship: {bookInfo.content_warnings.toxic_friendship}</p>
                    <p>Toxic Relationship: {bookInfo.content_warnings.toxic_relationship}</p>
                    <p>Trafficking: {bookInfo.content_warnings.trafficking}</p>
                    <p>Transphobia: {bookInfo.content_warnings.transphobia}</p>
                    <p>Violence: {bookInfo.content_warnings.violence}</p>
                    <p>Vomit: {bookInfo.content_warnings.vomit}</p>
                    <p>War: {bookInfo.content_warnings.war}</p>
                    <p>Xenophobia: {bookInfo.content_warnings.xenophobia}</p> 
            </div>

            </div>
        </article>
    )
}

export default BookCard;