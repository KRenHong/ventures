'use client';

import CircularProgressBar from "@/app/components/CircularProgressBar";
import Navbar from "@/app/components/nav";


export default function Analytics() {
  const value = 80;
  return (
    <>
      <Navbar />  

      {/* Create a gauge chart for the growth of the company */}
      <section className="bg-gray-100 py-12 px-6 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <CircularProgressBar value={value} />
            </div>
            <div className="col-span-3 bg-white p-6 rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-4">Key Points of the Company</h2>
              <p>Product/Service: The startup offers a unique, innovative product or service that solves a pressing problem for its target market. Business Model: The startup has a scalable business model that can support rapid growth and profitability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 min-h-screen py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Analytics Board</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Growth of the company */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-4">Growth of the Company</h2>
              <p>The startup has a clear growth strategy, with a focus on customer acquisition, product development, and market expansion.</p>
            </div>

            {/* Possibilities to get IPO */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-4">
                Possibilities to Get IPO
              </h2>
              <p>The startup has the potential to go public via an initial public offering (IPO) within the next 3-5 years, based on its growth trajectory, market opportunity, and financial performance. However, the decision to pursue an IPO will be based on a careful assessment of market conditions and the company's long-term growth prospects.</p>
            </div>

            {/* Founding team members assessment */}
            <div className="bg-white p-6 rounded-md shadow-md col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">
                Founding Team Members Assessment
              </h2>
              <p>The founding team has a strong track record of success in their respective fields, with the expertise and experience needed to execute on the startup's vision.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
