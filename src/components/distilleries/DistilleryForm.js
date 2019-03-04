import React from 'react'

const DistilleryForm = ({ data, handleChange, handleSubmit }) => {

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
        </div>
      </div>

      <button className="button is-info">Submit</button>

    </form>
  )
}

export default DistilleryForm
