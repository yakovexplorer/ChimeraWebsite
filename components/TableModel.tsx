import React from 'react';

type Model = {
  id: number;
  object: string;
  owned_by: string;
  tokens: number;
  endpoints: string[];
  limits: string[] | null;
};

type ModelTableProps = {
  data: Model[];
};

const ModelTable: React.FC<ModelTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table bg-gray-950 text-gray-500">
        <thead>
          <tr>
            <th>ID</th>
            <th>Object</th>
            <th>Owned By</th>
            <th>Tokens</th>
            <th>Endpoints</th>
            <th>Limits</th>
          </tr>
        </thead>
        <tbody>
          {data.map((model: Model) => (
            <tr key={model.id} >
              <th>{model.id}</th>
              <td>{model.object}</td>
              <td>{model.owned_by}</td>
              <td>{model.tokens}</td>
              <td>{model.endpoints.join(', ')}</td>
              <td>
                {model.limits ? model.limits.join(', ') : 'No limits'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
};

export default ModelTable;
