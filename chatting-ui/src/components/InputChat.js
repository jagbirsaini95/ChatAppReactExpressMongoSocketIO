import React from 'react'
import { Formik } from 'formik';
import { ContainerInputChat } from '../style/StyledComponents';
function InputChat() {
    return (
        <ContainerInputChat>
            <Formik
                initialValues={{ message: '' }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 1000);
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.message}
                            placeholder='enter your message here...'
                            name="name"
                        />
                        {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                        <button type="submit">Send</button>
                    </form>
                )}
            </Formik>
        </ContainerInputChat>
    )
}

export default InputChat