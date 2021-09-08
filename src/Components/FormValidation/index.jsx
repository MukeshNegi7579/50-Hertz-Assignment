import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./style.module.css";

const FormValidation = () => {
    return (
        <div style={{ background: "#fff", borderRadius: "5px", padding: "10px" }}>
            <Formik
                enableReinitialize
                initialValues={{ name: "", email: "", password: "", mobile: "", country: "" }}
                onSubmit={async values => {
                    console.log(values)
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .required("Required"),
                    country: Yup.string()
                        .required("Required"),
                    mobile: Yup.string().required("Required").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
                    email: Yup.string()
                        .email()
                        .required("Required"),
                    password: Yup.string()
                        .required("Required")
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
                            <label htmlFor="name" style={{ display: 'block' }}>
                                Full Name:
                            </label>
                            <input
                                name="name"
                                placeholder="Enter full name"
                                type="text"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && touched.name && (
                                <div className={styles.error}>{errors.name}</div>
                            )}

                            <label htmlFor="email" style={{ display: 'block' }}>
                                Email:
                            </label>
                            <input
                                name="email"
                                placeholder="Enter email"
                                type="text"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email && (
                                <div className={styles.error}>{errors.email}</div>
                            )}

                            <label htmlFor="password" style={{ display: 'block' }}>
                                Password:
                            </label>
                            <input name="password" placeholder="Enter password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                            {errors.password && touched.password && (
                                <div className={styles.error}>{errors.password}</div>
                            )}

                            <label htmlFor="mobile" style={{ display: 'block' }}>
                                Mobile:
                            </label>
                            <input
                                name="mobile"
                                placeholder="Enter Mobile"
                                type="number"
                                value={values.mobile}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.mobile && touched.mobile && (
                                <div className={styles.error}>{errors.mobile}</div>
                            )}

                            <label htmlFor="country" style={{ display: 'block' }}>
                                Country:
                            </label>
                            <select
                                name="country"
                                value={values.country}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{ display: 'block' }}
                            >
                                <option value="" label="Select a country" />
                                <option value="india" label="India" />
                                <option value="australia" label="Australia" />
                                <option value="pakistan" label="pakistan" />
                            </select>
                            {errors.country && touched.country && (
                                <div className={styles.error}>{errors.country}</div>
                            )}

                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    );
                }}
            </Formik>
        </div>
    )
}

export default FormValidation;