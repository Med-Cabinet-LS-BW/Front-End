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
      <Form>
        <Field type="text" name="name" placeholder="name" />
        {touched.name && errors.name && (
          <p>{errors.name}</p>
        )}
        <Field type="email" name="email" placeholder="email" />
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="password" name="password" autoComplete="off"/>
        {/* <label className="checkbox-container">
          Terms of Service
          <Field
            type="checkbox"
            name="tos"
            checked={values.tos}
          />
          <span className="checkmark" />
        </label> */}
        <button type="submit">Submit!</button>
      </Form>
      {/* {user.map(users => (
        <ul key={users.id}>
          <li>Name: {users.name}</li>
          <li>Email: {users.email}</li>
          <li>Signed TOS? - {values.tos ? "False" : "True"}</li>
        </ul>
      ))} */}
    </div>
    )
}

const FormikNewLogin = withFormik({
  mapPropsToValues({name, email, password, tos}) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
    //   tos: tos || false,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required('No Password Provided.').min(8, 'Password too short. 8 characters minimum.'),
    // tos: Yup.boolean().required('Please check ToS box.').oneOf([true], 'Must accept Terms of Service.'),
  }),
  handleSubmit(values, {setStatus, resetForm}) {
    axios.post("http://localhost:5000/api/login/", values)
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