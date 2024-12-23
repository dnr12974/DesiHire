import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Herbal Remedies</span>
            <span>Customised Pottery</span>
            <span>Regional Writing & Translation services</span>
            <span>Handicrafts</span>
            <span>Farming Tips</span>
            <span>Handloom</span>
            <span>Tribal Jewelary Designs </span>
            <span>Cultural Music classes</span>
            <span>Personalised Art Creation</span>
            <span>Beekeeping</span>
            <span>Authentic food recipies and items</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on DesiHire</span>
            <span>Buying on DesiHire</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From DesiHire</h2>
            <span>DesiHire Business</span>
            <span>DesiHire Pro</span>
            <span>DesiHire Guides</span>
            <span>Get Inspired</span>
            <span>DesiHire Select</span>
            <span>Get Talent</span>
            <span>DesiHire Workspace</span>
            <span>Learn</span>
            <span>Power of employement</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>DesiHire</h2>
            <span>© DesiHire Private Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;