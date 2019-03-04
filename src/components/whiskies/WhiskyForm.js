import React from 'react'

const WhiskyForm = ({ data, distilleries, handleChange, handleDistilleryChange, handleSubmit }) => {

  const {  abv, age, cask, description, distillery, image, name, price } = data

  return(
    <form onSubmit={handleSubmit}>
      <h2 className="title">Add a Whisky</h2>

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
        <label className="label">Distillery</label>
        <div className="select">
          <select
            className="input"
            name="distillery"
            defaultValue={distillery.name || 'Please Choose...'}
            onChange={handleDistilleryChange}
          >
            <option disabled>Please Choose...</option>

            {distilleries.map(mappedDistillery => {
              return <option key={mappedDistillery.id} value={mappedDistillery.id}>
                {mappedDistillery.name}
              </option>
            })}

          </select>
        </div>
      </div>

      <div className="field">
        <label className="label">Age</label>
        <div className="control">
          <input
            className="input"
            name="age"
            placeholder="Optional"
            value={age}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Alcohol By Volume</label>
        <div className="control">
          <input
            className="input"
            name="abv"
            placeholder="Required"
            value={abv}
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
        <label className="label">Price</label>
        <div className="control">
          <input
            className="input"
            name="price"
            placeholder="Required"
            value={price}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Cask(s)</label>
        <div className="control">
          <input
            className="input"
            name="cask"
            placeholder="Optional"
            value={cask}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea
            className="textarea"
            name="description"
            placeholder="Required"
            value={description}
            onChange={handleChange}
          />
        </div>
      </div>

      <button className="button is-info">Submit</button>

    </form>
  )
}

export default WhiskyForm
