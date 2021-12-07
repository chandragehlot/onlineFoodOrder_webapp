import React from 'react';

const Footer = () => {
    return (
        <footer>
        <div className="content">
          <div className="left box">
            <div className="upper">
              <div className="topic">About us</div>
              <p>We are a online food deliver store, having wide variety of food</p>
            </div>
            <div className="lower">
              <div className="topic">Contact us</div>
              <div className="phone">
                <a href="/error"><i className="fas fa-phone-volume"></i>+00 000000000</a>
              </div>
              <div className="email">
                <a href="/error"><i className="fas fa-envelope"></i>abc@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="middle box">
            <div className="topic">Company</div>
            <div><a href="/error">Blog</a></div>
            <div><a href="/error">Feedback</a></div>
            <div><a href="/error">Terms & Conditions</a></div>
            <div><a href="/error">Privacy Policy</a></div>
            <div><a href="/error">Disclaimer</a></div>
            <div><a href="/error">Gift Cards</a></div>
          </div>
          <div className="right box">
            <div className="topic">Subscribe us</div>
              <div className="media-icons">
                <a href="/error"><i className="fab fa-facebook-f"></i></a>
                <a href="/error"><i className="fab fa-instagram"></i></a>
                <a href="/error"><i className="fab fa-twitter"></i></a>
                <a href="/error"><i className="fab fa-youtube"></i></a>
                <a href="/error"><i className="fab fa-linkedin-in"></i></a>
              </div>
          </div>
        </div>
        <div className="bottom">
          <p>Copyright © 2020 <a href="/error">CodingLab</a> All rights reserved</p>
        </div>
      </footer>
    );
};

export default Footer;