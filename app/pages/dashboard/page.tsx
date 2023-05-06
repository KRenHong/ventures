'use client';

import Navbar from "@/app/components/nav";
import { Input, Text, Button, css, Card} from "@nextui-org/react";


const inputStyle = {
  width: '1170px',
}

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <section className="py-12 px-12 mx-auto">
        <div className="px-12 max-w-7xl min-h-screen mx-auto">
          <h1 className="text-4xl font-bold mb-8">Company Statistics</h1>

          <Input
            bordered
            rounded
            size="xl"
            placeholder="Search for a company"
            color="primary"
            style={inputStyle}
            className="mb-8"
          />

        <div className="bg-gray-300 p-4 rounded-lg shadow-lg mb-5">
            <Text size="large" className="inline-block font-bold w-1/6">Rank</Text>
            <Text size="large" className="inline-block font-bold w-2/6">Name</Text>
            <Text size="large" className="inline-block font-bold w-1/6">Revenue</Text>
            <Text size="large" className="inline-block font-bold w-1/6">Total Raised</Text>
            <Text size="large" className="inline-block font-bold w-1/6">Employee</Text>
        </div>

        <a href="#">
            <div className="mb-3 border-2 border-indigo-500/50 p-4 rounded-lg shadow-lg cursor-pointer transition duration-300 hover:bg-indigo-100">
              <Text size="large" className="inline-block w-1/6">1</Text>
              <Text size="large" className="inline-block w-2/6">6ixNine</Text>
              <Text size="large" className="inline-block w-1/6">1 Billion</Text>
              <Text size="large" className="inline-block w-1/6">69 billion</Text>
              <Text size="large" className="inline-block w-1/6">500</Text>
            </div>
        </a>

        <a href="#">
            <div className="mb-3 border-2 border-indigo-500/50 p-4 rounded-lg shadow-lg cursor-pointer transition duration-300 hover:bg-indigo-100">
              <Text size="large" className="inline-block w-1/6">1</Text>
              <Text size="large" className="inline-block w-2/6">6ixNine</Text>
              <Text size="large" className="inline-block w-1/6">1 Billion</Text>
              <Text size="large" className="inline-block w-1/6">69 billion</Text>
              <Text size="large" className="inline-block w-1/6">500</Text>
            </div>
        </a>

        <a href="#">
            <div className="mb-3 border-2 border-indigo-500/50 p-4 rounded-lg shadow-lg cursor-pointer transition duration-300 hover:bg-indigo-100">
              <Text size="large" className="inline-block w-1/6">1</Text>
              <Text size="large" className="inline-block w-2/6">6ixNine</Text>
              <Text size="large" className="inline-block w-1/6">1 Billion</Text>
              <Text size="large" className="inline-block w-1/6">69 billion</Text>
              <Text size="large" className="inline-block w-1/6">500</Text>
            </div>
        </a>


        <a href="#">
            <div className="mb-3 border-2 border-indigo-500/50 p-4 rounded-lg shadow-lg cursor-pointer transition duration-300 hover:bg-indigo-100">
              <Text size="large" className="inline-block w-1/6">1</Text>
              <Text size="large" className="inline-block w-2/6">6ixNine</Text>
              <Text size="large" className="inline-block w-1/6">1 Billion</Text>
              <Text size="large" className="inline-block w-1/6">69 billion</Text>
              <Text size="large" className="inline-block w-1/6">500</Text>
            </div>
        </a>


        <a href="#">
            <div className="mb-3 border-2 border-indigo-500/50 p-4 rounded-lg shadow-lg cursor-pointer transition duration-300 hover:bg-indigo-100">
              <Text size="large" className="inline-block w-1/6">1</Text>
              <Text size="large" className="inline-block w-2/6">6ixNine</Text>
              <Text size="large" className="inline-block w-1/6">1 Billion</Text>
              <Text size="large" className="inline-block w-1/6">69 billion</Text>
              <Text size="large" className="inline-block w-1/6">500</Text>
            </div>
        </a>

        


        </div>
      </section>
    </>
  );
}
