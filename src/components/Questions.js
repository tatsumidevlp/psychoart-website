import React, { Component } from 'react'
import { motion } from 'framer-motion'
import '../styles/questions.scss'


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

export default class Questions extends Component {
  render() {
    return (
      <>
      <div className="questions">
            <div className="container">
                <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={animation} custom={1}  className="questions__title" id='title'>
                    Freaquently Asked <br />
                    Question
                </motion.div>
                <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={animation} custom={2}  className="questions__subtitle" id='text'>
                    Wanna Ask Something?
                </motion.div>
                <motion.div viewport={{ once: true }} initial='hidden' whileInView='visible' variants={animation} custom={3}  className="questions__fields">
                    <div className="column">
                        <div className="field">
                            <input type="text" id='name' className='question-input' placeholder='What is the name of the website hosting ?' />
                        </div>
                        <div className="field">
                            <input type="text" id='name' className='question-input' placeholder='Who is the website designer ?' />
                        </div>
                        <div className="field">
                            <input type="text" id='name' className='question-input' placeholder='How to cook noodles ?' />
                        </div>
                    </div>
                    <div className="column">
                    <div className="field">
                            <input type="text" id='name' className='question-input' placeholder='Where to buy NFT ?' />
                        </div>
                        <div className="field">
                            <input type="text" id='name' className='question-input' placeholder='How to make money on NFT ?' />
                        </div>
                        <div className="field">
                            <input type="text" id='name' className='question-input' placeholder='Who is the best designer of NFT ?' />
                        </div>
                    </div>
                </motion.div>
            </div>
      </div>
      </>
    )
  }
}
