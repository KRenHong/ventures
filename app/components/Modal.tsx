'use client';

import CircularProgressBar from "@/app/components/CircularProgressBar";
import { use, useEffect, useState } from "react";

type ModalProps = {
    toggleModal: () => void,
    children?: React.ReactNode
  };

const AnalyticsModal = ({ toggleModal, children }: ModalProps) => {
  const value = 30;

  return (
    <div className="bg-gray-100 fixed inset-0 z-50 flex flex-col gap-8 items-center justify-center mx-auto overflow-x-hidden overflow-y-auto outline-none focus:outline-none">       
      <svg
          className="fill-current w-4 h-4 mr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={toggleModal}
        >
          <path d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z" />
        </svg>

        <div className="mx-auto">
          <div className="flex gap-5">
            <CircularProgressBar value={value} />
            <div className="bg-white p-6 rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-4">Key Points of the Company</h2>
              <p>...</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Analytics Board</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Growth of the company */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-4">Growth of the Company</h2>
              <p>...</p>
            </div>

            {/* Possibilities to get IPO */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-4">
                Possibilities to Get IPO
              </h2>
              <p>...</p>
            </div>

            {/* Founding team members assessment */}
            <div className="bg-white p-6 rounded-md shadow-md col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">
                Founding Team Members Assessment
              </h2>
              <p>...</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default AnalyticsModal;
