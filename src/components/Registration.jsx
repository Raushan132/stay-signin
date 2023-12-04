import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {

    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });

    const handleRegister = (e) => {
        e.preventDefault();
        if (formData.confirmPassword !== formData.password) {
            alert("Password Mismatch please try again");
            return;
        }

        axios.post("http://localhost:8080/register", formData)
            .then((res) => alert("User is Registered"))
            .catch(err => {
                alert(err.response.data.message)
            });

    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("formData") || sessionStorage.getItem("formData"))
        if (data) navigate('/home')
    }, [])

    return (
        <div className='form-data'>

            <form>
                <div className='title'>Registration</div>
                <div className='group-form'>

                    <div>
                        <label>First Name:</label>
                        <input type='text' defaultValue={formData.firstName} onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))} required />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type='text' defaultValue={formData.lastName} onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type='email' defaultValue={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type='password' defaultValue={formData.password} onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))} required />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input type='password' defaultValue={formData.confirmPassword} onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))} required />
                    </div>

                    <div>
                        <Link to={"/login"}>Already have account</Link>
                    </div>
                    <div>
                        <button onClick={handleRegister}>Register</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Registration