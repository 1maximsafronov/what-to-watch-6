import React from "react";
import {Link} from "react-router-dom";

const PageNotFound = () =>{
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/" style={{color: `blue`}}>To main page</Link>
    </div>
  );
};

export default PageNotFound;
