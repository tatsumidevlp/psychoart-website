import React, { Component } from 'react'
import { motion } from 'framer-motion'
import '../styles/topCreator.scss'
import img1 from '../images/creator-card1.png'
import icon1 from '../images/icon1.png'
import img2 from '../images/creator-card2.png'
import icon2 from '../images/icon2.png'
import img3 from '../images/creator-card3.png'
import icon3 from '../images/icon3.png'


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

const imgAnimationReverse = {
    hidden:{
      x: 100,
      opacity: 0,
    },
    visible:{
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
}

const imgAnimationSpecial = {
    hidden:{
      y: 100,
      opacity: 0,
    },
    visible:{
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, delay: -2 },
    },
}

export default class TopCreator extends Component {
  render() {
    return (
      <>
      <div className="topCreator">
        <div className="container">
            <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={animation} custom={1}  className="topCreator__title" id='title'> 
                Top Creator
            </motion.div>
            <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={animation} custom={2}  className="topCreator__text" id='text'>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            </motion.div>
            <div className="cards">
                <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={imgAnimation} custom={3}  className="creator-card">
                    <div className="card__img">
                        <img src={img1} alt="Card 1 background" />
                    </div>
                    <div className="card__author-icon">
                        <img src={icon1} alt="Icon 1" />
                    </div>
                    <div className="card__author-name" id='title'>
                        Mary Jordan
                    </div>
                    <div className="card__author-text">
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                    </div>
                    <div className="card__button">
                        <button className="btn" id='btn'>
                            + Follow
                        </button>
                    </div>
                </motion.div>
                <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={imgAnimationSpecial} custom={2}  className="creator-card" id='special-card'>
                    <div className="card__img">
                        <img src={img2} alt="Card 1 background" />
                    </div>
                    <div className="card__author-icon">
                        <img src={icon2} alt="Icon 1" />
                    </div>
                    <div className="card__author-name" id='title'>
                        John Wick
                    </div>
                    <div className="card__author-text">
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                    </div>
                    <div className="card__button">
                        <button className="btn" id='btn'>
                            + Followed
                        </button>
                    </div>
                </motion.div>   
                <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={imgAnimationReverse} custom={3}  className="creator-card">
                    <div className="card__img">
                        <img src={img3} alt="Card 1 background" />
                    </div>
                    <div className="card__author-icon">
                        <img src={icon3} alt="Icon 1" />
                    </div>
                    <div className="card__author-name" id='title'>
                        Carol Houston
                    </div>
                    <div className="card__author-text">
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                    </div>
                    <div className="card__button">
                        <button className="btn" id='btn'>
                            + Follow
                        </button>
                    </div>
                </motion.div>      
            </div>
        </div>  
      </div>
      </>
    )
  }
}
