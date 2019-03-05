import React from 'react'
import ReactFileStack from 'filestack-react'

const DistilleryForm = ({ data, errors, handleChange, handleSubmit }) => {

  const { name, founded, town, country } = data

  return(
    <form onSubmit={handleSubmit}>

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
          <ReactFileStack
            apikey={process.env.FILESTACK_KEY}
            mode={'pick'}
            onSuccess={(res) => handleChange({
              target: {
                name: 'image',
                value: res.filesUploaded[0].url
              }})}
            onError={(err) => console.error(err)}
            buttonText={'Add/Upload Image'}
            buttonClass={'filestack-btn button is-primary'}
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
