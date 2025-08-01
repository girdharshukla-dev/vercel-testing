function dumbCookieSetter(req, res, next) {
  res.cookie('dumb_cookie', 'choco_chip', {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 1000, // 1 hour
  })
  console.log('[DUMB] Set dumb_cookie')
  next()
}

module.exports = {
    dumbCookieSetter
}
