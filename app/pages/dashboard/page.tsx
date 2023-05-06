'use client'
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/nav";
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

<Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu">
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
    </Command.Dialog>
        
        <Text h5 className='text-primary-100 dark:text-primary-300' size={15}>Search Bar</Text>
        <Text h6 size={15} >number left</Text>

<Spacer y={2} />
        <Row justify="center" align="center">
            <div className="grid lg:grid-cols-5 gap-4 p-4">
                <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
                    <div className="flex flex-col w-full pb-4">
                        <p className="text- 2xl font-bold">7000</p>
                    </div>
                </div>
            </div>

        </Row>
      </Container>
      <Footer/>
      </>
    )
  }