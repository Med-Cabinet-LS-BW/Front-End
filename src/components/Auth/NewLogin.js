import React, {useState, useEffect} from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const NewLogin = ({values, errors, touched, status}) => {
    const [userState, setUserState] = useState([]);

    useEffect(() => {
        status && setUserState(user => [...user, status]);
    }, [status])

    return (
        <div>
         {status ? <Redirect to={{ pathname: "/StrainList" }} /> : 
         <> 
          <h2>Login Below</h2>  
      <Form>
        <Field type="email" name="email" placeholder="email" />
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="password" placeholder="password" name="password" autoComplete="off"/>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <button type="submit">Submit</button>
      </Form>
      </>}
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
      localStorage.setItem("token", response.data.token);
      //console.log(response.data.token);
      setStatus(response.data);
      let isLoggedIn = true;
    })
    .catch(err => console.log(err.response));
    resetForm();
  }
})(NewLogin);

export default FormikNewLogin;