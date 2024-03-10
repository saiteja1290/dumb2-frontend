import React, { useEffect, useState } from "react";
import axios from "axios"; //to handle http req from backend
// import Spinner from "../components/spinner";
// import Backbutton from '../components/BackButton';
import { useParams } from "react-router-dom";

const ShowBook = () => {
    const [books, setbooks] = useState([]);
    const [loading, setloading] = useState([]);
    const { id } = useParams();
    const backEndUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        setloading(true);
        axios
            .get(`${backEndUrl}/${id}`)
            .then((response) => {
                setbooks(response.data.data);
                // console.log(response)
                setloading(false);
            })
            .catch((error) => {
                console.log(error);
                setloading(false);
            });
    }, []);
    return (
        // <div className='p-4'>
        //     {/* ShowBook */}
        //     {/* <Backbutton /> */}
        //     <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
        //         <p className="text-2xl font-semibold">Title : {books.title}</p>
        //         <p className="text-sm text-gray-600">Author: {books.author}</p>
        //         <p className="text-sm text-gray-600">Published Year: {books.publishyear}</p>
        //     </div>

        // </div>
        <div className="flex items-center justify-center min-h-screen text-white bg-gray-900">
            <div className="p-4 bg-purple-900 rounded-lg shadow-lg w-96">
                <div className="text-center">
                    <h1 className="my-4 text-3xl">Book Details</h1>
                    {/* {loading ? <Spinner /> : ''} */}
                </div>
                <div className="my-4">
                    {/* <label className="mr-4 text-xl text-white-400">Title</label> */}
                    <p className="text-1xl">Title : {books.title}</p>
                </div>
                <div className="my-4">
                    {/* <label className="mr-4 text-xl text-white-400">Author</label> */}
                    <p className=" text-1xl">Author: {books.author}</p>
                </div>
                <div className="my-4">
                    {/* <label className="mr-4 text-xl text-white-400">Publish Year</label> */}
                    <p className=" text-1xl">
                        Published Year: {books.publishyear}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShowBook;
