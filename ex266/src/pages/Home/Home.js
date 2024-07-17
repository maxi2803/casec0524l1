import { Link, Outlet } from "react-router-dom";
import {useContext} from "react";
import {MyContext} from "../../MyContext";
import Search from "../../components/Search";
export default function Home() {
    let [cxt, setCxt] = useContext(MyContext);
    return (
        <>
            <h1>Home Page</h1>
            <h2>Username: {cxt.user && cxt.user.username}</h2>
            <Link to={'add'}>Add new Post</Link>
            <Search></Search>
            <Outlet></Outlet>
        </>
    )
}