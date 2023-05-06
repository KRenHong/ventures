/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from 'react';
import Nav from './components/nav'
import Footer from './components/footer'

import { Card, Switch, Row, Container, Spacer, Grid, Text, Link, useTheme, Col } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes'
import Navbar from './components/nav';
import AnalyticsModal from './components/Modal';

export default function Home() {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };


  return (
    <div className='h-screen w-screen flex flex-col'>
      <Navbar/>

    { modal && <AnalyticsModal toggleModal={toggleModal} /> }
  <div className='bg-black-100 flex flex-col gap-4 align-center justify-center px-4 py-10 mx-auto'>
    
    <div onClick={toggleModal} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Company</h5>
          <Text css={{ color: "$accents8" }}>nextui.org</Text>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
    </div>

    <div onClick={toggleModal} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Company</h5>
          <Text css={{ color: "$accents8" }}>nextui.org</Text>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
    </div>

    <div onClick={toggleModal} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Company</h5>
          <Text css={{ color: "$accents8" }}>nextui.org</Text>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
    </div>
      </div>
        </div>
    )
  }
