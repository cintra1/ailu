"use client";

import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'
import NextNProgress from 'nextjs-progressbar'

const Layout = ({ children }: {children: React.ReactNode }) => {
  return (
    <>
      <main className='root'>
        <Sidebar />
        <MobileNav /> 
        <NextNProgress />
          <div className="root-container">
              <div className="wrapper">
                   {children}
              </div>
      </div>
      
        <Toaster />
      </main>
      </>
  )
}

export default Layout