import React from 'react'
import swal from 'sweetalert';

function Login() {
    const handleClick = () => {
        return swal("Hello world!");
    }

    return (
        <div>Login
            <button onClick={handleClick}>click</button>

        </div>
    )
}

export default Login