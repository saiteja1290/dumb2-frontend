import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
    const [username, setusername] = useState("");
    const [branch, setbranch] = useState("");
    const [overall_rank, setoverall_rank] = useState("");
    const [branch_rank, setbranch_rank] = useState("");
    const [rating, setrating] = useState("");
    const [loading, setloading] = useState(false);
    const backEndUrl = import.meta.env.VITE_BACKEND_URL;

    const navigate = useNavigate();

    const handleuser = () => {
        const data = {
            username,
            branch,
            overall_rank,
            branch_rank,
            rating,
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
        // <div className='p-4'>
        //     {/* <BackButton /> */}
        //     <h1 className='my-4 text-3xl'>Create Book</h1>
        //     {loading ? <Spinner /> : ''}
        //     <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        //         <div className='my-4'>
        //             <label className='mr-4 text-xl text-gray-500'>Title</label>
        //             <input
        //                 type='text'
        //                 value={title}
        //                 onChange={(e) => setTitle(e.target.value)}
        //                 className='w-full px-4 py-2 border-2 border-gray-500'
        //             />
        //         </div>
        //         <div className='my-4'>
        //             <label className='mr-4 text-xl text-gray-500'>Author</label>
        //             <input
        //                 type='text'
        //                 value={author}
        //                 onChange={(e) => setAuthor(e.target.value)}
        //                 className='w-full px-4 py-2 border-2 border-gray-500 '
        //             />
        //         </div>
        //         <div className='my-4'>
        //             <label className='mr-4 text-xl text-gray-500'>Publish Year</label>
        //             <input
        //                 type='number'
        //                 value={publishyear}
        //                 onChange={(e) => setpublishyear(e.target.value)}
        //                 className='w-full px-4 py-2 border-2 border-gray-500 '
        //             />
        //         </div>
        //         <button className='p-2 m-8 bg-sky-300' onClick={handleuser}>
        //             Save
        //         </button>
        //     </div>
        // </div>
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
                        Overall Rank
                    </label>
                    <input
                        type="number"
                        value={overall_rank}
                        onChange={(e) => setoverall_rank(e.target.value)}
                        className="w-full px-4 py-2 text-black border-2 rounded border-white-400 focus:outline-none focus:border-purple-600"
                    />
                </div>
                <div className="my-4">
                    <label className="mr-4 text-xl text-white-400">
                        Branch Rank
                    </label>
                    <input
                        type="number"
                        value={branch_rank}
                        onChange={(e) => setbranch_rank(e.target.value)}
                        className="w-full px-4 py-2 text-black border-2 rounded border-white-400 focus:outline-none focus:border-purple-600"
                    />
                </div>
                <div className="my-4">
                    <label className="mr-4 text-xl text-white-400">
                        Rating
                    </label>
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setrating(e.target.value)}
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

export default CreateBook;
