import React from 'react'

const Question_1 = () => {
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
                    <h2 className="text-lg font-semibold mt-6">Example</h2>
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
pppiepieeee`
                        }
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

                </div>
            </div>
        </div>

    )
}

export default Question_1