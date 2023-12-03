import React, { useState } from 'react'

const Login = () => {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isRemember, setIsRemeber] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(formData, isRemember)

        if (isRemember) { localStorage.setItem("formData",formData); sessionStorage.clear() }
        else{
            localStorage.clear(); sessionStorage.setItem("formData",formData);
        }
    }

    return (
        <>
            <div>
                <form>

                    <div>
                        <label>Email:</label>
                        <input type='email' defaultValue={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type='password' defaultValue={formData.password} onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))} required />
                    </div>
                    <div>

                        <input type='checkbox' defaultChecked={isRemember} onChange={() => setIsRemeber(!isRemember)} />
                        <label>Stay Login</label>
                    </div>

                    <div>
                        <button onClick={handleLogin}>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login