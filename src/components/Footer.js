import React, { Component } from 'react'
import '../styles/footer.scss'
import yt from '../images/youtube.png'
import ds from '../images/discord.png'
import inst from '../images/instagram.png'

export default class Footer extends Component {
  render() {
    return (
      <>
      <footer>
        <div className="container">
            <div className="footer__content">   
                <div className="footer__logo">
                    <span className='logo-part__1'>Psycho</span><span className='logo-part__2'>Art</span>
                    <div className="footer__text">
                    The best NFT marketplace website in <br /> the world and feel your experience in <br /> selling or buy our work
                    </div>
                </div>
                <div className="footer__columns">
                    <div className="column">
                        <div className="column__title">
                            About
                        </div>
                        <div className="column__text">
                            <a href="/">Product</a>
                            <a href="/">Resource</a>
                            <a href="/">Term & Condition</a> 
                            <a href="/">FAQ</a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="column__title">
                            Company
                        </div>
                        <div className="column__text">
                            <a href="/">Our Team</a>
                            <a href="/">Partner With Us</a>
                            <a href="/">Privacy & Policy</a> 
                            <a href="/">Features</a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="column__title">
                            Contact
                        </div>
                        <div className="column__text">
                            <a href="/">+012 3456789</a>
                            <a href="/">adorableprogrammer@gmail.com</a>
                            <a href="/" className="icon"><img src={yt} alt="" /><img src={ds} alt="" /><img src={inst} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </footer>
      </>
    )
  }
}
