import "./Card.css"

export default function Card({name="Anonymous", info=[]}) {

    let bgColor = {backgroundColor: name !== "Anonymous" && "#1f1f"}

    let infos = info.map((i)=> <li>{i}</li>)
    return (
        <div className="card" style={bgColor}>
            <h2>{name}</h2>
            <ul>
                {infos}
            </ul>
        </div>
    )
}