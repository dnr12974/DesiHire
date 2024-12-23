import React from 'react'
import "./Featured.scss"
const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Unlock <i>Hidden Talent</i>, Empower <i>Urban Dreams</i></h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" />
                        <input type="text" placeholder="Search for any service..."/>
                    </div>
                    <button>Search</button>
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
