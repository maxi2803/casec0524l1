import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Home from "./pages/user/Home";
import ListHotPro from "./pages/user/product/ListHotPro";
import DetailPro from "./pages/user/product/DetailPro";
import ListCategory from "./pages/user/category/ListCategory";
import User from "./pages/user/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="admin" element={<Admin />}></Route>
        <Route path="user" element={<Home />}>
          <Route path="" element={<User />}></Route>
          <Route path="hot-product" element={<ListHotPro />}></Route>
          <Route path="detail-product" element={<DetailPro />}></Route>
          <Route path="category" element={<ListCategory />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
