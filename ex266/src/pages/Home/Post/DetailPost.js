import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function DetailPost() {
    let {id} = useParams();
    let [data, setData] = useState({
        title:'',
        content:'',
        time:'',
        image:''
    });
    useEffect(()=> {
        axios.get('http://localhost:3000/posts/'+id).then(res => {
            setData(res.data)
        })
    }, [])
    return (
        <>
            <h1>Detail Page {data.title}</h1>
            <img src={data.image}/>
            <h2>{data.content}</h2>
            <h3>{data.time}</h3>
        </>
    )
}