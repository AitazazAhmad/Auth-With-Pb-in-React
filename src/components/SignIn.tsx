import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        // Handle sign-in logic here
        alert("Sign-in logic to be implemented.");
    };

    return (
        <div className="container">
            <div className="form-box">
                <div className="left-side">
                    <h2>Hello friend!</h2>
                    <p>Glad to see you! Sign in to get started</p>
                </div>
                <div className="right-side">
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <i className="fas fa-user"></i>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="input-box">
                            <i className="fas fa-envelope"></i>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="E-mail"
                                required
                            />
                        </div>
                        <div className="input-box">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <p className="login-link">
                            You don't have an account?
                            <Link to="/signup"> Sign-up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;