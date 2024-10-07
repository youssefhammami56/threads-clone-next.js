import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from '@clerk/nextjs'
import { Providers } from "@/providers/providers";
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopBar from '@/components/shared/TopBar'
import LeftSideBar from '@/components/shared/LeftSideBar'
import RightSideBar from '@/components/shared/RightSideBar'
import BottomBar from '@/components/shared/BottomBar'
import { Component } from "lucide-react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Threads',
  description: 'A Next.js 13 Threads Application',
}

export default function RootLayout({ children, } : { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>
      <Providers>
          <main className='flex flex-row'>
            <section className='main-container'>
              <div className='w-full max-w-4xl'>{children}</div>
            </section>
          </main>
        </Providers>
          </body>
      </html>
    </ClerkProvider>
    
  )
}

