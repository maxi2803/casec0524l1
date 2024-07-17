import Logo from "../components/Logo";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Right from "../components/Right";
import {Outlet} from "react-router-dom";
import Left from "../components/Left";

export default function Home(){
    return (
        <>
            <div className="row">
                <Logo></Logo>
                <Banner></Banner>
            </div>
            <div className="row">
                <Navbar></Navbar>
            </div>
            <div className="row">
                <Left></Left>
                <Outlet></Outlet>
                <Right></Right>
            </div>
        </>
    )
}
