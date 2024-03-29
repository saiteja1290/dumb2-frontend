import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginPage from "../components/LoginPage";
const CreateBookPage = () => {
    const [username, setusername] = useState("");
    const [branch, setbranch] = useState("");
    const [rank, setrank] = useState("");
    const [contest, setcontest] = useState("");
    const [loading, setloading] = useState(false);
    const backEndUrl = import.meta.env.VITE_BACKEND_URL;

    const navigate = useNavigate();

    const handleuser = () => {
        const data = {
            username,
            branch,
            rank,
            contest
        };
        setloading(true);
        axios
            .post(`${backEndUrl}/books`, data)
            .then(() => {
                setloading(false);
                navigate("/");
            })
            .catch((error) => {
                setloading(false);
                console.log("Error:", error);
            });
    };
    return (

        <div className="flex items-center justify-center min-h-screen text-white bg-gray-900">
            <div className="p-4 bg-purple-900 rounded-lg shadow-lg w-96">
                <div className="text-center">
                    <h1 className="my-4 text-3xl">Create User</h1>
                    {/* {loading ? <Spinner /> : ''} */}
                </div>
                <div className="my-4">
                    <label className="mr-4 text-xl text-white-400">
                        username
                    </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        className="w-full px-4 py-2 text-black border-2 rounded border-white-400 focus:outline-none focus:border-purple-600"
                    />
                </div>
                <div className="my-4">
                    <label className="mr-4 text-xl text-white-400">
                        branch
                    </label>
                    <input
                        type="text"
                        value={branch}
                        onChange={(e) => setbranch(e.target.value)}
                        className="w-full px-4 py-2 text-black border-2 rounded border-white-400 focus:outline-none focus:border-purple-600"
                    />
                </div>

                <div className="my-4">
                    <label className="mr-4 text-xl text-white-400">
                        Rank
                    </label>
                    <input
                        type="number"
                        value={rank}
                        onChange={(e) => setrank(e.target.value)}
                        className="w-full px-4 py-2 text-black border-2 rounded border-white-400 focus:outline-none focus:border-purple-600"
                    />
                </div>
                <div className="my-4">
                    <label className="mr-4 text-xl text-white-400">
                        contest
                    </label>
                    <input
                        type="number"
                        value={contest}
                        onChange={(e) => setcontest(e.target.value)}
                        className="w-full px-4 py-2 text-black border-2 rounded border-white-400 focus:outline-none focus:border-purple-600"
                    />
                </div>

                <button
                    className="p-2 m-8 text-white bg-purple-600 rounded hover:bg-purple-700"
                    onClick={handleuser}
                >
                    Save
                </button>
            </div>
        </div>
    );
};
const CreateBook = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <div>
            {isAdmin ? (
                <CreateBookPage />
            ) : (
                <LoginPage onLogin={setIsAdmin} />
            )}
        </div>
    );
};

export default CreateBook;

// export default CreateBook;
