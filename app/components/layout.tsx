import React, { PropsWithChildren } from "react";
import Navbar from './nav';
import Footer from './footer';

  
  export default function RootLayout({ 
    children, }:{children: React.ReactNode}) {
    return (
        <React.Fragment>
      <html lang="en">
        <Navbar />
        <body>{children}</body>
      </html>
     <Footer />
     </React.Fragment>
    );
  }