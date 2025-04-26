/* import { useState } from "react";
import './Carrello.css';
import App from "../App";


function Carrello(){

    //uso usestate 
    const [items,setItems] = useState([]);


    const aggiungiAlCarrello=(prodotto)=>{setItems([...items,prodotto]);
    };

    return(
        <div className="contenitore">
        <h3>Carrello</h3>
        <h4>Lista Dei Prodotti</h4>
            <div className="lista-prodotti">
            {items.map((p,i)=>(
                <div key={i} className="prodotto">
                    {p.name}-${p.price}
                    </div> 
            ))}
            </div>
        </div>
    )
};
export default Carrello; */