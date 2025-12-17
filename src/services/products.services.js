const productrepo=require('../repository/products.repo')
// const fetchproducts=()=>{
//     return productrepo.getallproducts()
// }
// module.exports={fetchproducts}

exports.addproduct = (data) => productrepo.createproduct(data);
exports.fetchproducts = () => productrepo.getallproducts();
exports.fetchproduct = (id) => productrepo.getproductbyid(id);
exports.removeproduct = (id) => productrepo.deletpProduct(id);
exports.modifyproduct = (id, data) => productrepo.updateproduct(id, data);
