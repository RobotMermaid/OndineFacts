const {facts} = require('../models');

const getFacts = (res, req, next)=> {
  req.json(
      'Ondine is an excellent person to have on your team.'
    );
}
// const getFacts = (res, req, next)=> {
//   req.json(facts);
// }

module.exports = {
  getFacts
}
