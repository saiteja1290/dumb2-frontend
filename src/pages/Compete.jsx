import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Compete = () => {
    const [remainingTime, setRemainingTime] = useState('');
    const [timerFinished, setTimerFinished] = useState(false);

    useEffect(() => {
        const targetDate = new Date('April 22, 2024 20:30:00 GMT+0530'); // April 22nd, 8:30 PM IST
        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(intervalId);
                setRemainingTime('Contest has started');
                setTimerFinished(true);
            } else {
                const hours = Math.floor(distance / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setRemainingTime(`${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="min-h-screen text-white bg-gray-900 font-mono">
            <center>
                <div className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white">Contests</div>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Contests are weekly global coding competitions held on Mondays. These Contests are called Starters. When you participate in rated contests, you improve your CodeChef rating that reflects on your profile. Coders start with 0* and can reach all the way till 7* as they participate more and more in contests.</p>

                <div className="relative overflow-x-auto px-5 ">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-md">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Code
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Start
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Duration
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Starts in
                                </th>
                                {timerFinished && (
                                    <>
                                        <th scope="col" className="px-6 py-3">
                                            Less go
                                        </th>
                                    </>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    BT1
                                </th>
                                <td className="px-6 py-4">
                                    Beta Test #1
                                </td>
                                <td className="px-6 py-4">
                                    22nd April 8:30 PM IST
                                </td>
                                <td className="px-6 py-4">
                                    2 Hours
                                </td>
                                <td className="px-6 py-4">
                                    {remainingTime}
                                </td>
                                {timerFinished && (
                                    <>
                                        <td className="px-6 py-4">
                                            <Link to={'/bt1'}>Click Here to View Questions</Link>
                                        </td>
                                    </>
                                )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </center>
        </div>
    );
}

export default Compete;
