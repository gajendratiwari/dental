import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/appointments">Appointments</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer__socials">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/p/Talchowk-dental-clinic-100063912786101/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/nawaraj113/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <h4>Contact Us</h4>
          <ul>
            <li>Phone: +977 9856085530</li>
            <li>Email: info@talchowkdental.com</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 YourWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
