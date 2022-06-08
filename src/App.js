import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { MockAPI } from "./components";
import {
  Cart,
  Categories,
  Checkout,
  Homepage,
  Login,
  OrderUpdate,
  Products,
  Signup,
  SingleProduct,
  Wishlist,
} from "./pages";
import { RequiresAuth } from "./utils/auth/RequiresAuth";
import { ScrollToTop } from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            style: {
              background: "#4fb50b",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "#b5270b",
              color: "#fff",
            },
          },
        }}
      />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
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
        <Route
          path="/orderupdate"
          element={
            <RequiresAuth>
              <OrderUpdate />
            </RequiresAuth>
          }
        />
        <Route path="/mock-api" element={<MockAPI />} />
      </Routes>
    </>
  );
}
export default App;
