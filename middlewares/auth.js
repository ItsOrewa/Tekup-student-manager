const jwt = require('jsonwebtoken');
process.env.SECRET_KEY = 'secret'


module.exports = (req, res, next) => {
  try {
    
    const cookies = req.headers.cookie.split(' ')
    var token = ""
    for(let i = 0;i<cookies.length;i++){
      var wa = cookies[i].split('=');
      if(wa[0] === 'token'){
        token = wa[1];
      }
    }
    console.log(token);
    const decoded = jwt.verify(token,process.env.SECRET_KEY)
    
    req.user = decoded;
    next();
  } catch (err) {
      //console.log(err);
    return res.render('landing_section/index.ejs');
  }
};