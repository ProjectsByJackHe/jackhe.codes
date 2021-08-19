import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import axios from 'axios'

import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Content from './components/content.jsx'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      misc: {}, 
      resume: {}
    }
  }

  componentDidMount() {
    axios.get("/api/experiences")
    .then(({ data }) => this.setState({ list: data }))

    axios.get("/api/miscellaneous")
    .then(({ data }) => this.setState({ misc: data }))
    
    axios.get("/api/resume")
    .then(({ data }) => this.setState({ resume: data }))   
  }

  render() {
    let routes = [
      { path: "/",            name: "Experience",   icon: "image"},
      { path: "/projects",    name: "Projects",     icon: "laptop"},
      { path: "/teaching",    name: "Teaching",     icon: "book"},
      { path: "/fun",         name: "For Fun",      icon: "dribbble"}
    ]

    let { list, misc, resume } = this.state

    return (
      <Router>
        <section className="hero is-fullheight">
          <Header resume = {resume}/>
          <div id="main-body" className="hero-body">
            <div className="container has-text-centered">
              <Route component={(props) => <Content routes={routes} list={list} misc={misc} {...props}/>}/>
            </div>
          </div>
          <Footer resume = {resume} />
        </section>
      </Router>
    )
  }
}

render(<Index />, document.getElementById('app'))