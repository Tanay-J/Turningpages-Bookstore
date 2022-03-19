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
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/fiction" element={<Products category='Fiction'/>}></Route>
        <Route path="/products/nonfiction" element={<Products category='Non-Fiction'/>}></Route>
        <Route path="/products/selfhelp" element={<Products category='Self-Help'/>}></Route>
        <Route path="/products/boxset" element={<Products category='Box-set'/>}></Route>
        <Route path="/products/justin" element={<Products category='Just In'/>}></Route>
        <Route path="/products/popular" element={<Products category='Popular'/>}></Route>
      </Routes>
    </>
  );
}
export default App;
