import React, { useState } from 'react';

const Question_1 = () => {
    const [userOutput, setUserOutput] = useState('');
    const expectedOutput = `2\n0\n2\n6\n0\n2`; // Expected output string
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
                <h1 className="text-3xl font-bold mb-4">Rudolf and the Ugly String</h1>
                <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                    <p className="mb-4">
                        Rudolf has a string <code>s</code> of length <code>n</code>. Rudolf considers the string <code>s</code> to be ugly if it contains the substring "pie"
                        or the substring "map", otherwise the string <code>s</code> will be considered beautiful.
                    </p>
                    <p className="mb-4">
                        Rudolf wants to shorten the string <code>s</code> by removing some characters to make it beautiful.
                        The main character doesn't like to strain, so he asks you to make the string beautiful by removing the minimum number of characters.
                        He can remove characters from any positions in the string (not just from the beginning or end of the string).
                    </p>
                    <p className="mb-4">
                        String <code>a</code> is a substring of <code>b</code> if there exists a consecutive segment of characters in string <code>b</code> equal to <code>a</code>.
                    </p>
                    <h2 className='text-lg font-semibold mt-6 my-2'>Input Format</h2>
                    <p className='mb-4'>The first line contains a single integer t
                        (1≤t≤104
                        ) — the number of test cases. The descriptions of the test cases follow.

                        The first line of each test case contains a single integer n
                        (1≤n≤106
                        ) — the length of the string s
                        .

                        The next line of each test case contains the string s
                        of length n
                        . The string s
                        consists of lowercase Latin letters.

                        The sum of n
                        over all test cases does not exceed 106
                        .</p>
                    <h2 className='text-lg font-semibold mt-6 my-2'>Output Format</h2>
                    <p className='mb-4'>The first line contains a single integer t
                        (1≤t≤104
                        ) — the number of test cases. The descriptions of the test cases follow.

                        The first line of each test case contains a single integer n
                        (1≤n≤106
                        ) — the length of the string s
                        .

                        The next line of each test case contains the string s
                        of length n
                        . The string s
                        consists of lowercase Latin letters.

                        The sum of n
                        over all test cases does not exceed 106
                        .</p>
                    <h2 className="text-lg font-semibold mt-6 my-2">Example</h2>
                    <h2 className="text-lg font-semibold mb-2">Input</h2>
                    <pre className="bg-gray-900 p-4 rounded-lg mb-4">
                        {`
6
9
mmapnapie
9
azabazapi
8
mappppie
18
mapmapmapmapmapmap
1
p
11
pppiepieeee`}
                    </pre>
                    <h2 className="text-lg font-semibold mb-2">Output</h2>
                    <pre className="bg-gray-900 p-4 rounded-lg">
                        {`
2
0
2
6
0
2`}
                    </pre>

                    {/* Download link for input.txt */}
                    <div className="mt-6">
                        <a
                            href="/input.txt"
                            download="input.txt"
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
    );
};

export default Question_1;
