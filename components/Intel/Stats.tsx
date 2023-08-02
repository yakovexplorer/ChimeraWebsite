import React from "react";
import Image from "next/image";

type EndpointData = {
  works: boolean;
  status?: string;
};

type ServiceStatusIndicatorProps = {
  endpoints: Record<string, EndpointData>;
};

const ServiceStatusIndicator: React.FC<ServiceStatusIndicatorProps> = ({
  endpoints,
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 mb-4 shadow es md:grid-cols-2 lg:grid-cols-3">
      {Object.entries(endpoints).map(([endpoint, data], index) => (
        <div key={endpoint} className="rounded-lg bg-gray-950 stat">
          <div className="stat-figure text-primary">
            <Image
              src={
                data.works
                  ? "/assets/Icons/checkmark.svg"
                  : "/assets/Icons/xmark.svg"
              }
              width={32}
              height={32}
              alt=""
            />
          </div>
          <div className="stat-title">{endpoint}</div>
          <div
            className={`stat-value ${
              index % 2 === 0 ? "text-secondary" : "text-primary"
            }`}
          >
            {data.works ? <>Operational</> : <>Error</>}
          </div>
          {endpoint === "/api/v1/images/generations" ? (
            <div className="stat-desc"></div>
          ) : (
            <div className="stat-desc">{data.status}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceStatusIndicator;
