import { useEffect, useState } from 'react';

import './Clock.css';
function Clocks(){
    const [value, setValue] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => setValue(new Date()), 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return (
        <div className="clock-container">
        <p>Orario:</p>
        <p>{value.toLocaleTimeString()}</p>
        </div>
    );
  }

  export default Clocks;