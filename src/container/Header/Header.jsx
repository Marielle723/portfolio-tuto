import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

import { FaDownload } from "react-icons/fa";

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
    <div className="app__header app__flex">
      <div className="app__header-info">
        <h1 className="head-text">Hi, I'm Marielle</h1>
        <h2>Creative Technologist</h2>

        <hr className="styled-break" />

        {/* <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Marielle</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div> */}

        {/* <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img src={images.profile} alt="profile_bg" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          />
        </motion.div> */}

        <p className="p-text">
          Successfully completed aN up-to-date web and mobile development
          bootcamp as part of my reconversion journey, with focus on the MERN
          stack, I am now looking for Practical first experience in the
          development of web applications. I have acquired and have a keen for
          continuous learning, I am enthusiastic about building web application
          solution, broaden my knowledge and gain experience. I hope my hands-on
          mentality and creativity in founding solutions will be appreciated in
          building a great intership experience. eager to continually improve
          both your technical skills and soft skills
        </p>

        <a
          href="creativetech-MPV.pdf"
          download="creativetech-MPV.pdf"
          alt="cv file"
        >
          <button type="button" class="btn">
            Download CV
            <span class="btn-icon">
              <FaDownload />
            </span>
          </button>
        </a>
      </div>

      <div className="hero-image">
        <img src={images.workingMeTrans} alt="my face" />
        <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.react, images.figma, images.sass].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
