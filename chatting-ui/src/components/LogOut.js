import React from 'react'
import { ContainerLogout } from '../style/StyledComponents'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../services/services';

function LogOut({ currentUser }) {
    const navigate = useNavigate();
    const handleLogout = async () => {
        const response = await logOut(currentUser._id)
        if (response.status) {
            localStorage.clear();
            navigate('/login');
        }
    }
    return (
        <ContainerLogout>
            <button onClick={handleLogout}>
                LogOut
            </button>
        </ContainerLogout>
    )
}

export default LogOut