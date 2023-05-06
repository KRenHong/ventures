/* eslint-disable @next/next/no-img-element */
"use client";
  import Image from 'next/image'
  import { useState, useEffect } from 'react';
  import Nav from './components/nav'
  import Footer from './components/footer'
  import { AppProps } from 'next/app';
  
  import { ThemeProvider } from "next-themes";
  import Layout from "./components/layout";
  import { Card, Switch, Row, Container, Spacer, Grid, Text, Link, useTheme } from "@nextui-org/react";
  import { useTheme as useNextTheme } from 'next-themes'
import Navbar from './components/nav';

  export default function Home() {


    return (
      <>
        <Navbar/>
        
{/* Top 1 */}
<Container fluid>


<Text h4 className='topic1 '
        size={25}
        css={{textGradient: "45deg, $blue600 -20%, $pink600 50%",}}
        weight="bold">Hello Test to change colour</Text>
        <Text b className='text-primary-100 dark:text-primary-300'>Hello Test to change colour</Text>

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

    <Text h4 className='topic1 '
        size={25}
        css={{textGradient: "45deg, $blue600 -20%, $pink600 50%",}}
        weight="bold">PDF reader</Text>
        <Text b className='text-primary-100 dark:text-primary-300'>Hello Test to change colour</Text>

    </Container>
       <Footer/>
      </>
    )
  }
