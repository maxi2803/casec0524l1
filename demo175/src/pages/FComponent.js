import { useEffect, useState } from "react"
import axios from 'axios';
import { useParams } from "react-router-dom";
export default function FCompoent() {
    let {id} = useParams();
    console.log(id);
    let [x, setX] = useState(1);
    let [list, setList] = useState([])
    let [data, setData] = useState({
        name: '',
        score: ''
    })
    let getList = () => {
        axios.get('http://localhost:3000/students').then((res) => {
            console.log(res.data);
            setList(res.data)
        });
    }
    useEffect(() => {
        getList();
    }, [])
    let changee = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    let add = () => {
        axios.post('http://localhost:3000/students', data).then(() => {
            alert('Thanh Cong');
            getList();
            setData({
                name: '',
                score: ''
            })
        });
    }
    return (
        <>
            <h1>Xin chao F Component {x}</h1>
            <button onClick={() => { setX(x + 1); }}>Up</button>
            {
                list.map((e) => (
                    <h2>{e.name}, {e.score}</h2>
                ))
            }
            <input name='name' type="text" value={data.name} onChange={(e) => { changee(e) }} />
            <input name='score' type="text" value={data.score} onChange={(e) => { changee(e) }} />
            <button onClick={() => { add() }}>Add</button>
        </>
    )
}