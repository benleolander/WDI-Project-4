function errorHandling(err, req, res, next){
  console.log(err)
  if(err.name === 'ValidationError'){
    const errors = {}
    for (const key in err.errors){
      const shortKey = key.split('.').reverse()[0]
      errors[shortKey] = err.errors[key].message
    }
    return res.status(422).json(errors)
  }
  res.status(500).json(err.message)
  next(err)
}

module.exports = errorHandling
