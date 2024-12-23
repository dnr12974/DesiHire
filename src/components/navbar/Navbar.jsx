import React, { useEffect, useState } from 'react'
import {Link,useLocation} from "react-router-dom";
import "./Navbar.scss"
const Navbar = () => {
  const [active,setActive]= useState(false);
  const [open,setOpen]= useState(false);
  const {pathname} =useLocation();
  const isActive=()=>{
    window.scrollY>0?setActive(true):setActive(false)
  }
  useEffect(()=>{
     window.addEventListener("scroll",isActive);
     return()=>{
      window.removeEventListener("scroll",isActive);
     };
  },[]);
   const currentUser={
       id:1,
       userName:"Dheer NR",
       isSeller:true
  }
  return (
    <div className={active || pathname!=="/" ? "navbar active":"navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className='link'> 
          <span className='text'>DesiHire</span>
         </Link> 
          
        </div>
        <div className="links">
        <span>DesiHire's Buisness</span>
        <span>Explore</span>
        <span>English</span>
        <span>Sign in</span>
        {!currentUser?.isSeller && <span>Become a Seller</span>}
        {!currentUser && <button>Join</button>}
        {currentUser && (
          <div className="user" onClick={()=>setOpen(!open)}>
            <img src="https://png.pngitem.com/pimgs/s/130-1300400_user-hd-png-download.png" alt="" />
            <span>{currentUser?.userName}</span>
            {open && <div className="options">
              {
                currentUser?.isSeller && (
                   <>
                   <Link className='link' to="/myGigs">Gigs</Link>
                   <Link className='link' to="/add">Add New Gig</Link>
                   </>
                )}
                <Link className='link' to="/orders">Orders</Link>
                <Link className='link' to="/messages">Messages</Link>
                <Link className='link' to="/">Logout</Link>
              </div>}
            </div>
        )}
        </div>
      </div>
      {(active || pathname!=="/") && (
        <>
       <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
            Herbal Remedies
            </Link>
            <Link className="link menuLink" to="/">
            Customized Pottery
            </Link>
            <Link className="link menuLink" to="/">
            Handicrafts
            </Link>
            <Link className="link menuLink" to="/">
            Farming Tips
            </Link>
            <Link className="link menuLink" to="/">
            Handloom
            </Link>
            <Link className="link menuLink" to="/">
            Tribal Jewelry Design
            </Link>
            <Link className="link menuLink" to="/">
            Tribal Music Lessons
            </Link>
            <Link className="link menuLink" to="/">
            Personalized Art Creation
            </Link>
            <Link className="link menuLink" to="/">
            Beekeeping
            </Link>
          </div>
      </>
      )}
    
    </div>
  )
}

export default Navbar
