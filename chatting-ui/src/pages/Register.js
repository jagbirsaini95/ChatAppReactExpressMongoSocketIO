import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Header } from '../style/StyledComponents';

import { toast } from 'react-toastify';

import { register } from '../services/services';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
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
            onSubmit={async (values, { setSubmitting }) => {
                const response = await register(values);
                if (response.data.status) {
                    swal(`${response.data.msg} with ${response.data.data.email}`).then(() => {
                        navigate('/login')
                    })
                }
                else {
                    toast.error(response.data.msg)
                }
                setSubmitting(false);
            }}
        >
            {({ errors, isSubmitting }) => (
                <Form>
                    <label htmlFor="name" className='required'>Name</label>
                    <Field id="name" type="text" className="name" name="name" />
                    <label htmlFor="number">Mobile Number</label>
                    <Field type="number" className="mobile-number" name="mobileNumber" />
                    <label htmlFor="email" className='required'>Email</label>
                    <Field id="email" type="email" className="email" name="email" />
                    <ErrorMessage className='error' name="email" component="span" />
                    <label htmlFor="password" className='required'>Password</label>
                    <Field id="password" type="password" className="password" name="password" />
                    <ErrorMessage className='error' name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    <Link to="/login">Login</Link>
                </Form>
            )}
        </Formik>
    </Container>
}

export default Register