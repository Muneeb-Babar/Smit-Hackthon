

import React from 'react'
import '../css/footer.css'

 const Footer = () => {
  return (
    <div>
         <footer className="footer">
    <div class="footer-container">
      <div class="footer-section">
        <img style={{width:'200px'}} src="https://www.europaweekend.se/wp-content/uploads/2015/09/Softhouse.jpg"  alt="#"/>      </div>
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Contact Us</h3>
        <ul>
          <li>Email: info@softwarehouse.com</li>
          <li>Phone: +123-456-7890</li>
          <li>Address: 123 Software St, Tech City</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2024 Software House. All rights reserved.
    </div>
  </footer>
    </div>
  )
}

export default Footer
