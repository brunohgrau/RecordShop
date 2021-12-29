import express from "express";
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser
} from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(registerUser).get(getUsers);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(deleteUser)
  .get(getUserById)
  .put(protect, admin, updateUser);

export default router;
