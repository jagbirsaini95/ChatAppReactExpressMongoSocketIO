import React from 'react'
import swal from 'sweetalert';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Header } from '../style/StyledComponents';
import { login } from '../services/services';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    return <Container>
        <Header>Chatting app! Login</Header>
        <Formik
            initialValues={{ email: '', password: '' }}
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
                const response = await login(values);
                if (response.data.status) {
                    swal(`${response.data.msg} with ${response.data.data.email}`);
                    localStorage.setItem(
                        'chat-app-logged-user',
                        JSON.stringify(response.data.data)
                    );
                    console.log(response.data);
                    if (response.data.data.isAvatarImageSet) {
                        navigate('/chat')
                    } else {
                        navigate('/set-avatar')
                    }
                }
                else {
                    toast.error(response.data.msg)
                }
                setSubmitting(false);
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
                    <Link to="/register">Register</Link>
                </Form>
            )}
        </Formik>
    </Container>
}

export default Login;