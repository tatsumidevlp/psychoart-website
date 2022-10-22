import React, { Component } from 'react'
import '../styles/about.scss'
import pic from '../images/about-pic.png'
import { motion } from 'framer-motion'


const animation = {
    hidden:{
      y: 50,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1, duration: 0.2 },
    }),
}


const imgAnimation = {
    hidden:{
      x: -100,
      opacity: 0,
    },
    visible:{
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
}

export default class About extends Component {
  render() {
    return (
      <>
      <div className="about">
        <div className="container">
                <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={animation} custom={1} className="about__title" id='title'>
                    About Us
                </motion.div>
                <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={animation} custom={2} className="about__subtitle" id='text'>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                </motion.div>
                <div className="about__content">
                    <div className="about__item">
                        <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={imgAnimation} className="about__image">
                            <img src={pic} width='490px' height='600px' alt="About picture" />
                        </motion.div>
                    </div>
                    <div className="about__item">
                        <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={animation} custom={1} className="about-item__title" id='title'>
                            Get Popular NFT
                        </motion.div>
                        <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={animation} custom={2} className="about-item__text" id='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Etiam eu turpis molestie, dictum est a, mattis tellus. Sed <br /> dignissim, metus nec fringilla accumsan, risus sem <br /> sollicitudin lacus, ut interdum tellus elit sed risus. <br /> Maecenas eget condimentum velit, sit amet feugiat <br /> lectus. Class aptent taciti sociosqu ad litora torquent per <br /> conubia nostra, per inceptos himenaeos. Praesent auctor <br /> purus luctus enim egestas, ac scelerisque ante pulvinar. 
                        </motion.div>
                        <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={animation} className="about-item__button">
                            <button className="btn" id='btn'>
                                Show more
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
      </div>
      </>
    )
  }
}
