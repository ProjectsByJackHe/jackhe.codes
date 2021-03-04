import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>If you're bored, check out the <a href="/api">API for this website</a>.</p>
        <div className="container">
          <a className="icon fas fa-lg" href="https://github.com/projectsByJackHe" target="_blank">
            <i className="fa fa-github"/>
          </a>
          <a style={{margin: "0 15px"}} className="icon fas fa-lg" href="/assets/resume.pdf">
            <i className="fa fa-id-card"/>
          </a>
          <a className="icon fas fa-lg" href="https://www.linkedin.com/in/jack-he-845587161/" target="_blank">
            <i className="fa fa-linkedin"/>
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer