import React, { useEffect, useState } from "react";
import axios from "axios";
// import Spinner from "../components/spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faJs } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState("table");
    const backEndUrl = import.meta.env.VITE_BACKEND_URL;
    useEffect(() => {
        setLoading(true);
        axios
            .get(`${backEndUrl}/books`)
            .then((response) => {
                setBooks(response.data.data);
                // console.log(response.data.data)
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen text-white bg-gray-900">
            <header className="p-4 text-center">
                <h1 className="text-3xl font-bold">Leaderboard (Overall)</h1>
            </header>
            {/* <main className="container mx-auto mt-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {books.map((book) => (
                        <div
                            key={book.id}
                            className="p-4 bg-indigo-900 rounded-lg shadow-lg"
                        >
                            <h2 className="text-xl font-semibold">
                                {book.username}
                            </h2>
                            <p className="text-grey-100">{book.rating}</p>
                            <div className="mt-4 space-x-2">
                                <button className="px-2 py-1 text-white bg-purple-600 rounded">
                                    <Link to={`/books/details/${book._id}`}>
                                        Details
                                    </Link>
                                </button>
                                <button className="px-2 py-1 text-white bg-purple-400 rounded">
                                    <Link to={`/books/edit/${book._id}`}>
                                        Edit
                                    </Link>
                                </button>
                                <button className="px-2 py-1 text-white bg-purple-600 rounded">
                                    <Link to={`/books/delete/${book._id}`}>
                                        Delete Book
                                    </Link>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main> */}
            <center>
                <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <Link to={`/create`}>Create User</Link></button>
            </center>


        </div>
    );
};

export default Home;
