//let productmodel=require('../models/products.model')
// const getallproducts=()=>{
//     return productmodel.find()
// }
//the purpose of repository is  to run our crud opertions
exports.getallproducts = () => Product.find();
exports.createproduct = (data) => Product.create(data);
exports.getproductbyid = (id) => Product.findById(id);
exports.deleteproduct = (id) => Product.findByIdAndDelete(id);
exports.updateproduct = (id, data) =>
  Product.findByIdAndUpdate(id, data, { new: true });
