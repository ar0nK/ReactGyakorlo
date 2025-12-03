import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ item }) {
  return (
    <div className="card col-md-4" style={{width: "18rem"}}>
      <h3 className="card-title">{item.name}</h3>
      <p className="card-text">{item.price}</p>
      <Link className="btn btn-primary" to={`/reszletek/${item.id}`}>Részletek</Link>
    </div>
  )
}
