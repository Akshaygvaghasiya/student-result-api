var express = require('express');
var router = express.Router();

var user = require('../usercontroller/usercontroller');
/* GET home page. */
router.post('/insert',user.insert )
router.get('/',user.select_data )
router.get('/delete/:id',user.delete )
router.post('/update/:id',user.update);
router.get('/five',user.five);
router.get('/ten',user.ten);

module.exports = router;
