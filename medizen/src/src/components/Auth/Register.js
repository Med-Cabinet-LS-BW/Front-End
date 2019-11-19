import React, {useState, useEffect} from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Register = ({values, errors, touched, status}) => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        status && setUser(user => [...user, status]);
    }, [status])

    return (
        <div>
            <p>Register Below</p>
            <Form>
                {/* <Field type="text" name="name" placeholder="name" />
                {touched.name && errors.name && (
                    <p>{errors.name}</p>
                )} */}
                <Field type="email" name="email" placeholder="email" />
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type="password" name="password" autoComplete="off" />
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="password" name="secondPassword" autoComplete="off" />
                {touched.password && errors.password && <p>{errors.password}</p>}
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

const FormikRegister = withFormik({
    mapPropsToValues({email, password}) {
        return {
            // name: name || '',
            email: email || '',
            password: password || '',
        };
    },
    validationSchema: Yup.object().shape({
        // name: Yup.string().required(),
        email: Yup.string().required().email(),
        password: Yup.string().required('No Password Provided.').min(8, 'Password too short. 8 characters minimum.'),
    }),
    handleSubmit(values, {setStatus, resetForm}) {
        axios.post("https://medizen-api.herokuapp.com/api/auth/register", values)
        .then(response => {
            console.log(response);
            localStorage.setItem("token", response.data);
            setStatus(response.data);
        })
        .catch(err => console.log(err.response));
        resetForm();
    }
})(Register)

export default FormikRegister;