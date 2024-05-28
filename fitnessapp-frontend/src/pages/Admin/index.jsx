import { useEffect } from 'react';
import './index.css';
//import Blob from "../../components/blobs/Blob";
import Button from "../../components/button/Button";


const LoginPage = () => {

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('login-container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }, []);
    const handleCreateAccSubmit = (e) => {
        e.preventDefault();
        window.location.href="/Admin/MainLayout";
    };

    const handleLoginAccSubmit = (e) => {
        e.preventDefault();
        window.location.href="/Admin/MainLayout";
    };

    return (
        
        <div className="container" id="login-container">
            <div className="form-container sign-up-container">
                <form onSubmit={handleCreateAccSubmit}>
                    <h1>Create Admin Account</h1>
                    <span>or use your email for registration</span>
                    <input required type="text" placeholder="Name" />
                    <input required type="email" placeholder="Email" />
                    <input required type="password" placeholder="Password" />
                    <Button className="button" type="submit">Sign Up</Button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form onSubmit={handleLoginAccSubmit}>
                    <h1>Admin Sign in</h1>
                    <span>or use your account</span>
                    <input required type="email" placeholder="Email" />
                    <input required type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <Button className="button" type="submit">Sign In</Button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <button className="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;