import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function TargyReszlet() {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    if (!id) return
    fetch(`http://192.168.50.49:3005/items/${id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data.data ?? data)
      })
      .catch(() => setItem(null))
  }, [id])

  return (
    <div>
      <h1>{item.name ?? item.title}</h1>
      <p>ID: {item.id}</p>
      <p>Price: {item.price}</p>
      <Link to="/">Vissza</Link>
    </div>
  )
}
