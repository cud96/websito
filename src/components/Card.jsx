import './Card.css';

function Card({title,imgURL,description,children}){


    return(
        <div className="cards">
            <img 
            src={imgURL}
            alt=""
            height="40%"
            width="100%"></img>
            <div className="descrizione">
            <h2>{title}</h2>
            <p>{description}</p>
            </div>
        </div>

    )
}
export default Card;