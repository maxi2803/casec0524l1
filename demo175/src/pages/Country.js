import { useState, useEffect } from "react"
import axios from 'axios';
export default function Country() {
    let [list, setList] = useState([]);
    let getList = () => {
        axios.get('https://restcountries.com/v3.1/all?fields=name,area,population,flags').then((res) => {
            console.log(res.data);
            setList(res.data)
        });
    }
    useEffect(() => {
        getList();
    }, [])
    return (
        <>
            <h2>Country List</h2>
            <input type="text" onChange={e => {
                let key = e.target.value.toLowerCase();
                axios.get('https://restcountries.com/v3.1/all?fields=name,area,population,flags').then((res) => {
                    let newList = res.data.filter(e => e.name.common.toLowerCase().includes(key));
                    setList(newList)
                });
            }} />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Population</th>
                        <th scope="col">Area</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(ele => (
                        <tr>
                            <td>{ele.name.common}</td>
                            <td><img src={ele.flags.png} style={{ width: '100px' }} /></td>
                            <td>{ele.population.toLocaleString()}</td>
                            <td>{ele.area.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
