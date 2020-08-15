## React Hooks

![](https://img.shields.io/github/repo-size/Sonukr/react-hooks)
#### How to create and use react hooks.

- ##### useState Hook

```JS
//Login.js

  import React, {useState} from 'react';
  import Input from 'Compoennts/Input'
  import { Redirect } from 'react-router-dom';
  import './index.css';

  function Login() {
    // create a state call name and function call setName to update the state.
    // here we are using useState react hook to initialize state.
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [toHome, setToHome] = useState(false);
    return(
      <div className="loginWrapper">
        <div className="loginContent">
          {toHome? <Redirect to="/emojis" /> : null}
          // Here in Input component we are calling setName function (which we have defined in useState Hook) to upadate the value.
          <Input onChange={(e)=> setName(e.target.value)} value={name} type="text" placeHolder="Your Name"/>
          <Input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeHolder="Your Email"/>
          <button type="submit" onClick={e => setTimeout(() => setToHome(true), 0) }>Submit</button>
        </div>
      </div>
    )
  }
  export default Login;
````

- #### useEffect Hook

``` JS
//dataLoader.js

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
  // This hook will be re-render on change of searchTerm value and fetch new set of records.
  useEffect(() => {
    setLoading(true)
    // Call api to fetch the data and set it to data using useState Hook
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
      // Handle all unmount related things here
      return () =>{
        console.log('unmounting...');
      }
      
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
```
- #### Creating a custom hook
  <small>Here we are creating a custom hook called <b>useFetch</b> using <b>useEffect hook.</b></small>

```JS
// useFetch.js

import { useState, useEffect } from "react";

export default function useFetch(url, searchKey) {
  const [data, setData] = useState([]);
  const [length, setLength] = useState(0);
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if(searchKey.length  > 2){
        const results = data.filter(item => item.name.toLowerCase().includes(searchKey.toLowerCase()))
        setData(results);
        setLength(results.length)
      }else{
        setData(data);
        setLength(data.length)
      }
      setLoading(false)
    }
    getData();
  }, [searchKey, url]);

  return {data, length, loading};
}

```
<small>Now we can use this <b>useFetch</b> Custom hook to create a dataLoder component.</small>

```JS
// DataLoaderWithCustomHooks.js

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
  //  Call this custom hook  useFetch to fetch all/filtered data and use it by passing all required custom hook parameters.
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

```
