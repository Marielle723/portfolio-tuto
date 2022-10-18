import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div className="anchor-social">
        <a
          href="https://www.linkedin.com/in/marielle-pierre-victor-8065415b/"
          alt="linkedin-marielle-pierre-victor"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Marielle723"
          target="_blank"
          alt="github-marielle723"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/storituella/"
          alt="instagram-storituella"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
