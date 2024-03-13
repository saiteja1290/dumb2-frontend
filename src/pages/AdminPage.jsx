import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useParams } from "react-router-dom";
import LoginPage from '../components/LoginPage';
const AdminPage = () => {
    return (
        <div className="min-h-screen text-white bg-gray-900">
            <center>
                <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <Link to={`/create`}>Create User</Link></button>
            </center>
        </div>
    );
};


const MyApp = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <div>
            {isAdmin ? (
                <AdminPage />
            ) : (
                <LoginPage onLogin={setIsAdmin} />
            )}
        </div>
    );
};

export default MyApp;
