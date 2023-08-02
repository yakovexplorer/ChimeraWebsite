import React from 'react';

interface TableProps {
  endpoints: { url: string; desc: string }[];
}

const Table: React.FC<TableProps> = ({ endpoints }) => {
  return (
    <div className="overflow-x-auto ">
       <table className="table bg-gray-950 stat-title">
      <thead>
        <tr>
          <th>URL</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {endpoints.map((endpoint, index) => (
          <tr key={index} >
            <th>
              {endpoint.url}
            </th>
            <td>
              {endpoint.desc}
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default Table;
