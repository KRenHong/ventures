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
            <Text size="large" className="inline-block font-bold w-1/6">Incorporated Duration</Text>
            <Text size="large" className="inline-block font-bold w-1/6">Total Funding</Text>
        </div>

        <a href="#">
            <div className="mb-3 border-2 border-gray-500/50 p-4 rounded-lg shadow-lg cursor-pointer transition duration-300 hover:bg-indigo-100">
              <Text size="large" className="inline-block w-1/6">1</Text>
              <Text size="large" className="inline-block w-2/6">Fluxon</Text>
              <Text size="large" className="inline-block w-1/6">1 million</Text>
              <Text size="large" className="inline-block w-1/6">2 years</Text>
              <Text size="large" className="inline-block w-1/6">500 K</Text>
            </div>
        </a>

        <a href="#">
            <div className="mb-3 border-2 border-gray-500/50 p-4 rounded-lg shadow-lg cursor-pointer transition duration-300 hover:bg-indigo-100">
              <Text size="large" className="inline-block w-1/6">2</Text>
              <Text size="large" className="inline-block w-2/6">Qwibit</Text>
              <Text size="large" className="inline-block w-1/6">599 K</Text>
              <Text size="large" className="inline-block w-1/6">1 year</Text>
              <Text size="large" className="inline-block w-1/6">250 K</Text>
            </div>
        </a>

        <a href="#">
            <div className="mb-3 border-2 border-gray-500/50 p-4 rounded-lg shadow-lg cursor-pointer transition duration-300 hover:bg-indigo-100">
              <Text size="large" className="inline-block w-1/6">3</Text>
              <Text size="large" className="inline-block w-2/6">Innoventia</Text>
              <Text size="large" className="inline-block w-1/6">797 K</Text>
              <Text size="large" className="inline-block w-1/6">0.5 year</Text>
              <Text size="large" className="inline-block w-1/6">100 K</Text>
            </div>
        </a>


        <a href="#">
            <div className="mb-3 border-2 border-gray-500/50 p-4 rounded-lg shadow-lg cursor-pointer transition duration-300 hover:bg-indigo-100">
              <Text size="large" className="inline-block w-1/6">4</Text>
              <Text size="large" className="inline-block w-2/6">Veriform</Text>
              <Text size="large" className="inline-block w-1/6">2 million</Text>
              <Text size="large" className="inline-block w-1/6">3 years</Text>
              <Text size="large" className="inline-block w-1/6">500 K</Text>
            </div>
        </a>


        <a href="#">
            <div className="mb-3 border-2 border-indigo-500/50 p-4 rounded-lg shadow-lg cursor-pointer transition duration-300 hover:bg-indigo-100">
              <Text size="large" className="inline-block w-1/6">5</Text>
              <Text size="large" className="inline-block w-2/6">EdgeFlow</Text>
              <Text size="large" className="inline-block w-1/6">1.1 million</Text>
              <Text size="large" className="inline-block w-1/6">1.5 years</Text>
              <Text size="large" className="inline-block w-1/6">390 K</Text>
            </div>
        </a>

        


        </div>
      </section>
    </>
  );
}
