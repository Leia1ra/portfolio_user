import type { Metadata } from 'next'
import './globals.css'
import Link from "next/link";
import React from "react";
import Head from "next/head";
export const metadata: Metadata = {
    title: 'portfolio',
    description: '',

}
function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="user-scalable=0;"/>
        </head>
        <body>
        <header className="main-header">
            <h1><Link href="/">주인장 정보</Link></h1>
            <div className="main-header-section-line"></div>
            <nav>
                <Link href={"/resume"}>Resume</Link>
                {/*<Link href={"/guest"}>GuestBook</Link>*/}
            </nav>
        </header>
        {children}
        </body>
        </html>
    )
}

export default RootLayout;