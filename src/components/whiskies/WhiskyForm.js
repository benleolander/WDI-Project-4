import React from 'react'

const WhiskyForm = ({ data, errors, distilleries, handleChange, handleDistilleryChange, handleSubmit }) => {

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
          {errors.name && <small className="help is-danger">{errors.name}</small>}
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
          {errors.age && <small className="help is-danger">{errors.age}</small>}
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
          {errors.abv && <small className="help is-danger">{errors.abv}</small>}
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
        <label className="label">Price</label>
        <div className="control">
          <input
            className="input"
            name="price"
            placeholder="Required"
            value={price}
            onChange={handleChange}
          />
          {errors.price && <small className="help is-danger">{errors.price}</small>}
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
          {errors.cask && <small className="help is-danger">{errors.cask}</small>}
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
          {errors.description && <small className="help is-danger">{errors.description}</small>}
        </div>
      </div>

      <button className="button is-info">Submit</button>

    </form>
  )
}

export default WhiskyForm
