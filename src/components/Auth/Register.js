import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { Redirect } from "react-router-dom";

const Register = ({ values, errors, touched, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    status && setUser(user => [...user, status]);
  }, [status]);

  return (
    <div className="Form">
      <h2>Sign Up</h2>
      <Form className="Form">
        <div className="Form">
          <label className="label" htmlFor="email">
            Email
          </label>
          <Field className="Input" type="email" name="email" />
          {touched.email && errors.email && (
            <p className="form-error">{errors.email}</p>
          )}
        </div>
        <div className="Form">
          <label className="label" htmlFor="password">
            Password
          </label>
          <Field
            className="Input"
            type="password"
            name="password"
            autoComplete="off"
          />
          {touched.password && errors.password && (
            <p className="form-error">{errors.password}</p>
          )}
        </div>
        <div className="Form">
          <label className="label" htmlFor="confirmPassword">
            Confirm
          </label>
          <Field
            className="Input"
            type="password"
            name="confirmPassword"
            autoComplete="off"
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <p className="form-error">{errors.confirmPassword}</p>
          )}
        </div>
        <div className="Form">
          <label className="label" htmlFor="birthDate">
            Birthdate
          </label>
          <Field className="Input" type="date" name="birthDate" />
          {touched.date && errors.date && (
            <p className="form-error">{errors.date}</p>
          )}
        </div>
        <button className="PrimaryBtn" type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};

const FormikRegister = withFormik({
  mapPropsToValues({ email, password, confirmPassword, birthDate }) {
    return {
      email: email || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
      birthDate: birthDate || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Required.")
      .email(),
    password: Yup.string()
      .required("No Password Provided.")
      .min(8, "Password must be 8 characters."),
    confirmPassword: Yup.string()
      .required("Required.")
      .label("Confirm Password")
      .test("passwords-match", "Passwords must match.", function(e) {
        return this.parent.password === e;
      }),
    birthDate: Yup.string().test(
      "good-date",
      "You must be 21 years old to register an account",
      value => {
        return moment().diff(moment(value), "years") >= 21;
      }
    )
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://medizen-api.herokuapp.com/api/auth/register", values)
      .then(response => {
        // console.log(response.data);
        // console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        setStatus(response.data);
        let isLoggedIn = true;
      })
      .catch(err => console.log(err.response));
    resetForm();
  }
})(Register);

export default FormikRegister;
