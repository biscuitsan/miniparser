module.exports = () => {
  return (req, res, next) => {
    var data = ''
    req.on('data', chunk => {
      data += chunk
    });
    req.on('end', () => {
      req.rawBody = data
      if ( data && data.indexOf( '{' ) > -1 ) {
        try {
          req.body = JSON.parse(data)
        } catch (error) {
          req.body = {}
        }
      }
      next()
    })
  }
}