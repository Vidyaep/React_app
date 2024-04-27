import React from 'react';
import './Foot.css'; 

function Foot() {
  return (
    <footer className="Foot">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h4>About Us</h4>
            <p>Login Page for students.</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h4>Contact Us</h4>
            <p>Email: semhs@school.com</p>
            <p>Phone: +9123167890</p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h4>Social Media</h4>
            <ul className="social-icons">
              <li><a href="#"><i class="fa-brands fa-square-facebook"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-square-twitter"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-square-instagram"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-square-google-plus"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-square-whatsapp"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Foot;
