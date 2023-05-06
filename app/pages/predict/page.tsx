'use client';

import Navbar from "@/app/components/nav";
import { Input, Text, Button, css} from "@nextui-org/react";

const inputStyle = {
  width: '500px',
  height: '30px',
};

const buttonStyle = {
  width: '520px',
  height: '50px',

};


export default function Predict() {
  return (
    <>
      <Navbar />

      <section className="py-12 px-12 mx-auto">
        <div className="px-12 max-w-7xl min-h-screen mx-auto">
          <h1 className="text-4xl font-bold mb-8">Prediction</h1>
          <Text className="mb-3" size="$xl">Revenue</Text>
          <Input style={inputStyle} rounded bordered placeholder="Revenue" color="primary" className="mb-8"/>
          <Text className="mb-3" size="$xl">Earnings</Text>
          <Input style={inputStyle} rounded bordered placeholder="Earnings" color="primary" className="mb-8"/>
          <Text className="mb-3" size="$xl">Number of employee</Text>
          <Input style={inputStyle} rounded bordered placeholder="Number of employee" color="primary" className="mb-8"/>
          <Text className="mb-3" size="$xl">Total last funding</Text>
          <Input style={inputStyle} rounded bordered placeholder="Funding" color="primary" className="mb-8"/>

          <Button id="predictButton" style={buttonStyle} auto shadow color="gradient" size="xl" className="mb-8"
          css={{
            '&:hover': {
              background: '$purple100',
              color: '$pink800',
            },
            '&:active': {
              background: '$purple300',
            },
            '&:focus': {
              borderColor: '$pink400',
            },
          }}
          >Predict</Button>
        </div>
      </section>
    </>
  );
}
