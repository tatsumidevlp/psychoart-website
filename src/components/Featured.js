import React, { Component } from 'react'
import { motion } from 'framer-motion'
import '../styles/featured.scss'
import '../styles/collection.scss'
import cardimg1 from '../images/cardimg1.png'
import cardimg2 from '../images/cardimg2.png'
import cardimg3 from '../images/cardimg3.png'



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

export default class Featured extends Component {
  render() {
    return (
      <>
      <div className="featured">
        <div className="container">
            <motion.div  viewport={{ once: true }} initial='hidden' whileInView='visible' variants={animation} custom={1} className="featured__title" id='title'>
                Featured Artworks
            </motion.div>
            <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={animation} custom={2} className="featured__subtitle" id='text'>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            </motion.div>
                <div className="cards">
                    <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={imgAnimation} custom={3}  className="card">
                        <div className="card__image">
                            <img src={cardimg1} alt="Card Image" />
                        </div>
                        <div className="card__info">
                            <div className="card__firstpart">
                                <div className="card__author">
                                    @Johny
                                </div>
                                <div className="card__name" id='title'>
                                    Yellow Painting
                                </div>
                            </div>
                            <div className="card__secondpart">
                                <div className="card__bid">
                                    Current Bid
                                </div>
                                <div className="card__bid-amount">
                                    0.005 ETH
                                </div>
                            </div>
                        </div>
                        <div className="card__button">
                            <button className="btn" id='btn'>
                                Place a bid
                            </button>
                        </div>
                    </motion.div>
                    <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={imgAnimationSpecial} custom={3}  className="card">
                        <div className="card__image">
                            <img src={cardimg2} alt="Card Image" />
                        </div>
                        <div className="card__info">
                            <div className="card__firstpart">
                                <div className="card__author">
                                    @Johny
                                </div>
                                <div className="card__name" id='title'>
                                    Yellow Painting
                                </div>
                            </div>
                            <div className="card__secondpart">
                                <div className="card__bid">
                                    Current Bid
                                </div>
                                <div className="card__bid-amount">
                                    0.005 ETH
                                </div>
                            </div>
                        </div>
                        <div className="card__button">
                            <button className="btn" id='btn'>
                                Place a bid
                            </button>
                        </div>
                    </motion.div>
                    <motion.div  viewport={{ once: true }} initial='hidden' whileInView='visible' variants={imgAnimationReverse} custom={3} className="card" id='special-card'>
                        <div className="card__image">
                            <img src={cardimg3} alt="Card Image" />
                        </div>
                        <div className="card__info">
                            <div className="card__firstpart">
                                <div className="card__author">
                                    @Johny
                                </div>
                                <div className="card__name" id='title'>
                                    Yellow Painting
                                </div>
                            </div>
                            <div className="card__secondpart">
                                <div className="card__bid">
                                    Current Bid
                                </div>
                                <div className="card__bid-amount">
                                    0.005 ETH
                                </div>
                            </div>
                        </div>
                        <div className="card__button">
                            <button className="btn" id='btn'>
                                Place a bid
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
