"use client"

import React from 'react'

import { 
  Code, 
  ImageIcon, 
  LayoutDashboard, 
  MessageSquare, 
  Music, 
  Settings, 
  VideoIcon
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
const Sidebar = () => {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      color: "text-sky-600"
    },
    {
      label: "Chat",
      href: "/chat",
      icon: MessageSquare,
      color: "text-violet-600"
    },

  ]

  return (
    <div className='space-y-4 p-4 flex flex-col w-full h-screen bg-black text-white'>
        <h1 className='text-3xl font-bold'>Ai Buddy</h1>
        <div className='space-y-1'>
            {routes.map((route) => (
                <Link 
                  href={route.href} 
                  key={route.href}
                  className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", 
                    pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                  )}
                >
                  <div className='flex items-center'>
                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                    {route.label}
                  </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Sidebar