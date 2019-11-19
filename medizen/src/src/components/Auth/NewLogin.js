import React, {useState, useEffect} from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const NewLogin = ({values, errors, touched, status}) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        status && setUser(user => [...user, status]);
    }, [status])

    return (
        <div>
         {status ? "Logged In" :    
      <Form>
        <Field type="email" name="email" placeholder="email" />
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="password" name="password" autoComplete="off"/>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <button type="submit">Submit</button>
      </Form>}
    </div>
    )
}

const FormikNewLogin = withFormik({
  mapPropsToValues({email, password}) {
    return {
      email: email || '',
      password: password || '',
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required('No Password Provided.').min(8, 'Password too short. 8 characters minimum.'),
  }),
  handleSubmit(values, {setStatus, resetForm}) {
    axios.post("https://medizen-api.herokuapp.com/api/auth/login", values)
    .then(response => {
      localStorage.setItem("token", response.data);
      setStatus(response.data);
      console.log(response);
    })
    .catch(err => console.log(err.response));
    resetForm();
  }
})(NewLogin);

export default FormikNewLogin;