import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
export default function Login() {
    let navigate = useNavigate();
    let [data, setData] = useState({
        usn: '',
        pass: ''
    })
    let changeInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    let login = () => {
        if(data.usn === 'admin' && data.pass === 'admin') {
            navigate('/students')
        }
    }
    return (
        <>
            <h1>Login</h1>
            <input value={data.usn} type="text" name='usn' onChange={e => {
                changeInput(e);
            }} />
            <input value={data.pass} type="text" name='pass' onChange={changeInput} />
            <button onClick={login}>Login</button>
            <button onClick={()=> {
                login();
            }}>Login</button>
        </>
    )
}