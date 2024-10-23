import { useState } from 'react';
import './App.css';

function App() {

  const [information , setInformation] = useState() ; 

  const getInfo = async() => {
    const response = await fetch("https://crispy-meme-7v7vg6595rrwcp5vq-3000.app.github.dev/")
    const value = await response.text() ; 
    setInformation(value); 

  }

  return (
    <div className="App">
      <button onClick={getInfo}>Get information </button>
      <h3>Information is : </h3>

      <p>{information}</p>
    </div>
  );
}

export default App;
