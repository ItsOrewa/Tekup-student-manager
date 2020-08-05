const jwt = require('jsonwebtoken');
process.env.SECRET_KEY = 'secret'

module.exports = (req, res, next) => {
  try {
    const token = req.headers.cookie.split(' ')[2].split('=')[1];
    if(token===undefined){
      res.render('landing_section/index.ejs');
      return;
    }
    const decoded = jwt.verify(token,process.env.SECRET_KEY)
    req.user = decoded;
    next();
  } catch (err) {
      //console.log(err);
    return res.render('landing_section/index.ejs');
  }
};