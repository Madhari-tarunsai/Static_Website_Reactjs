import "./Footer.css";

function Footer() {
  return (
    <div id="footer">
      <div id="footer-content">
        {/* Footer Left */}
        <div id="footer-left">
          <h3>FoodHub</h3>
          <p>Your go-to place for delicious meals, delivered fast and fresh.</p>
        </div>

        {/* Footer Middle (Links) */}
        <div id="footer-middle">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Footer Right (Social Media Links) */}
        <div id="footer-right">
          <h4>Follow Us</h4>
          <div id="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCGt-g5iUAsR6gxKqs00elfvspDAyHhVfo3w&s" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div id="footer-bottom">
        <p>&copy; 2025 FoodHub. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
