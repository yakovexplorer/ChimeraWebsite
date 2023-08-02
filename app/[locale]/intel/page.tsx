import Table from "@/components/Table";
import ModelTable from "@/components/TableModel";
import { ServiceUrls } from "@/constants/const.d";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import CodeSampler from "@/components/CodeSampler";
import Stats from "@/components/Intel/Stats";
async function getData() {
  const res = await fetch("https://chimeragpt.adventblocks.cc/api/v1/models");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getStatus() {
  const status = await fetch(
    "https://chimeragpt.adventblocks.cc/api/v1/status"
  );
  if (!status.ok) {
    throw new Error("Failed to fetch data");
  }
  return status.json();
}
const Intel = async () => {
  const endpoints = Object.values(ServiceUrls);
  const data = await getData();
  const status = await getStatus();

  return (
    <div className="dark:bg-gray-900">
      <div className="container px-4 py-4 mx-auto ">
        <Stats endpoints={status.endpoints} />

        <div className="flex flex-col gap-2 md:flex-row">
          <div className="p-1">
            <Table endpoints={endpoints} />
          </div>
          <div className="p-1">
            <ModelTable data={data.data} />
          </div>
        </div>
      </div>
      <CodeSampler />
    </div>
  );
};

export default Intel;
