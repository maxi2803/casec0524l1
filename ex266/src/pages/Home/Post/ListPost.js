import { useEffect, useState, useContext} from "react"
import axios from "axios";
import './ListPost.css'
import { Link } from "react-router-dom";
import {MyContext} from "../../../MyContext";
export default function ListPost() {
    let [cxt, setCxt] = useContext(MyContext);
    let [list, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/posts').then((res) => {
            console.log(res.data);
            let list = res.data.filter(e => e.user.username == cxt.user.username);
            console.log(list);
            setList(list);
        })
    }, [cxt])
    return (
        <>
            <h1>ListPost Page</h1>
            <h2> Search key {cxt.key}</h2>
            <div className="list">
                {list.map(e => (
                    <div className="item">
                        <img src={e.image} />
                        <Link to={'detail/' + e.id}>
                            <div>{e.title}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}