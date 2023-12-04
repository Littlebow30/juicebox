function requireUser(req, res, next) {
  if(!req.user) {
    next({
      name: 'not a user',
      message: 'Please log in!'
    })
  }

  next();
}

module.exports = {
  requireUser
}