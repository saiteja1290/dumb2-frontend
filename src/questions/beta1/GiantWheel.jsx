import React from 'react'
import { useState } from 'react';
const GiantWheel = () => {
    const [userOutput, setUserOutput] = useState('');
    const expectedOutput = `Yes\nNo\nYes\nNo\nYes`; // Expected output string
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
                <h1 className="text-3xl font-bold mb-4">Giant Wheel</h1>
                <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                    <p className="mb-4">
                        Alice is visiting the amusement park!
                        <br />
                        Alice's height is <code>X</code> centimeters.
                        <br />
                        The park stipulates that the minimum height necessary to get on the giant wheel is 60 centimeters.
                    </p>
                    <p className="mb-4">
                        Will Alice be able to ride on the giant wheel?
                    </p>
                    <h2 className='text-lg font-semibold mt-6 my-2'>Input Format</h2>
                    <p className='mb-4'>
                        The first Line of input consists of number of test cases. The next corresponding lines contains a single integer in each line representing <code>X</code> - Alice Height
                    </p>
                    <h2 className='text-lg font-semibold mt-6 my-2'>Output Format</h2>
                    <p className='mb-4'>
                        Output the answer on a single line: "Yes" if Alice can ride the giant wheel, and "No" otherwise (without quotes).
                        <br />
                        Each letter of the output may be printed in either uppercase or lowercase.
                    </p>
                    <h2 className="text-lg font-semibold mt-6 my-2">Example</h2>
                    <h2 className="text-lg font-semibold mb-2">Input</h2>
                    <pre className="bg-gray-900 p-4 rounded-lg mb-4">
                        {`
120
                `}
                    </pre>
                    <h2 className="text-lg font-semibold mb-2">Output</h2>
                    <pre className="bg-gray-900 p-4 rounded-lg">
                        {`
Yes
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

export default GiantWheel