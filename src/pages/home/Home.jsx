import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/catCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

const Home = () => {
  return (
    <>
      <div className='home'>
        <Featured />
        <TrustedBy />
        <Slide slideToShow={5} arrowsScroll={5}>
          {cards.map(card => (
            <CatCard key={card.id} item={card} />
          ))}
        </Slide>

        {/* Features section */}
        <div className="features">
          <div className="container">
            <div className="item">
              <h1>A whole world of freelance talent at your fingertips</h1>
              <div className="title">
                <img src="./img/check.png" alt="" />
                The best for every budget
              </div>
              <p>
                Find high-quality services at every price point. No hourly rates,
                just project-based pricing.
              </p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Quality work done quickly
              </div>
              <p>
                Find the right freelancer to begin working on your project within
                minutes.
              </p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Protected payments, every time
              </div>
              <p>
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                24/7 support
              </div>
              <p>
                Find high-quality services at every price point. No hourly rates,
                just project-based pricing.
              </p>
            </div>
            <img id="aboutImg" src="./img/aboutImg.png" alt="" />
          </div>
        </div>

        {/* Explore the marketplace section */}
        <div className="explore">
          <div className="container">
            <h1>Explore the marketplace</h1>
            <div className="items">
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Handicraft items</span>
              </div>
      
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation-thin.fd3699b.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Writing & Translation</span>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Cultural Music Classes</span>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/consulting-thin.d5547ff.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Farming Tips and Consultancy</span>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Business</span>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Herbal Products</span>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Traditional Art</span>
              </div>
              <div className="item">
                <img
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                  alt=""
                />
                <div className="line"></div>
                <span>Tourism & Travel Guides</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Dark section */}
        <div className="features dark">
          <div className="container">
            <div className="item">
              <h1>DesiHire's <i>business</i></h1>
              <h1>A business solution designed for teams</h1>
              <p>
                Upgrade to a curated experience packed with tools and benefits, dedicated to businesses.
              </p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Connect to freelancers with proven business experience
              </div>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Get matched with the perfect talent by a customer success manager
              </div>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Manage teamwork and boost productivity with a powerful workspace
              </div>
              <button>Explore our Business</button>
            </div>
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_460,dpr_1.0/v1/attachments/generic_asset/asset/55292bd34319d97ef4e9fd48d9f8758d-1704795769965/logo-maker-lohp.png" alt="" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={3} arrowsScroll={3}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
        
    </>
  );
};

export default Home;
