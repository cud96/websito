import './App.css';
import NavBar from './components/NavBar';
import Clocks from './components/Clock';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  //creo lo stato del carrello
  const [items, setItems] = useState([]);

  //funzione che aggiunge il prodotto al carrello
  function aggiungi(prodotto) {
    setItems([...items, prodotto]);
  }

  //funzione che rimuove il prodotto dal carrello
  function rimuovi(id) {
    const nuovoCarrello = items.filter(item => item.id !== id);
    setItems(nuovoCarrello);
  }

  const borse = [
    {
      id: 0,
      title: "nome borsa 1",
      description: "descrizione della borsa",
      imgURL: "https://plus.unsplash.com/premium_photo-1681498856888-2f3552c0b189?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9yc2F8ZW58MHx8MHx8fDA%3D",
      disponibile: true,
      prezzo: "25$"
    },
    {
      id: 1,
      title: "nome borsa 2",
      description: "descrizione della borsa",
      imgURL: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9yc2F8ZW58MHx8MHx8fDA%3D",
      disponibile: true,
      prezzo: "25$"
    },
    {
      id: 2,
      title: "nome borsa 3",
      description: "descrizione della borsa",
      imgURL: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9yc2F8ZW58MHx8MHx8fDA%3D",
      disponibile: true,
      prezzo: "25$"
    },
    {
      id: 3,
      title: "nome borsa 4",
      description: "descrizione della borsa",
      imgURL: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      disponibile: false,
      prezzo: "25$"
    },
    {
      id: 4,
      title: "nome borsa 5",
      description: "descrizione della borsa",
      imgURL: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvcnNhfGVufDB8fDB8fHww",
      disponibile: true,
      prezzo: "25$"
    },
    {
      id: 5,
      title: "nome borsa 6",
      description: "descrizione della borsa",
      imgURL: "https://images.unsplash.com/photo-1597708724657-6b294dc5a3af?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      disponibile: false,
      prezzo: "15$"
    }
  ];

  return (
    <div>
      <div>
        <NavBar></NavBar>
        <Clocks></Clocks>
      </div>

      <div className='container'>
        {/* mappa tutte le borse disponibili */}
        {borse.map((borsa) => (
          <div key={borsa.id}>
            <Card
              title={borsa.title}
              disponibile={borsa.disponibile}
              description={borsa.description}
              imgURL={borsa.imgURL}
              prezzo={borsa.prezzo}
            />
            <button onClick={() => aggiungi(borsa)}>Sposta Nel Carrello</button>
          </div>
        ))}
      </div>

      <div className="carrello">
        <h2>👜 Carrello</h2>
        {items.length === 0 ? (
          <p>Il carrello è vuoto.</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.title} – {item.prezzo}
                <button onClick={() => rimuovi(item.id)}>❌ Rimuovi</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
