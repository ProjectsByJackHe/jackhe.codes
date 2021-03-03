import React from 'react'
import { Link } from 'react-router-dom'

const Tabs = ({ routes, location, topTab = true, isSmall = false }) => (
  <div className={`tabs is-toggle is-centered`}>
    <ul>{routes.map(route => (
      <li className={route.path == location.pathname ? "is-active" : ""} key={route.path}>
        <Link to={route.path}>
          <span className="icon is-small">
            <i className={`fa fa-${route.icon}`}/>
          </span>
          {isSmall ? "" : <span>{route.name}</span>}
        </Link>
      </li>
    ))}</ul>
  </div>
)

export default Tabs