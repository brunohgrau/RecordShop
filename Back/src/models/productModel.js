import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

const productSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,

    ref: "User"
  },

  artistName: {
    type: String,
    required: true
  },

  imageUrl: {
    type: String
  },
  recordName: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  count: {
    type: Number,
    required: true,
    default: 0
  },
  track1: { type: String },
  track2: { type: String }
});

const Product = mongoose.model("Products", productSchema);

export default Product;
