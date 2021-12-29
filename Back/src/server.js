import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/productModel.js";
import asyncHandler from "express-async-handler";
import User from "./models/userModel.js";
import generateToken from "./utils/generateToken.js";
import { protect, admin } from "./middlewares/authMiddleware.js";
import cors from "cors";
import Order from "./models/orderModel.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config({ path: "src/.env" });
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

/* Routes  */

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Order Routes

// @desc    Cretae New Order
// @route   POST /api/orders
// @access  Private

app.post(
  "/api/orders",
  protect,
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No order items");
      return;
    } else {
      const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        totalPrice
      });

      const createdOrder = await order.save();

      res.status(201).json(createdOrder);
    }
  })
);

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private

app.get(
  "/api/orders/:id",
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error("Order not found");
    }
  })
);

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private

app.get(
  "/api/orders/:id/pay",
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      const updatedOrder = await order.save();

      res.json(updatedOrder);
    } else {
      res.status(404);
      throw new Error("Order not found");
    }
  })
);

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin

app.get(
  "/api/users",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
  })
);

/* Middleware  */

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
