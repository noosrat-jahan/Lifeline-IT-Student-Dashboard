import useNotice from "@/hooks/useNotice";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Notices = () => {
  const { notices, loading, error } = useNotice();
  return (
    <>
      <Helmet>
        <title>Notice — Lifeline IT</title>
      </Helmet>

      <div className="space-y-4 font-baloo">
        <h2 className="mb-4 text-2xl text-left font-semibold leading-tight">
          Notices
        </h2>
        {notices.map((notice) => (
          <div className="w-full rounded-xl p-4 shadow-lg text-left space-y-3">
            <h2>Date: 12, July, 2025</h2>
            <h1>{notice.title}</h1>
            <p>{notice.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notices;
