const express = require('express');
const router = express.Router();
const axios = require('axios');
const multer = require('multer');
const upload = multer();
const validation = require('./schemaServerValid.js');
const Ajv = require("ajv");
const ajv = new Ajv();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('main', { title: 'Express' });
});


router.post('/main', upload.none(),  (req, res) => {
    console.log(req.body)
  
  const { body } = req;
  
  const validate = ajv.compile(validation.schema);
  const valid = validate(body);

  if (!valid) {
    res.json({
      status: 'invalid data',
      payload: {
        error: validate.errors
      }
    });
   //return; 
  }  else if (valid) { res.json({status:  'ok'}); 
}

});


module.exports = router;
