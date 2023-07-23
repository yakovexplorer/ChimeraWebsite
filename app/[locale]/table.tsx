
import React, { useState, useEffect } from 'react'
interface RouteData {
    [key: string]: string;
}

interface ResponseData {
    routes: RouteData;
}


const MAX_ROWS = 5;
export default function ProductTable({ apiEndpoint }: any) {
    const [responseData, setResponseData] = useState<ResponseData | null>(null);
    const [showMore, setShowMore] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiEndpoint);
                const data: ResponseData = await response.json();
                setResponseData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [apiEndpoint]);

    const toggleShowMore = () => {
        setShowMore((prevShowMore) => !prevShowMore);
    };

    if (!responseData) {
        return <div>Loading...</div>;
    }

    const displayedData = showMore
        ? Object.entries(responseData?.routes || {})
        : Object.entries(responseData?.routes || {}).slice(0, MAX_ROWS);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-gray-800 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Route
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Endpoint
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {displayedData.map(([key, value]) => (
                        <tr
                            key={key}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {key}
                            </td>
                            <td className="px-6 py-4">{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {!showMore && Object.entries(responseData?.routes || {}).length > MAX_ROWS && (
                <button
                    className="text-blue-500 hover:underline mt-2"
                    onClick={toggleShowMore}
                >
                    Show More
                </button>
            )}
            {showMore && (
                <button
                    className="text-blue-500 hover:underline mt-2"
                    onClick={toggleShowMore}
                >
                    Show Less
                </button>
            )}
        </div>
    );
};