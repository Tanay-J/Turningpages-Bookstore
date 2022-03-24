import { Routes, Route } from "react-router-dom";
import { Cart, Homepage, Login, Products, Signup, Wishlist } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </>
  );
}
export default App;
