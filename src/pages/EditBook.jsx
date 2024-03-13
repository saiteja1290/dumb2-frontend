// import React from 'react';
import React, { useEffect, useState } from "react";
// import BackButton from '../components/BackButton';
// import Spinner from '../components/Spinner';

import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditBook = () => {
    // const [books, setbooks] = useState([]);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishyear, setpublishyear] = useState("");
    const [loading, setloading] = useState(false);
    const backEndUrl = import.meta.env.VITE_BACKEND_URL;

    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        setloading(true);
        axios
            .get(`${backEndUrl}/books/${id}`)
            .then((response) => {
                // setbooks(response.data.data)
                // console.log(response.data)
                setAuthor(response.data.data.author);
                setTitle(response.data.data.title);
                setpublishyear(response.data.data.publishyear);
                setloading(false);
            })
            .catch((error) => {
                alert("There has been a error, please check console");
                console.log("Error :", error);
            });
    }, []);
    const editbook = () => {
        const data = {
            title,
            author,
            publishyear,
        };
        setloading(true);
        axios
            .put(`http://localhost:5555/books/${id}`, data)
            .then(() => {
                setloading(false);
                navigate("/");
            })
            .catch((error) => {
                setloading(false);
                console.log("Error:", error);
            });
    };
    // const prevtitle = title
    return (
        <div className="flex items-center justify-center min-h-screen text-white bg-gray-900">
            <div className="p-4 bg-purple-900 rounded-lg shadow-lg w-96">
                <div className="text-center">
                    <h1 className="my-4 text-3xl">Edit Book</h1>
                    {/* {loading ? <Spinner /> : ''} */}
                </div>
                <div className="my-4">
                    <label className="mr-4 text-xl text-white-400">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 text-black border-2 rounded border-white-400 focus:outline-none focus:border-purple-600"
                    />
                </div>
                <div className="my-4">
                    <label className="mr-4 text-xl text-white-400">
                        Author
                    </label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full px-4 py-2 text-black border-2 rounded border-white-400 focus:outline-none focus:border-purple-600"
                    />
                </div>
                <div className="my-4">
                    <label className="mr-4 text-xl text-white-400">
                        Publish Year
                    </label>
                    <input
                        type="number"
                        value={publishyear}
                        onChange={(e) => setpublishyear(e.target.value)}
                        className="w-full px-4 py-2 text-black border-2 rounded border-white-400 focus:outline-none focus:border-purple-600"
                    />
                </div>
                <button
                    className="p-2 m-8 text-white bg-purple-600 rounded hover:bg-purple-700"
                    onClick={editbook}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditBook;
