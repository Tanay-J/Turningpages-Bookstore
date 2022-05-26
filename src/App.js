import { Routes, Route } from "react-router-dom";
import { MockAPI } from "./components";
import {
  Cart,
  Checkout,
  Homepage,
  Login,
  Products,
  Signup,
  SingleProduct,
  Wishlist,
} from "./pages";
import { RequiresAuth } from "./utils/auth/RequiresAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:productId" element={<SingleProduct />}></Route>
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequiresAuth>
              <Checkout />
            </RequiresAuth>
          }
        />
        <Route path="/mock-api" element={<MockAPI />} />
      </Routes>
    </>
  );
}
export default App;
