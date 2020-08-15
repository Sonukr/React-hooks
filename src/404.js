import React from "react";
import notFound from './404.png';
import './App.css';

function NotFound() {

  return (
    <div className="notFound">
      <img src={notFound} alt="404"></img>
    </div>
  );
}

export default NotFound;