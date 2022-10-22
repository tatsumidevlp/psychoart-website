import React, { Component } from 'react'
import { motion } from 'framer-motion'
import '../styles/tape.scss'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'

const animation = {
  hidden:{
    y: 50,
    opacity: 0,
  },
  visible:{
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
}

export default class tape extends Component {
  render() {
    return (
      <>
      <div className="tape">
        <div className="container">
            <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={animation} className="tape__content">
                <img src={pic1} alt="Binance logo" />
                <img src={pic2} alt="Ethereum logo" />
                <img src={pic3} alt="Blockchain logo" />
            </motion.div>
        </div>
      </div>
      </>
    )
  }
}
