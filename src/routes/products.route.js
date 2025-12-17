const finalproducts=require('../controllers/products.controllers')
let router=require('express').Router()
// router.get('/product',finalproducts)
// module.exports=router

router.post("/products", finalproducts.addproduct);
router.get("/products", finalproducts.getproducts);
router.get("/products/:id", finalproducts.getproduct);
router.delete("/products", finalproducts.deleteproduct);
router.put("/products", finalproducts.updateproduct);

module.exports = router;
