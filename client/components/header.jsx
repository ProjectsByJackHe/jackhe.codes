import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="hero-head">
    <header className="nav">
      <div className="container">
        <div className="nav-left">
          <Link className="nav-item" to="/">
            <h1 className="title is-5" style={{paddingLeft: "5px"}}>Jack He</h1>
          </Link>
        </div>
        <div className="nav-right">
          <a className="nav-item" href="https://github.com/projectsByJackHe" target="_blank">
            <span className="icon"><i className="fa fa-github"/></span>
          </a>
          <a className="nav-item" href="https://www.linkedin.com/in/jack-he-845587161/" target="_blank">
            <span className="icon"><i className="fa fa-linkedin"/></span>
          </a>
          <span className="nav-item">
            <a className="button is-success is-inverted" href="/assets/resume.pdf" target="_blank">
              <span className="icon"><i className="fa fa-id-card"/></span>
              <span style={{paddingLeft: "5px"}}>Résumé</span>
            </a>
          </span>
        </div>
      </div>
    </header>
  </div>
)

export default Header