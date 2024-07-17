import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

export default function Home() {
    return (
        <>
            <Menu></Menu>
            <hr></hr>
            <h1>Home</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}