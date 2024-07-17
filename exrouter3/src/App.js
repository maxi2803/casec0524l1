import logo from './logo.svg';
import './App.css';
import Logo from "./components/Logo";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Left from "./components/Left";
import Right from "./components/Right";
import {Route, Routes} from "react-router-dom";
import Mid from "./pages/Mid";
import DetailCart from "./pages/DetailCart";
import Home from "./pages/Home";
import DetailPro from "./pages/DetailPro";

function App() {
    return (
        <>
            <div className="container-fluid">
                <Routes>
                    <Route path={''} element={<Home></Home>}>
                        <Route path={''} element={<Mid></Mid>}></Route>
                        <Route path={'/cart'} element={<DetailCart></DetailCart>}></Route>
                        <Route path={'/detail-pro'} element={<DetailPro></DetailPro>}></Route>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
