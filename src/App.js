import './App.css';
import NavBar from './components/NavBar';
import Clocks from './components/Clock';
import Card from './components/Card';

function App() {
  return (
    <div>
          <div>
    <NavBar></NavBar>
    <Clocks></Clocks>
    </div>
    <div className='container'>
      <Card 
      title="nome borsa n1"
      imgURL="https://plus.unsplash.com/premium_photo-1681498856888-2f3552c0b189?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9yc2F8ZW58MHx8MHx8fDA%3D"
      description="descrizione della borsa"
      >sdisdisd</Card>
      <Card 
      title="nome borsa n2"
      imgURL="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9yc2F8ZW58MHx8MHx8fDA%3D"
      description="descrizione della borsa"
      ></Card><Card 
      title="nome borsa n3"
      imgURL="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9yc2F8ZW58MHx8MHx8fDA%3D"
      description="descrizione della borsa"
      ></Card><Card 
      title="nome borsa n4"
      imgURL="https://images.unsplash.com/photo-1597708724657-6b294dc5a3af?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      description="descrizione della borsa"
      ></Card>
    </div>

  </div>
  );
}

export default App;
