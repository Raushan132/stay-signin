import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isRemember, setIsRemeber] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("formData") || sessionStorage.getItem("formData"))
        if (data) navigate('/home')
    }, [])

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(formData, isRemember)

        axios.post("http://localhost:8080/login", formData)
            .then((resp) => {

                if (isRemember) { localStorage.setItem("formData", JSON.stringify(resp.data)); sessionStorage.clear(); navigate("/home"); }
                else {
                    localStorage.clear(); sessionStorage.setItem("formData", JSON.stringify(resp.data)); navigate("/home");
                }
            })
            .catch(err => alert(err.response.data.message));



    }

    return (
        <>

            <div className='form-data'>
                <form>
                    <div className='title'>Login</div>
                    <div className='group-form'>

                        <div>
                            <label>Email:</label>
                            <input type='email' defaultValue={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} required />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type='password' defaultValue={formData.password} onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))} required />
                        </div>
                        <div>
                            <div>
                            <input type='checkbox' defaultChecked={isRemember} onChange={() => setIsRemeber(!isRemember)} />
                            <label>Stay Login</label>
                            </div>
                        </div>
                        <div>
                            <Link to={"/registration"}>Create Account</Link>
                        </div>
                        <div>
                            <button onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login