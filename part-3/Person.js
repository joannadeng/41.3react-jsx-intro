const Person = (props) => {
    let voteAge;
    if (props.age >= 18) {
        voteAge = "Please go vote"
    }else{
        voteAge = "you must be 18"
    };

    let shortName
    if(Array.from(props.name).length > 8){
        shortName = props.name.slice(0,6)
    }{
        shortName = props.name;
    }
    return (
        <div>
            <p>Learn more information about this person:</p>
            <ul>
                {props.hobbies.map(m=><li>{m}</li>)}
            </ul>
            <h3>{shortName}, {voteAge}</h3>
        </div>
    )
}