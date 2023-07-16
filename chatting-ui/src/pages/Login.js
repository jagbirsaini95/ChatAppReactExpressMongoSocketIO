import React from 'react'
import swal from 'sweetalert';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Header } from '../style/StyledComponents';

function Login() {
    const handleClick = () => {
        return swal("Hello world!");
    }
    return <Container>
        <Header>Chatting app! Register</Header>
        <Formik
            initialValues={{ name: '', mobileNumber: '', email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <label htmlFor="email" className='required'>Email</label>
                    <Field id="email" type="email" className="email" name="email" />
                    <ErrorMessage className='error' name="email" component="span" />
                    <label htmlFor="password" className='required'>Password</label>
                    <Field id="password" type="password" className="password" name="password" />
                    <ErrorMessage className='error' name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </Container>
}

export default Login;