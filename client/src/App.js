import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get('/api/listings')
      .then((res) => {
        setListings(res.data);
      })
      .catch((err) => console.error(err));
  });

  return (
    <div className="App">
      {listings.length > 0 && (
        <ul className="listings">
          {listings.map((lstng, index) => (
            <li key={index}>Address: {lstng.address}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
