import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
          </div>
          <a href="https://github.com/Mitch-coder">
          <span className="secondaryText" >Explore More Works in my github acount</span>
          </a>
          
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
        <motion.section>
        <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./beKind.png" alt="project" />

        <h1>BeKind</h1>
        <p>is a practical, versatile and collaborative application between<br/> users,
           in which they show the nearby ATMs from where they are, <br/>
            also indicating if they are empty or not, to facilitate the choice <br/>of the ATM
             to be going to use and avoid a possible trip to one<br/> that does not have money.</p>
        <div className="deployAndCode">
        <a id="a1"href="https://github.com/J2rg3n-B3rm2d3z/FinalProject">Go to the repository</a>
        </div>
        </motion.section>

  
        <motion.section>
        <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./codeland.png" alt="project" />
        <h1>Codeland</h1>
        <p>A page dedicated to programming in Turbo C 2.0, where you  <br/>can have access to multiple codes and documentation to  <br/>facilitate its use and study.</p>
        <div className="deployAndCode">
        <a id="a1"href="https://github.com/mgrobleto/CodeLand">Go to the repository</a>
        </div>
        </motion.section>

        <motion.section>
    
        <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./rickAndMorty.png" alt="project" />
        <h1>Rick and Morty - API</h1>
        <p>This is a project example for consume an API.
              Technologies:<br/>  React, TypeScript, Axios and Bootstrap.<br/> 
          </p>
        <div className="deployAndCode">
        <a id="a1"href="https://github.com/Mitch-coder/Rick-And-Morthy-Project">Go to the repository</a>
        </div>
        </motion.section>


        <motion.section>
        <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./authSystem.png" alt="project" />
        <h1>AuthenticationSystem</h1>
        <p>is a project where i put in practice technologies such as<br/> graphql,react,jwt,tailwind for develop the auth  system.</p>
        <div className="deployAndCode">
        <a id="a1"href="https://github.com/Mitch-coder/AuthenticationSystem">Go to the repository</a>
        </div>
        </motion.section>

        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
