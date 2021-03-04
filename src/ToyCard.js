

function ToyCard(props){
    // const {id, image, name} = props.toy // destructuring is an option
    return(
        <div className="card" id={`toy-${props.id}`}>
            <h2>{props.name}</h2>
            <img src={props.image} className="toy-avatar"/>
            <p>{props.likes} Likes </p>
            <button className="like-btn">Like &lt;3</button>
            <button onClick={() => props.delete(props.id)} className="delete">Delete</button>
        </div>
    )
}

export default ToyCard