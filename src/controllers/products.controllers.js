const productservice=require('../services/products.services')
/*let finalproducts=async(req,res)=>{
    let data=await productservice.fetchproducts();
    res.json(data);
}
module.exports={finalproducts}*/
/* -------- ADD PRODUCT -------- */
const addproduct = async (req, res) => {
  try {
    await productservice.addproduct(req.body);
    res.status(201).json({ msg: "product added successfully" });
  } catch (err) {
    res.json({ msg: err.message });
  }
};

/* -------- GET ALL PRODUCTS -------- */
const getproducts = async (req, res) => {
  try {
    let data = await productservice.fetchproducts();
    res.json({ products: data });
  } catch (err) {
    res.json({ msg: err.message });
  }
};

/* -------- GET SINGLE PRODUCT -------- */
const getproduct = async (req, res) => {
  try {
    let data = await productservice.fetchproduct(req.params.id);
    res.json({ product: data });
  } catch (err) {
    res.json({ msg: err.message });
  }
};

/* -------- DELETE PRODUCT -------- */
const deleteproduct = async (req, res) => {
  try {
    await productservice.removeproduct(req.body.id);
    res.json({ msg: "product deleted successfully" });
  } catch (err) {
    res.json({ msg: err.message });
  }
};

/* -------- UPDATE PRODUCT -------- */
const updateproduct = async (req, res) => {
  try {
    const { id, ...data } = req.body;
    await productservice.modifyproduct(id, data);
    res.json({ msg: "product updated successfully" });
  } catch (err) {
    res.json({ msg: err.message });
  }
};

module.exports = {
  addproduct,
  getproducts,
  getproduct,
  deleteproduct,
  updateproduct
};
