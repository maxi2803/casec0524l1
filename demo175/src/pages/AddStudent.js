import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
export default function AddStudent() {
    let navigate = useNavigate();
    let [data, setData] = useState({
        name: '',
        score: ''
    })
    let changeInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    return (
        <>
            <input value={data.name} type="text" name='name' onChange={e => {
                changeInput(e);
            }} />
            <input value={data.score} type="text" name='score' onChange={e => {
                changeInput(e);
            }} />
            <button onClick={() => {
                axios.post('http://localhost:3000/students', data).then(() => {
                    setData({ name: '', score: '' });
                    navigate("/students")
                })
            }}>Add</button>
        </>
    )
}