
import React from 'react'
class ToyCard extends React.Component{
    // const {id, image, name} = props.toy // destructuring is an option
    hoverColor = (e) => {
       
        e.target.style.backgroundColor !== "white" ?  e.target.style.backgroundColor = "white" :  e.target.style.backgroundColor = this.props.color
    }
    
    render(){
        return(
            <div className="card" id={`toy-${this.props.id}`} onMouseEnter={this.hoverColor} onMouseOut={this.hoverColor}>
                <h2>{this.props.name}</h2>
                <img src={this.props.image} className="toy-avatar"/>
                <p>{this.props.likes} Likes </p>
                <button className="like-btn">Like &lt;3</button>
                <button onClick={() => this.props.delete(this.props.id)} className="delete">Delete</button>
            </div>
        )
    }
    
}

export default ToyCard