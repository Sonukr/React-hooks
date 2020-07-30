

import React, { useState } from "react";
import Input from "Compoennts/Input";
import './index.css';
import useFetch from 'CustomHooks/useFetch';

function DataLoaderWithCustomHooks() {
  
  // useState Hook
  const [searchTerm, setSearchTerm] = useState("");
  
  // Set searchTerm value on change using setSearchTerm Hook
  const handleOnChnage =(e) =>{
    setSearchTerm(e.target.value);
  }
  //  Call this custom hook  useFetch to fetch all/filtered data and use it.
  const {data, length, loading} = useFetch("https://unpkg.com/emoji.json@13.0.0/emoji.json", searchTerm);
  
  return (
    <div>
      <div className="header">
        <div>
          <a href="/">Home</a>
          <a href="/emojis">Emojis</a>
          <a href="/emojisWithCustomHooks">Emojis with custom hook</a>
        </div>
        <Input onChange={handleOnChnage} type="search" placeHolder="Search..."/>
        <p>Total Results:  <b>{length}</b></p>
      </div>
      {loading ? <div className="App"> <p>Loading...</p> </div> : 
          <ul className="list">
            {data.map(el => (
              <li key={el.codes}>
                <p>{el.char}</p>
                <span>{el.name}</span>
              </li>
            ))}
          </ul>
      }
    </div>
  );
}

export default DataLoaderWithCustomHooks;
