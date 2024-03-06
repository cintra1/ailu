'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'

const Sidebar = () => {
    const pathname = usePathname();

  return (
    <aside className='sidebar'>
        <div className="flex size-full flex-col gap-4">
            <Link href="/" className='sidebar-logo'>
                <Image src="/assets/images/ailu-texto-sem-fundo.png" alt="logo" width={150} height={28} />
            </Link>

            <nav className='sidebar-nav'>
                <SignedIn>
                    <ul className='sidebar-nav_elements'>
                        {navLinks.slice(0, 6).map((link) =>{
                            const isActive = link.route === pathname

                            return(
                                <li key={link.route} className={`sidebar-nav_element group ${
                                    isActive ? 'text-black-menu p-16-semibold-t' : 'text-gray-menu'
                                }`}>
                                    <Link className='sidebar-link' href={link.route}>
                                        {
                                            //<Image src={link.icon} alt="logo" width={18} height={18} />
                                        }
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                        </ul>
                        <ul className='sidebar-nav_elements'>
                        {navLinks.slice(6).map((link) =>{
                            const isActive = link.route === pathname

                            return(
                                <li key={link.route} className={`sidebar-nav_element group ${
                                    isActive ? 'text-black-menu p-16-semibold-t' : 'text-gray-menu'
                                }`}>
                                    <Link className='sidebar-link' href={link.route}>
                                        {
                                            //<Image src={link.icon} alt="logo" width={18} height={18} className={`${isActive && 'brightness-200'}`} />
                                        }
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                            <li className="flex-center cursor-pointer gap-2 p-4">
                                <UserButton afterSignOutUrl='/' showName/>
                            </li>
                        </ul>
                </SignedIn>

                <SignedOut>
                    <Button asChild className=''>
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar