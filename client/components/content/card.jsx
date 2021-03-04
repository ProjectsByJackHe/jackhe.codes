import React from 'react'

const Card = ({ Image = [{url: "http://bulma.io/images/placeholders/64x64.png"}], Affiliation, Role, Team, Skills = [], Link, Location, Description, Current, relevantLinks }) => { 
	
let links = relevantLinks ? relevantLinks.split("∫").map(link => link.split("∆")) : null

	return (
		<div className="box">
		  <article className="media">
		    <div className="media-left">
		      <figure className="image is-64x64">
		      	<img alt={Affiliation} src={Image[0].url} />
		      </figure>
		    </div>
		    <div className="media-content">
		      <div className="content">
		        <span>
		        	<strong className="title is-4">
		        		<a href={Link} target="_blank">{Affiliation}</a>
		        	</strong>
		        	<small style={{paddingLeft: "4px", marginRight: "8px"}}>
		        		{Location ? "in " + Location : ""}
		        	</small>
		        	{Current ? <span className="tag is-primary">Current</span> : ""}
		        </span>
		        <p style={{paddingBottom: "10px"}}>
				  {Role && Team &&
				  	<div>
						<span className="subtitle is-6">{Role}, {Team}</span>
						<br />
					</div>
				  }
		          {Skills.map(skill => <span key={skill} className="tag is-info" style={{marginRight: "2px"}}> {skill} </span>)}
		        </p>
		        {Description}
		        {links ? <ul style={{margin: 0}}>
		        	<h5 style={{display: "inline-block", margin: "8px 5px 0 0"}}>Relevant Links:</h5>

		        	{links.map((link, index) => (
		        		<li style={{display: "inline-block"}} key={link[0]}>
		        			<a href={link[1]} target="_blank">{link[0]}</a>
		        			{(index + 1) !== links.length ? <span><i style={{fontSize: "8px", margin: "8px 8px 0 8px"}} className="fa fa-circle"/></span> : ""}
		        		</li>
		        	))}
		        </ul> : ""}
		      </div>
		    </div>
		  </article>
		</div>
	)
}

export default Card