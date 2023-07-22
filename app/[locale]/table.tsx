
export default function ProductTable() {
    //Todo, Make it dynamic!!!!!!
    const products = [
        { name: '/v1/chat/completions', requests: '3 070 189+', },
        { name: '/v1/images/generations', requests: '63 412+',  },
        { name: '/v1/completions', requests: '32 400+',  },
        { name: '/v1/embeddings', requests: '69 342+',  },
        { name: '/v1/audio/transcriptions', requests: '23 093+', },
        { name: '/v1/moderations', requests: '8 532+',  }
    ];

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-gray-800 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Endpoint</th>
                        <th scope="col" className="px-6 py-3">Requests</th>
                        
                        
                        <th scope="col" className="px-6 py-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.name}</th>
                            <td className="px-6 py-4">{product.requests}</td>
                            
                            
                            <td className="px-6 py-4">
                                <p className="text-green-600 font-bold">Operational</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

