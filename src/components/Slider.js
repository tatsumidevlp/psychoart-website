import { motion } from 'framer-motion'
import React, { Component } from 'react'
import '../styles/slider.scss'
import pic from '../images/slider-pic.png'

const animation = {
  hidden:{
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.1},
  }),
}

const imgAnimation = {
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


export default class slider extends Component {
  render() {
    return (
      <>
      <div className="slider">
        <div className="container">
            <div className="slider__content">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="slider__item"
                >
                    <motion.div variants={animation} custom={1} className="slider__title" id='title'>
                        Create, Sell & <br /> Collect Your Own <br />  Creative NFT
                    </motion.div>
                    <motion.div variants={animation} custom={2} className="slider__text" id='text'>
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc vulputate libero et velit.
                    </motion.div>
                    <motion.div variants={animation} custom={3} className="slider__buttons">
                        <div className="button1">
                            <button className='btn1' id='btn'>Explore Now</button>
                        </div>
                        <div className="button2">
                            <button className="button2">Sell NFT</button>
                        </div>
                    </motion.div>
                    <motion.div variants={animation} custom={4} className="slider__tape">
                        <div className="slider-tape__element">
                          <div className="element__title">
                            37k+
                          </div>
                          <div className="element__text" id='text'>
                            Artworks
                          </div>
                        </div>
                        <div className="slider-tape__element">
                          <div className="element__title">
                            20k+
                          </div>
                          <div className="element__text" id='text'>
                            Artists
                          </div>
                        </div>
                        <div className="slider-tape__element">
                          <div className="element__title">
                            99k+
                          </div>
                          <div className="element__text" id='text'>
                            Aucations
                          </div>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div viewport={{ once: true }} initial='hidden' whileInView="visible" variants={imgAnimation} className="slider__item">
                  <div className="slider__image">
                    <img src={pic} alt="Slider picture" />
                  </div>
                </motion.div>
            </div>
        </div>
      </div>
      </>
    )
  }
}
