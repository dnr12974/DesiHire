import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";
const Featured = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = () => {
      navigate(`/gigs?search=${input}`);
    };
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Unlock <i>Hidden Talent</i>, Empower <i>Urban Dreams</i></h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" />
                        <input type="text" placeholder="Search for any service..." onChange={(e) =>setInput(e.target.value)}/>
                    </div>
                    <button onClick={handleSubmit}>Search</button>
                </div>
                <div className="popular">
                    <span>Popular Services:</span>
                    <button>Farming</button>
                    <button>Crafting</button>
                    <button>Animal Care</button>
                    <button>Carpentry</button>
                </div>
            </div>
            <div className="right">
                <img src="./img/manFinal.png" alt="" />
            </div>
        </div>
        </div>
    
  );
}

export default Featured;
