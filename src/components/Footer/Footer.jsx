import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
import { MdGite } from "react-icons/md";
import { FaGithub,FaLinkedin } from "react-icons/fa"
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      <a className="contact" id="contact"></a>
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's <br />
            Connect!
          </span>
          <span className="primaryText">
            Start by <a href="mailto:michellescalderon2002@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Michelle Calderon</p>
          </div>
          <a href="https://github.com/Mitch-coder" className="primaryText">
            <FaGithub></FaGithub>
            </a>
            <a href="https://www.linkedin.com/in/michelle-calderon-0b0a80227/" className="primaryText">
            <FaLinkedin></FaLinkedin>
            </a>
    

        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
