import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <h1 className="title is-5" style={{paddingLeft: "5px"}}>Jack He</h1>
          </Link>
        </div>
        
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="https://github.com/projectsByJackHe" target="_blank"  style={{marginLeft: "5px"}}>
              <span className="icon fas fa-2x"><i className="fa fa-github"/></span>
            </a>
            <a className="navbar-item fas fa-2x" href="https://www.linkedin.com/in/jack-he-845587161/" target="_blank"  style={{marginLeft: "5px"}}>
              <span className="icon"><i className="fa fa-linkedin"/></span>
            </a>
            <span className="navbar-item">
              <a className="button is-success is-inverted" href="/assets/resume.pdf" target="_blank">
                <span className="icon"><i className="fa fa-id-card"/></span>
                <span style={{paddingLeft: "5px"}}>Résumé</span>
              </a>
            </span>
          </div>
        </div>

      </div>
    </nav>
  </div>
)

export default Header