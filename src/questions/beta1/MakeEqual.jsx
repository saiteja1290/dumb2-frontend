import React from 'react'
import { useState } from 'react';
const MakeEqual = () => {
    const [userOutput, setUserOutput] = useState('');
    const expectedOutput = `YES\nNO\nYES\nNO\nYES\nYES\nNO\nNO\nYES`; // Expected output string
    const [validationResult, setValidationResult] = useState('');

    const handleInputChange = (event) => {
        setUserOutput(event.target.value.trim()); // Trim input to remove extra spaces
    };

    const validateOutput = () => {
        if (userOutput === expectedOutput) {
            setValidationResult("Accepted");
        } else {
            setValidationResult("Rejected");
        }
    };
    return (
        <div className="bg-gray-800 text-white min-h-screen py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Make Equal</h1>
                <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                    <p className="mb-4">
                        You are given an array <code>A</code> of length <code>N</code>. You can perform the following operation on it:
                        <br />
                        Choose any index <code>i</code> such that <code>1 &lt; i &lt; N</code> and <code>A[i]</code> is not smaller than either of its neighbors, i.e., both <code>A[i] ≥ A[i-1]</code> and <code>A[i] ≥ A[i+1]</code> are true.
                        <br />
                        Then, decrease <code>A[i]</code> by 1.
                        <br />
                        Is it possible to make all the elements of <code>A</code> equal by performing this operation several (possibly, zero) times?
                    </p>
                    <h2 className='text-lg font-semibold mt-6 my-2'>Input Format</h2>
                    <p className='mb-4'>
                        The first line of input will contain a single integer <code>T</code>, denoting the number of test cases.
                        <br />
                        Each test case consists of two lines of input.
                        <br />
                        The first line of each test case contains <code>N</code> — the number of elements in <code>A</code>.
                        <br />
                        The second line of each test case contains <code>N</code> space-separated integers <code>A[1], A[2], ..., A[N]</code>, denoting the array <code>A</code>.
                    </p>
                    <h2 className='text-lg font-semibold mt-6 my-2'>Output Format</h2>
                    <p className='mb-4'>
                        For each test case, output on a new line the answer: "Yes" if it is possible to make all the elements of <code>A</code> equal, and "No" otherwise (without quotes).
                        <br />
                        Each letter of the output may be printed in either uppercase or lowercase.
                    </p>
                    <h2 className="text-lg font-semibold mt-6 my-2">Example</h2>
                    <h2 className="text-lg font-semibold mb-2">Input</h2>
                    <pre className="bg-gray-900 p-4 rounded-lg mb-4">
                        {`
3
1
1
4
1 3 2 1
7
2 4 5 1 4 5 3
                `}
                    </pre>
                    <h2 className="text-lg font-semibold mb-2">Output</h2>
                    <pre className="bg-gray-900 p-4 rounded-lg">
                        {`
YES
YES
NO
                `}
                    </pre>
                    <div className="mt-6">
                        <a
                            href="/giantwheel.txt"
                            download="giantwheel.txt"
                            className="text-blue-200 hover:underline font-extrabold"
                        >
                            Download Input (Download this and run)
                        </a>
                    </div>
                    <h2 className="text-lg font-semibold mt-6 mb-2">User Output</h2>
                    <h2 className="text-md font-semibold mt-6 mb-2">Paste your terminal Output here with downloaded input test cases</h2>
                    <textarea
                        className="bg-gray-900 p-2 rounded-lg w-full h-48"
                        value={userOutput}
                        onChange={handleInputChange}
                    />

                    {/* Validate button */}
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
                        onClick={validateOutput}
                    >
                        Validate
                    </button>

                    {/* Validation result */}
                    {validationResult && (
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold mb-2">Validation Result</h2>
                            <p className="text-lg">{validationResult}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default MakeEqual