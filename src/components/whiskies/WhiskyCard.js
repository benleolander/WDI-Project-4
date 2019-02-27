import React from 'react'

const WhiskyCard = ({ name, image, price, distillery }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-header-title">{name}</h4>
      </div>

      <div className="card-image">
        <img
          src={image}
          alt={name}
        />
      </div>

      <div className="card-content">
        <div className="content">
          <p><strong>Origin:</strong> {distillery.name}, {distillery.country}</p>
          <p>£{price}</p>
        </div>
      </div>
    </div>
  )
}

export default WhiskyCard
