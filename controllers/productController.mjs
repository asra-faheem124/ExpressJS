import Product from "../models/productModel.mjs";

// accessing all products from dummy data file
let allProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ message: "All Products: ", allProducts: products });
};

// accessing products by id from dummy data file
let productById = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);

  if (!product) {
    res.status(404).json({ message: "No Product Found!" });
  } else {
    res.status(200).json({ message: "Product Found: ", productById: product });
  }
};

// adding product
let addProduct = async (req, res) => {
  try {
    let {
      title,
      description,
      price,
      discount,
      rating,
      stock,
      brand,
      category,
      images,
    } = req.body;
    if (title && price && brand && category) {
      let newProduct = new Product({
        title,
        description,
        price,
        discount,
        rating,
        stock,
        brand,
        category,
        images,
      });

      let addProd = await newProduct.save();

      if (addProd) {
        res.status(200).json({
          message: "Product added successfully!",
          addedProduct: addProd,
        });
      } else {
        res.status(500).json({
          message: "Failed to add product. ",
        });
      }
    } else {
      res.status(400).json({ message: "Product details are required to add the product." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Internal server error: ${error}` });
  }
};

// updating product
let updateProduct = (req, res) => {
  try {
    const id = req.params.id;
    let product = req.body;
    if (product && id) {
      let prodIndex = 0;
      let checkProduct = products.find((item, index) => {
        if (item.id == id) {
          prodIndex = index;
          return item;
        }
      });
      if (checkProduct) {
        products[prodIndex] = product;
        res
          .status(200)
          .json({
            message: "Product updated successfully.",
            updatedProduct: product,
          });
      } else {
        res.status(404).json({ message: "Product not found." });
      }
    } else {
      res
        .status(404)
        .json({
          message: "Product details are required to update the product.",
        });
    }
  } catch (error) {
    res.status(404).json({ message: `Internal Server Error: ${error}` });
  }
};

// deleting product
let deleteProduct = (req, res) => {
  try {
    let id = req.params.id;
    if (!isNaN(id)) {
      products = products.filter((item, index) => {
        return item.id != id;
      });
      res.json({ message: "Product deleted successfully!" });
    } else {
      res.json({ message: "Invalid Product Id." });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: `Internal server error: ${error}` });
  }
};

let productController = {
  allProducts,
  productById,
  addProduct,
  updateProduct,
  deleteProduct,
};

export default productController;
