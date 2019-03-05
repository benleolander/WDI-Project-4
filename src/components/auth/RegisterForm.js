import React from 'react'

const RegisterForm = ({ data, errors, handleChange, handleSubmit }) => {

  const { username, email, password, password_confirmation } = data // eslint-disable-line

  return(
    <form onSubmit={handleSubmit}>
      <h2 className="title">Register</h2>

      <div className="field">
        <label className="label">Username</label>
        <div className="control">
          <input
            className="input"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />
          {errors.username && <small className="help is-danger">{errors.username}</small>}
        </div>
      </div>

      <div className="field">
        <label className="label">Email Address</label>
        <div className="control">
          <input
            className="input"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          {errors.email && <small className="help is-danger">{errors.email}</small>}
        </div>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            className="input"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          {errors.password && <small className="help is-danger">{errors.password}</small>}
          {errors.password_confirmation && <small className="help is-danger">{errors.password_confirmation}</small>}
        </div>
      </div>

      <div className="field">
        <label className="label">Password Confirmation</label>
        <div className="control">
          <input
            className="input"
            name="password_confirmation"
            type="password"
            placeholder="Type your password again"
            value={password_confirmation} // eslint-disable-line
            onChange={handleChange}
          />
          {errors.password_confirmation && <small className="help is-danger">{errors.password_confirmation}</small>}
        </div>
      </div>

      <button className="button is-info">Submit</button>

    </form>
  )
}

export default RegisterForm
