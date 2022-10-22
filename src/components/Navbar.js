import React, { Component } from 'react'
import '../styles/navbar.scss'
import logo from '../images/logo.png'
import search from '../images/search.png'

export default class navbar extends Component {
  render() {
    return (
      <>
      <nav className="navbar">
        <div className="container">
            <div className="navbar__logo" id='logotype'>
                <span className='logo-part__1'>Psycho</span><span className='logo-part__2'>Art</span>
            </div>
            <ul className="navbar__menu">
                <div className="navbar-menu__input">
                    <img src={search} alt="" />
                    <input id='icon' type="text" className='navbar__input' placeholder='Search items and collections' /> 
                </div>
                <li className="navbar-menu__link"><a href="/" className="link">Collections</a></li>
                <li className="navbar-menu__link"><a href="/" className="link">Feature</a></li>
                <li className="navbar-menu__link"><a href="/" className="link">FAQ</a></li>
                <div className="navbar-menu__btn">
                    <button className="btn" id='btn'>Select Wallet</button>
                </div>
            </ul>
        </div>
      </nav>
      </>
    )
  }
}
