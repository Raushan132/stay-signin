import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");

    const handleSignout = () => {
        localStorage.clear();
        sessionStorage.clear();
        navigate("/login")
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("formData") || sessionStorage.getItem("formData"))
        setUser(data);
        if (!data) navigate('/login')
    }, [])
    return (
        <>
            <div className='form-data'>
                <div>
                    Welcome {user.firstName} {user.lastName}
                </div>
                <div>
                    <button onClick={handleSignout}>Sign out</button>
                </div>
            </div>
        </>
    )
}

export default Welcome