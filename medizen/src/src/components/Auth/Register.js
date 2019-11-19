import React, {useState, useEffect} from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import moment from 'moment';

const Register = ({values, errors, touched, status}) => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        status && setUser(user => [...user, status]);
    }, [status])

    return (
        <div>
            <h2>Register Below</h2>
            <Form>
                <Field type="email" name="email" placeholder="email" />
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type="date" name="birthDate" />
                {/* Validation */}
                <Field type="password" placeholder="password" name="password" autoComplete="off" />
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="password" name="confirmPassword" placeholder="confirm password" autoComplete="off" />
                {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

const FormikRegister = withFormik({
    mapPropsToValues({email, password, confirmPassword, birthDate}) {
        return {
            email: email || '',
            password: password || '',
            confirmPassword: confirmPassword || '',
            birthDate: birthDate || '',
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required().email(),
        password: Yup.string().required('No Password Provided.').min(8, 'Password too short. 8 characters minimum.'),
        confirmPassword: Yup.string().required().label('Confirm Password').test('passwords-match', 'Passwords must match.', function(e) {return this.parent.password === e;}),
        birthDate: Yup.string().test('good-date', 'You must be 21 years old to register an account', value => {return moment().diff(moment(value), 'years') >= 21})
    }),
    handleSubmit(values, {setStatus, resetForm}) {
        axios.post("https://medizen-api.herokuapp.com/api/auth/register", values)
        .then(response => {
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            setStatus(response.data);
        })
        .catch(err => console.log(err.response));
        resetForm();
    }
})(Register)

export default FormikRegister;