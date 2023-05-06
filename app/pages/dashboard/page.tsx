'use client'
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/nav";
import css from "globals";
import { Card, Switch, Row, Container, Spacer, Grid, Text, Link } from "@nextui-org/react";
// import Command from "@/app/components/command"
import React from 'react'
import { Command } from 'cmdk'
import {  Calculator,  Calendar,  CreditCard,  Settings,  Smile,  User, } from "lucide-react"


export default function Page() {

  const [open, setOpen] = React.useState(false)

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e: { key: string; metaKey: any }) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

    return (
    <>
    <Navbar/>
      {/* <Navbar/> */}
      <h1>Dashboard</h1>

      <Container fluid>
        <Text h4 className='topic1 '
        size={25}
        css={{textGradient: "45deg, $blue600 -20%, $pink600 50%",}}
        weight="bold">Startup Company Statistic</Text>

{/* <Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu">
      <Command.Input />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Letters">
          <Command.Item>a</Command.Item>
          <Command.Item>b</Command.Item>
          <Command.Separator />
          <Command.Item>c</Command.Item>
        </Command.Group>

        <Command.Item>Apple</Command.Item>
      </Command.List>
    </Command.Dialog> */}
        
        <Text h6 size={15} >number left</Text>

<Spacer y={2} />
        <Container className="grid-container-dashboard">
          <Row>

          <Card onClick={() => {
          window.open("../pages/about");}} 
        style={{ height: "50px", display: "flex", alignItems: "center" }}
        isPressable
        isHoverable>
            <Text css={{ p: "$1" ,display: "flex" }}>Rank</Text>
            <Text css={{ p: "$1" ,display: "flex" }}>Category : Company Name</Text>
            <Text css={{ p: "$1" ,display: "flex" }}>Revenue Growth</Text>
            <Text css={{ p: "$1" ,display: "flex" }}>Revenue Latest</Text>
            <Text css={{ p: "$1" ,display: "flex" }}>EBIJ</Text>
            <Text css={{ p: "$1" ,display: "flex" }}>Employee Growth 6</Text>
            <Text css={{ p: "$1" ,display: "flex" }}>Employee Growth 12</Text>
            <Text css={{ p: "$1" ,display: "flex" }}>Employee Growth 12</Text>
            </Card></Row>

        </Container>
      </Container>
      <Footer/>
      </>
    )
  }