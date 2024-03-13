import React, { useEffect, useState } from "react";
import axios from "axios";
// import Spinner from "../components/spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faJs } from "@fortawesome/free-brands-svg-icons";

const Contest_2 = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState("table");
    const backEndUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${backEndUrl}/books`)
            .then((response) => {
                const arr_1 = response.data.data;
                const actualarr = [];
                for (let index = 0; index < arr_1.length; index++) {
                    const element = arr_1[index].contest;
                    if (element == 2) {
                        actualarr.push(arr_1[index])
                    }

                }
                // console.log(actualarr)
                // setBooks(actualarr);
                const arr = actualarr;

                // Sorting books by branch and then by rank
                arr.sort((a, b) => {
                    if (a.branch !== b.branch) {
                        return a.branch.localeCompare(b.branch);
                    }
                    return a.rank - b.rank;
                });

                // Assigning branch ranks
                let branchRanks = {};
                let currentBranch = '';
                let currentBranchRank = 1;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].branch !== currentBranch) {
                        currentBranch = arr[i].branch;
                        currentBranchRank = 1;
                    }
                    arr[i].branchRank = currentBranchRank++;
                    branchRanks[arr[i].branch] = currentBranchRank - 1;
                }

                // Assigning overall ranks
                let overallRank = 1;
                for (let i = 0; i < arr.length; i++) {
                    arr[i].overallRank = overallRank++;
                }

                setBooks(arr);
                setLoading(false);
                // setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen text-white bg-gray-900">
            <header className="p-4 text-center">
                <h1 className="text-3xl font-bold">Leaderboard</h1>
            </header>
            <div className="relative overflow-x-auto m-8 rounded-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Branch
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Branch Rank
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rank
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr
                                key={book.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {book.username}
                                </td>
                                <td className="px-6 py-3">{book.branch}</td>
                                <td className="px-6 py-3">{book.branchRank}</td>
                                <td className="px-6 py-3">{book.overallRank}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Contest_2;
