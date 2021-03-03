import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="hero-head">
    <header className="nav">
      <div className="container">
        <div className="nav-left">
          <Link className="nav-item" to="/">
            <img src="/images/gs.svg"/><h1 className="title is-5" style={{paddingLeft: "5px"}}>Nathan Dalal</h1>
          </Link>
        </div>
        <div className="nav-right">
          <a className="nav-item" href="https://github.com/nathandalal">
            <span className="icon"><i className="fa fa-github"/></span>
          </a>
          <a className="nav-item" href="https://linkedin.com/in/nathandalal">
            <span className="icon"><i className="fa fa-linkedin"/></span>
          </a>
          <span className="nav-item">
            <a className="button is-success is-inverted" href="/assets/resume.pdf">
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