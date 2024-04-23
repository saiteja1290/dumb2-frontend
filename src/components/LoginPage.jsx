import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useParams } from "react-router-dom";
// import LoginPage from './LoginPage';
const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [real_user, setreal_user] = useState('');
    const [real_pass, setreal_pass] = useState('');
    const [loading, setLoading] = useState(false);
    const backEndUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${backEndUrl}/books`)
            .then((response) => {
                const arr_1 = response.data.data[10];
                const x = arr_1.username;
                setreal_user(x);
                const y = arr_1.branch;
                setreal_pass(y);
                // setBooks(arr_1);
                // setLoading(false);
                // setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleLogin = () => {
        if (username === real_user && password === real_pass) {
            onLogin(true);
        } else {
            setError('Incorrect username or password');
        }
    };
    return (
        <div className="min-h-screen text-white bg-gray-900">
            <header className="p-4 text-center">
                <h1 className="text-3xl font-bold">Admin Panel</h1>
            </header>
            <div className="max-w-sm mx-auto">
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                      dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                    block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogin}>Submit</button>
            </div>
        </div>


    );
};


export default LoginPage;