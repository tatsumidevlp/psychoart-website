import React, { Component } from 'react'
import '../styles/banner.scss'
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

export default class Banner extends Component {
  render() {
    return (
      <>
        <div className="container">
            <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={animation} custom={1}  className="banner">
            <div className="banner__title" id='title'>
                Get ready to collect <br />our NFT
            </div>
            <div className="banner__button">
                <button className="banner__btn">Get Started</button>
            </div>
        </motion.div>
      </div>
      </>
    )
  }
}
