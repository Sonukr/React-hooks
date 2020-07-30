import React, { useState, useEffect } from "react";
import Input from "Compoennts/Input";
import './index.css';

function DataLoader() {
  // useState Hooks
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false)
  
  // useEffect Hook
  useEffect(() => {
    setLoading(true)
    fetch("https://unpkg.com/emoji.json@13.0.0/emoji.json")
      .then(response => response.json())
      .then(data => {
        if(searchTerm){
          const results = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
          setData(results);
          setCount(results.length)
        }else{
          setData(data)
          setCount(data.length)
        }
        setLoading(false)
      });
  },[searchTerm]); // This array parameter is used to call the hook when passed meter got changed
  
  // Set searchTerm value on change using setSearchTerm Hook
  const handleOnChnage =(e) =>{
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <div className="header">
        <div>
          <a href="/">Home</a>
          <a href="/emojis">Emojis</a>
          <a href="/emojisWithCustomHooks">Emojis with custom hook</a>
        </div>
        <Input onChange={handleOnChnage} type="search" placeHolder="Search..."/>
        <p>Total Results:  <b>{count}</b></p>
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

export default DataLoader;