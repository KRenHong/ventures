/* eslint-disable @next/next/no-img-element */
"use client";
  import Image from 'next/image'
  import { useState, useEffect } from 'react';
  import Nav from './components/nav'
  import { AppProps } from 'next/app';
  import Navbar from './components/nav';
  import { ThemeProvider } from "next-themes";
  import { Card, Switch, Row, Container, Spacer, Grid, Text, Link } from "@nextui-org/react";




  export default function Home() {


    return (
      <>
        <Navbar/>
        <Text h4
        size={25}
        css={{textGradient: "45deg, $blue600 -20%, $pink600 50%",}}
        weight="bold">Hello Test to change colour</Text>
        <Text b>Hello Test to change colour</Text>
{/* Top 1 */}
<Container fluid>
<Row justify="center" align="center">
<Spacer y={1} />
        <Card 
        onClick={() => {
          window.open("../pages/about");
        }}
        isPressable 
        isHoverable 
        variant="bordered" 
        css={{ p: "$6", mw: "400px" }}
        >
          <Card.Header>
          <img
          alt="nextui logo"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width="34px"
          height="34px"
        />
        <Grid.Container  css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              Next UI
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>nextui.org</Text>
          </Grid>
        </Grid.Container>
          </Card.Header>
      <Card.Body css={{ py: "$2" }}>
      <Text>
          Make beautiful websites regardless of your design experience.
        </Text>
      </Card.Body>
    </Card>
{/* Top 2 */}
<Spacer y={1} />
    <Card 
        onClick={() => {
          window.open("../pages/about");
        }}
        isPressable 
        isHoverable 
        variant="bordered" 
        css={{ p: "$6", mw: "400px" }}
        >
          <Card.Header>
          <img
          alt="nextui logo"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width="34px"
          height="34px"
        />
        <Grid.Container  css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              Next UI
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>nextui.org</Text>
          </Grid>
        </Grid.Container>
          </Card.Header>
      <Card.Body css={{ py: "$2" }}>
      <Text>
          Make beautiful websites regardless of your design experience.
        </Text>
      </Card.Body>
    </Card>
{/* Top 3 */}
<Spacer y={1} />
    <Card 
        onClick={() => {
          window.open("../pages/about");
        }}
        isPressable 
        isHoverable 
        variant="bordered" 
        css={{ p: "$6", mw: "400px" }}
        >
          <Card.Header>
          <img
          alt="nextui logo"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width="34px"
          height="34px"
        />
        <Grid.Container  css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              Next UI
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>nextui.org</Text>
          </Grid>
        </Grid.Container>
          </Card.Header>
      <Card.Body css={{ py: "$2" }}>
      <Text>
          Make beautiful websites regardless of your design experience.
        </Text>
      </Card.Body>
    </Card>
    </Row>
    </Container>
        {/* <div className="relative group">
                          <div className="absolute transition duration-1000 rounded-md -inset-1 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-400 dark:to-primary-300 opacity-20 group-hover:duration-200 group-hover:opacity-100 blur" />
                          <div className="relative p-5 mb-6 transition duration-200 bg-white border rounded-md group-hover:text-white group-hover:bg-gradient-to-r dark:group-hover:from-primary-400 dark:group-hover:to-primary-300 group-hover:from-primary-100 group-hover:to-primary-200 bg-gradient-to-r dark:bg-black dark:border-gray-700">
                            <h1 className="absolute text-6xl font-bold transform opacity-20 right-12 rotate-12 bottom-12 sm:text-7xl md:text-8xl">

                            </h1>
                            <div className="flex">
                              <h4 className="pr-4">
                                Stock Trend Next Days: 1
                              </h4>
                              <h4>                             
                              </h4>
                            </div>
                            
                            <div className="flex">
                              <h4 className="pr-4">
                                Stock Trend Next Days: 2
                              </h4>
                              <h4>                             
                              </h4>
                            </div>

                            <div className="flex">
                              <h4 className="pr-4">
                                Stock Trend Next Days: 
                              </h4>
                              <h4>                             
                              </h4>
                            </div>

                          </div>
                        </div> */}

      </>
    )
  }
