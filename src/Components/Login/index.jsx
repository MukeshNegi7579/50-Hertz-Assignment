import { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./style.module.css";
import { Formik } from "formik";
import * as Yup from "yup";

const Login = ({ onSubmit }) => {
    const history = useHistory();

    return (
        <div className={styles.wrapper}>
            <Formik
                enableReinitialize
                initialValues={{ username: "", password: "" }}
                onSubmit={async values => {
                    onSubmit({ ...values });
                    history.push("/employee-form")
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .email()
                        .required("Required"),
                    password: Yup.string()
                        .required('No password provided.')
                        .min(8, 'Password is too short - should be 8 chars minimum.')
                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    } = props;
                    return (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input
                                name="username"
                                placeholder="Username"
                                type="text"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.username && touched.username && (
                                <div className={styles.error}>{errors.username}</div>
                            )}
                            <input name="password" placeholder="Password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                            {errors.password && touched.password && (
                                <div className={styles.error}>{errors.password}</div>
                            )}
                            <button type="submit" disabled={isSubmitting}>
                                Login
                            </button>
                        </form>
                    );
                }}
            </Formik>
        </div>
    )
}

export default Login;