const Tweet = (props) => {
    return (
        <div>
            <p className="message">{props.message}</p>
            <span>by {props.username} on {props.date} from {props.name}</span>
            
        </div>
    )
}