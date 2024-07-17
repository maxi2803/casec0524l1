import { Field, Form, Formik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Register() {
    let navigate = useNavigate();
    return (
        <>
            <h1>Register Page</h1>
            <Formik
                initialValues={{
                    dob: "",
                    name: "",
                    username: "",
                    password: ""
                }}
                onSubmit={(values) => {
                    axios.post('http://localhost:3000/users/register', values).then(()=> {
                        alert('Đăng ký thành công!');
                        navigate("/")
                    })
                }}
            >
                <Form>
                    <Field name="username"></Field>
                    <Field name="password"></Field>
                    <Field name="name"></Field>
                    <Field name="dob"></Field>
                    <button>Register</button>
                </Form>
            </Formik>
        </>
    )
}