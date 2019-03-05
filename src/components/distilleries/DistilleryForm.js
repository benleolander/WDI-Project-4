import React from 'react'

const DistilleryForm = ({ data, errors, handleChange, handleSubmit }) => {

  const { name, image, founded, town, country } = data

  return(
    <form onSubmit={handleSubmit}>
      <h2 className="title">Add a Distillery</h2>

      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            name="name"
            placeholder="Required"
            value={name}
            onChange={handleChange}
          />
          {errors.name && <small className="help is-danger">{errors.name}</small>}
        </div>
      </div>

      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            name="image"
            placeholder="Required"
            value={image}
            onChange={handleChange}
          />
          {errors.image && <small className="help is-danger">{errors.image}</small>}
        </div>
      </div>

      <div className="field">
        <label className="label">Founded</label>
        <div className="control">
          <input
            className="input"
            name="founded"
            placeholder="Required"
            value={founded}
            onChange={handleChange}
          />
          {errors.founded && <small className="help is-danger">{errors.founded}</small>}
        </div>
      </div>

      <div className="field">
        <label className="label">Town</label>
        <div className="control">
          <input
            className="input"
            name="town"
            placeholder="Required"
            value={town}
            onChange={handleChange}
          />
          {errors.town && <small className="help is-danger">{errors.town}</small>}
        </div>
      </div>

      <div className="field">
        <label className="label">Country</label>
        <div className="control">
          <input
            className="input"
            name="country"
            placeholder="Required"
            value={country}
            onChange={handleChange}
          />
          {errors.country && <small className="help is-danger">{errors.country}</small>}
        </div>
      </div>

      <button className="button is-info">Submit</button>

    </form>
  )
}

export default DistilleryForm
