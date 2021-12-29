import { Route, Routes } from "react-router-dom";
import HomeScreen from "./App/HomeScreen";
import ProductScreen from "./App/ProductScreen";
import Header from "./Components/Header/Header";
import CartScreen from "./App/CartScreen";
import LoginScreen from "./App/LoginScreen";
import RegisterScreen from "./App/RegisterScreen";
import ProfileScreen from "./App/ProfileScreen";
import ShippingScreen from "./App/ShippingScreen";
import PaymentScreen from "./App/PaymentScreen";
import PlaceOrderScreen from "./App/PlaceOrderScreen";
import OrderScreen from "./App/OrderScreen";
import UserListScreen from "./App/UserListScreen";
import ProductListScreen from "./App/ProductListScreen";
import ProductEditScreen from "./App/ProductEditScreen";
import CreateProductScreen from "./App/CreateProductScreen";

import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div className="font-mono">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/cart/:id" element={<CartScreen />} />
        <Route exact path="/signin" element={<LoginScreen />} />
        <Route exact path="/signup" element={<RegisterScreen />} />
        <Route exact path="/profile" element={<ProfileScreen />} />
        <Route exact path="/shipping" element={<ShippingScreen />} />
        <Route exact path="/payment" element={<PaymentScreen />} />
        <Route exact path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/admin/userlist" element={<UserListScreen />} />
        <Route path="/admin/productlist" element={<ProductListScreen />} />
        <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} />
        <Route path="/admin/createproduct" element={<CreateProductScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}
