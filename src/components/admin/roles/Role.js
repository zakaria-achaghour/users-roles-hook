import React from 'react'
import { Link } from 'react-router-dom'

function Role(props) {
    return (
        <div className="card mb-2" style={cardWidth}>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
        
          <Link to="#" className="btn btn-primary">Show Users</Link>
        </div>
      </div>
    )
}

export default Role
const cardWidth = { width: 250 };