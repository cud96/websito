import './Card.css';

function Card({title,prezzo,imgURL,description,disponibile}){
    
    return(
        <div>
        <div className="cards">
            <img 
            src={imgURL}
            alt=""
          ></img>
          </div>

            <div className="descrizione">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{prezzo}</p>   
            <span> {disponibile ? "👜 disponibile":"❌ non disponibile"}</span>
            </div>
        
        </div>

    )
}
export default Card;