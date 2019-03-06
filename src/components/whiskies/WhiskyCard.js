import React from 'react'

const WhiskyCard = ({ name, image, price, distillery, id }) => {
  return (
    <div className="card whisky-card" id={id}>
      <div className="card-header">
        <h4 className="card-header-title">{name}</h4>
      </div>

      <div className="card-image">
        <figure className="image is-3by4">
          <img
            src={image}
            alt={name}
          />
        </figure>
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
