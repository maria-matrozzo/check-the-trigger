function AuthorCard({authorInfo}) {

    console.log("authors"   , authorInfo)

    return(
        <div>
            <h3>{authorInfo.name} </h3>
        </div>
        
    )
}

export default AuthorCard;