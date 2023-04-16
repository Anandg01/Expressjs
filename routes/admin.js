
const express = require('express');

const router = express.Router();

const productcontroler=require('../controller/product');
// /admin/add-product => GET
router.get('/add-product',productcontroler.getproduct);

// /admin/add-product => POST
router.post('/add-product',productcontroler.postproduct);

exports.routes = router;
