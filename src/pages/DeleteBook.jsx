// import React from 'react';
import React, { useEffect, useState } from "react";
// import BackButton from '../components/BackButton';
// import Spinner from '../components/Spinner';
// import Spinner from "../components/spinner";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const DeleteBook = () => {
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
    const backEndUrl = import.meta.env.VITE_BACKEND_URL;
    const { id } = useParams();
    const deletebookfn = () => {
        setloading(true);
        axios
            .delete(`${backEndUrl}/books/${id}`)
            .then(() => {
                alert("Book Deleted");
                navigate("/");
            })
            .catch((error) => {
                alert("Error check console");
                console.log(error);
            });
    };
    return (
        <div className="flex items-center justify-center min-h-screen text-white bg-gray-900">
            <div className="p-4 bg-purple-900 rounded-lg shadow-lg w-96">
                <div className="text-center">
                    <h1 className="my-4 text-3xl">Delete Book</h1>
                    {loading ? <Spinner /> : ""}
                </div>
                <p className="my-4 text-center text-white-400">
                    Are you sure you want to delete this book?
                </p>
                <div className="flex justify-center">
                    <button
                        className="p-2 m-4 text-white bg-red-600 rounded hover:bg-red-700"
                        onClick={deletebookfn}
                    >
                        Delete
                    </button>
                    <button
                        className="p-2 m-4 text-white bg-purple-600 rounded hover:bg-purple-700"
                        onClick={navigate("/")}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteBook;
