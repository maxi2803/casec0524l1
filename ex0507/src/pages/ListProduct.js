import { useEffect, useState } from "react"
import axios from 'axios'
export default function ListProduct() {
    let [list, setList] = useState([{
        name: '',
        price: '',
        quantity: '',
        category: {
            name: ''
        }
    }]);
    let [cates, setCates] = useState([]);
    let [selected, setSelected] = useState(0);
    useEffect(() => {
        axios.get('http://localhost:3000/categories').then(x => {
            setCates(x.data)
        })
    }, [])
    useEffect(()=> {
        axios.get('http://localhost:3000/products').then(x => {
            if(selected == 0) {
                setList(x.data)
            } else {
                setList(x.data.filter(e => e.category.id == selected))
            }
        })
    }, [selected])
    return (
        <>
            List Product
            {list.map(e => (
                <h2>{e.name}, {e.price}, {e.quantity}, {e.category.name}</h2>
            ))}
            <select onChange={(e)=>{
                console.log(e.target.value);
                setSelected(e.target.value)
            }}>
                <option value={0}>Tat ca</option>
                {cates.map(e => (<option value={e.id}>{e.name}</option>))}
            </select>
        </>
    )
}