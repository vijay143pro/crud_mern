import React, {useState} from "react";
import './maincontent.css';
import data from "../MovieDb.json";
import { Link } from "react-router-dom";
import Carousel from "../carousel/Carousel";

const MovieContent=()=> {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
    <div className='total-container'>
    <header className='heading'>
        <div className=' logo'><h1>S<span className='style-logo'>VR</span></h1></div>
        <Link to="/dash"><h2 className='dash'>Dashboard</h2></Link>
        <Link to="/form"><h2 className='signup'>Sign-up</h2></Link>
        
    </header>

</div>
    
    
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
      <Carousel/>
    </div>
    </>
  )
}

export default MovieContent;