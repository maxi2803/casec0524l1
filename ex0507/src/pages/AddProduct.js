import { useEffect, useState } from "react"
import axios from 'axios'
import { Field, Form, Formik } from 'formik';
export default function AddProduct() {
    let [cates, setCates] = useState([]);
    let [selected, setSelected]= useState();
    useEffect(() => {
        axios.get('http://localhost:3000/categories').then(x => {
            setCates(x.data)
        })
    }, [])
    return (
        <>
            <h2> Add Product</h2>
            <Formik
                initialValues={{
                    name: '',
                    quantity: '',
                    price: ''
                }}
                onSubmit={(values)=> {
                    let category = cates.find(e => e.id == selected);
                    if(category === undefined) {
                        category = cates[0];
                    }
                    values = {...values, category};
                    axios.post('http://localhost:3000/products',values).then(x => {
                        alert('Them moi thanh cong!')
                    })
                }}
                >
                <Form>
                    <Field name='name'/>
                    <Field name='quantity'/>
                    <Field name='price'/>
                    <select onChange={(e)=>{
                        setSelected(e.target.value);
                    }}>
                        {cates.map(e => (<option value={e.id}>{e.name}</option>))}
                    </select>
                    <button>Add</button>
                </Form>
            </Formik>
        </>
    )
}