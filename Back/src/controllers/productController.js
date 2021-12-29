import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//@desc Fetch all products
//@route GET api/products
//@access Public

const getProducts = asyncHandler(async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const keyword = req.query.keyword
    ? {
        artistName: {
          $regex: req.query.keyword,
          $options: "i"
        }
      }
    : {};
  const products = await Product.find({ ...keyword });
  /*  throw new Error("some error"); */
  res.json(products);
});

//@desc Fetch single product
//@route GET api/products/:id
//@access Public

const getProductById = asyncHandler(async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin

const createProduct = asyncHandler(async (req, res) => {
  const {
    artistName,
    price,
    recordName,
    imageUrl,
    count,
    label,
    track1,
    track2
  } = req.body;

  const product = new Product({
    artistName: artistName,
    price: price,
    recordName: recordName,
    imageUrl: imageUrl,
    count: count,
    label: label,
    track1: track1,
    track2: track2
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin

const updateProduct = asyncHandler(async (req, res) => {
  const {
    artistName,
    price,
    recordName,
    imageUrl,
    count,
    label,
    track1,
    track2
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.artistName = artistName;
    product.price = price;
    product.recordName = recordName;
    product.imageUrl = imageUrl;
    product.count = count;
    product.label = label;
    product.track1 = track1;
    product.track2 = track2;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct
  // createProductReview,
  // getTopProducts
};
