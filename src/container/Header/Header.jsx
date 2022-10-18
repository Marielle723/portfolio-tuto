import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

import { FaDownload } from "react-icons/fa";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex animated-area">
      <ul className="box-area">
        <li>{/* <img src={images.engrenage} alt="engrenage" /> */}</li>
        <li>{/* <img src={images.engrenage} alt="engrenage" /> */}</li>
        {/* <li></li>
        <li></li>
        <li></li>
        <li></li> */}
      </ul>
      <div className="app__header-info">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="head-text">Hi, I'm Marielle</p>
              </div>
            </div>

            <div className="tag-cmp app__flex">
              <h3>Creative technologist</h3>
              <h3>Freelancer</h3>
              <p className="p-text">
                I conceptualize, build and prototype tech-based creative
                solutions.
              </p>
            </div>

            <hr className="styled-break" />

            <p className="p-text">
              I believe imagination and storytelling impact people in the
              greatest way. I have always dreamt of using technology to add
              aliveness to ideas. I have studied electronic engineering, and
              I've worked as a quality technician and an electrical safety
              technician. I have also a strong interest for literature and art
              performances, therefore I am now eager to merge all my experiences
              and passions in a logical sequence.
            </p>

            <div className="header-buttons">
              <button type="button" className="btn dl-cv">
                <a
                  href="creativetech-MPV.pdf"
                  download="creativetech-MPV.pdf"
                  alt="cv file"
                >
                  Download CV
                  <span className="btn-icon">
                    <FaDownload />
                  </span>
                </a>
              </button>

              <a href="#" alt="check-my-services">
                <button type="button" className="btn check-services">
                  Check my services
                  <span>
                    <BsFillArrowDownSquareFill />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img src={images.mebigimg} alt="profile_bg" />
          {/* <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          /> */}
        </motion.div>

        <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.typewriter, images.electronic, images.Programming].map(
            (circle, index) => (
              <div className="circle-cmp app__flex" key={`circle-${index}`}>
                <img src={circle} alt="circle" />
              </div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
