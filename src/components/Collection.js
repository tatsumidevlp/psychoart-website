import React, { Component } from 'react'
import { motion } from 'framer-motion'
import '../styles/collection.scss'
import cardimg1 from '../images/cardimg1.png'
import cardimg2 from '../images/cardimg2.png'
import cardimg3 from '../images/cardimg3.png'
import cardimg4 from '../images/cardimg4.png'
import cardimg5 from '../images/cardimg5.png'
import cardimg6 from '../images/cardimg6.png'
import cardimg7 from '../images/cardimg7.png'
import cardimg8 from '../images/cardimg8.png'
import cardimg9 from '../images/cardimg9.png'



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

export default class collection extends Component {
  render() {
    return (
      <>
      <div className="collection">
        <div className="container">
            <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={animation} custom={1} className="collection__title" id='title'>
                Collection
            </motion.div>
            <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={animation} custom={2} className="collection__subtitle" id='text'>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            </motion.div>
            <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={animation} custom={2} className="collection__buttons">
                <button className="btn1" id='inactive__button'>Art</button>
                <button className="btn2" id='btn'>Sport</button>
                <button className="btn3" id='inactive__button'>Photography</button>
                <button className="btn4" id='inactive__button'>Pattern</button>
            </motion.div>
            <div  className="collection__cards">
                <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={imgAnimation} custom={3} className="column">
                    <div className="card">
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
                    </div>
                    <div  className="card">
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
                    </div>
                    <div className="card">
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
                    </div>
                </motion.div>
                <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={imgAnimationSpecial} custom={2} className="column">
                    <div  className="card">
                        <div className="card__image">
                            <img src={cardimg4} alt="Card Image" />
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
                    </div>
                    <div  className="card" id='special-card'>
                        <div className="card__image">
                            <img src={cardimg5} alt="Card Image" />
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
                    </div>
                    <div className="card">
                        <div className="card__image">
                            <img src={cardimg6} alt="Card Image" />
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
                    </div>
                </motion.div>
                <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={imgAnimationReverse} custom={5} className="column">
                    <div className="card">
                        <div className="card__image">
                            <img src={cardimg7} alt="Card Image" />
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
                    </div>
                    <div className="card">
                        <div className="card__image">
                            <img src={cardimg8} alt="Card Image" />
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
                    </div>
                    <div className="card">
                        <div className="card__image">
                            <img src={cardimg9} alt="Card Image" />
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
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
      </>
    )
  }
}
