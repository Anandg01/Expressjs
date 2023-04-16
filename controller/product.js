
const product=require('../models/product');

exports.getproduct =(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }
//const products=[];
  exports.postproduct=(req, res, next) => {
    const item=new product(req.body.title)
   // products.push({ title: req.body.title });
   item.savedata();
    res.redirect('/');
  }

exports.getallproduct=(req, res, next) => {
    product.fetchall((products)=>{
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

}