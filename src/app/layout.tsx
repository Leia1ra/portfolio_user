import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}
function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <header className="main-header">
                    <h1><a href="">주인장 정보</a></h1>
                    <div className="main-header-section-line"></div>
                    <div>
                        <a href="/resume">Resume</a>
                        <a href="/guest">GuestBook</a>
                    </div>
                </header>
                {children}
            </body>
        </html>
    )
}

export default RootLayout;