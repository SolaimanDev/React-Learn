import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";

export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        console.log(formData); // Log form data
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-column gap-2">
                    <label htmlFor="username">Username</label>
                    <InputText
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        aria-describedby="username-help"
                    />
                    <small id="username-help">Enter your username.</small>
                </div>
                <div className="flex flex-column gap-2">
                    <label htmlFor="email">Email</label>
                    <InputText
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        aria-describedby="email-help"
                    />
                    <small id="email-help">Enter your email.</small>
                </div>
                <div className="flex flex-column gap-2">
                    <label htmlFor="password">Password</label>
                    <InputText
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        aria-describedby="password-help"
                    />
                    <small id="password-help">Enter your password.</small>
                </div>
                <div className="flex flex-column gap-2">
                    <Button label="Submit" type="submit" />
                </div>
            </form>
        </div>
    );
}
