import React, { useState } from 'react';

const SignUp: React.FC = () => {
    const [name, setName] = useState<string>(''); // Specify type for useState
    const [email, setEmail] = useState<string>(''); // Specify type for useState
    const [password, setPassword] = useState<string>(''); // Specify type for useState
    const [confirmPassword, setConfirmPassword] = useState<string>(''); // Specify type for useState
    const [errorMessage, setErrorMessage] = useState<string>(''); // Specify type for useState

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => { // Specify type for event
        event.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match. Please try again.");
            return;
        }

        const data = { Name: name, E_mail: email, Password: password };

        try {
            const response = await fetch("http://127.0.0.1:8090/api/collections/login_page/records", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);

                alert("Account created successfully!");
                // Clear form fields
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setErrorMessage(''); // Clear error message on success
            } else {
                const error = await response.json();
                alert("Error creating account: " + error.message);
            }
        } catch (error) {
            if (error instanceof Error) {
                alert("Network error: " + error.message); // Ensure error is an instance of Error
            } else {
                alert("An unknown error occurred.");
            }
        }
    };

    return (
        <div className="container">
            <div className="form-box">
                <div className="left-side">
                    <h2>Hello Qasim!</h2>
                    <p>Glad to see you! sign up to get started</p>
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
                        <div className="input-box">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm password"
                                required
                            />
                        </div>
                        {errorMessage && <div className="error-message" style={{ color: 'red' }}>{errorMessage}</div>}
                        <div className="terms">
                            <input type="checkbox" required />
                            <label>I agree to the <a href="#">Terms & Conditions</a></label>
                        </div>
                        <button type="submit" className="btn">Create Account</button>
                        <p className="login-link">Already have an account?<a href="/signin.html">Sign-in</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;