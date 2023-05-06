'use client';

import Navbar from "@/app/components/nav";
import { Input, Text, Button, css} from "@nextui-org/react";
import { useState } from "react";

const inputStyle = {
  width: '500px',
  height: '30px',
};

const buttonStyle = {
  width: '520px',
  height: '50px',

};


export default function Predict() {
  const [revenue, setRevenue] = useState(0);
  const [duration, setDuration] = useState(0);
  const [funding, setFunding] = useState(0);
  const [sector, setSector] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  const handlePredict = () => {
    // Use the values stored in the state variables here
    setShowOutput(true);
    let arr = [revenue, duration, funding, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // change the type of sector into int
    arr[parseInt(sector)] = 1;
    console.log(arr);

  };


  return (
    <>
      <Navbar />

      <section className="py-12 px-12 mx-auto">
        <div className="px-12 max-w-7xl min-h-screen mx-auto">
          <h1 className="text-4xl font-bold mb-8">Prediction</h1>
          <Text className="mb-3" size="$xl">
            Revenue
          </Text>
          <Input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(parseFloat(e.target.value))}
            style={inputStyle}
            rounded
            bordered
            placeholder="Revenue"
            color="primary"
            className="mb-8"
          />
          <Text className="mb-3" size="$xl">
            Incorporated Duration
          </Text>
          <Input
            type="number"
            value={duration}
            onChange={(e) => setDuration(parseFloat(e.target.value))}
            style={inputStyle}
            rounded
            bordered
            placeholder="Duration"
            color="primary"
            className="mb-8"
          />
          <Text className="mb-3" size="$xl">
            Total last funding
          </Text>
          <Input
            type="number"
            value={funding}
            onChange={(e) => setFunding(parseFloat(e.target.value))}
            style={inputStyle}
            rounded
            bordered
            placeholder="Funding"
            color="primary"
            className="mb-8"
          />
          <Text className="mb-3" size="$xl">
            Sector
          </Text>
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            style={inputStyle}
            className="border-2 border-gray-500/50 rounded form-select mb-8"
          >
            <option value="3">Technology</option>
            <option value="4">Business Services</option>
            <option value="5">Health & Wellness</option>
            <option value="6">Media & Entertainment</option>
            <option value="7">Finance & Fintech</option>
            <option value="8">Manufacturing & Industry</option>
            <option value="9">Environment & Sustainability</option>
            <option value="10">Consumer Goods & Retail</option>
            <option value="11">Education & EdTech</option>
            <option value="12">Travel & Hospitality</option>
          </select>

          <Button
            id="predictButton"
            style={buttonStyle}
            auto
            shadow
            color="gradient"
            size="xl"
            className="mb-8"
            css={{
              "&:hover": {
                background: "$purple100",
                color: "$pink800",
              },
              "&:active": {
                background: "$purple300",
              },
              "&:focus": {
                borderColor: "$pink400",
              },
            }}
            onClick={handlePredict}
          >
            Predict
          </Button>
        </div>
      </section>

    </>
  );
}
