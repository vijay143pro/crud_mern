import React, {useState} from "react";
import './maincontent.css';
import data from "../MovieDb.json";

const MovieContent=()=> {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="main">
      <div className="templateContainer">
          <input id="searchInput" type="text" placeholder="Search here..." 
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        <div className="img-contain">
          {
            data .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.Director.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.Images} alt="" width="300px" height="300px"/>
                      <h3>{val.Title}</h3>
                      <p>{val.Director}</p>
                      <cite>{val.Language}</cite>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </div>
  )
}

export default MovieContent;