import "./Card.css"
import Title from "./Title.jsx"
import Description from "./Description.jsx"

function Card() {
    return (
        <div className="card">
            <Title/>
            <Description/>
        </div>
    )
}

export default Card;