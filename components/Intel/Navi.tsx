'use client'
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navi = () => {
  const pathname = usePathname().substring(3);

  return (
    <div className="flex justify-center px-4 py-4">
      <div className="tabs tabs-boxed">
        <Link
          href="/intel"
          className={`tab ${pathname === "/intel" ? "tab-active" : "tab"}`}
        >
          General
        </Link>
        <Link
          href="/intel/samples"
          className={`tab ${pathname === "/intel/samples" ? "tab-active" : "tab"}`}
        >
          Examples
        </Link>
        <Link
          href="/intel/fastapi"
          className={`tab ${pathname === "/intel/fastapi" ? "tab-active" : "tab"}`}
        >
          FastApi
        </Link>
      </div>
    </div>
  );
};

export default Navi;
