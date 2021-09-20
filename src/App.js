import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    
  }, [])
  return (
    <div>
      <h2>Traveling around the world!!</h2>
    </div>
  )
}

export default App;
