// useFetch.js
import { useState, useEffect } from "react";

export default function useFetch(url, searchKey) {
  debugger
  const [data, setData] = useState([]);
  const [length, setLength] = useState(0);
  const [loading, setLoading] = useState(false)
  
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

  useEffect(() => {
    getData();
  }, [searchKey]);

  return {data, length, loading};
}
