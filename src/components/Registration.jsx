import React, { useState } from 'react'

const Registration = () => {

    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });

    const handleRegister = (e) => {
        e.preventDefault();
        if (formData.confirmPassword !== formData.password) {
            alert("Password Mismatch please try again");
            return;
        }

        console.log(formData);
    }

    return (
        <div>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type='text' defaultValue={formData.firstName} onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))} required/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type='text' defaultValue={formData.lastName} onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))} required/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email' defaultValue={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} required/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' defaultValue={formData.password} onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))} required/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type='password' defaultValue={formData.confirmPassword} onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))} required/>
                </div>

                <div>
                    <button onClick={handleRegister}>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Registration