import { useState } from 'react';
import './App.css';

import axios from "axios";


function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [img, setImg] = useState('');

  function handleSearch(event){
    setSearchQuery(event.target.value);
  }

  async function getImage() {
    try {
      const API = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&q=${searchQuery}&format=json`;
      const response = await axios.get(API);
      setImg(response.data[0].img_url);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>Find any image</h1>
      <input type="text" placeholder='enter image subject' onChange={handleSearch} />
      <button onClick={getImage}>Explore!</button>
      {img && <img src={img} alt={searchQuery} />}
    </div>
  );
}

export default App;
