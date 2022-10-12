import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="Footer">
      <polygon>
        <a href="mailto:singh7509811123@gmail.com">singh7509811123@gmail.com</a>
      </polygon>

      <div className="socialMedia">
        <ul className="social">
          <a>----</a>
          <a href="https://www.facebook.com/profile.php?id=100025046363249">
            <FaFacebookSquare />
          </a>
          <a>----</a>
          <a href="https://www.instagram.com/a.n.i.k.e.t4841/">
            <FaInstagramSquare />
          </a>
          <a>----</a>
          <a href="https://www.linkedin.com/in/aniket-singh-622744213/">
            {" "}
            <FaLinkedinIn />
          </a>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
