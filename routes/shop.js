const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');
//const adminData = require('./admin');

const router = express.Router();
const  shopcontroller=require('../controller/product')
router.get('/',shopcontroller.getallproduct);

module.exports = router;
