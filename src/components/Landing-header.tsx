"use client"

import Link from 'next/link'
import React from 'react'

import { useRouter } from 'next/navigation'

import { Button } from './ui/button'

const LandingHeader = () => {
    const router = useRouter();
  return (
    <div className='w-full p-4 flex items-center justify-between'>
        <Link href="/" className="text-2xl font-bold">
            Ai Buddy        
        </Link>
        <Button 
            className='p-6 rounded-full'
            onClick={() => router.push("/dashboard")}
        >
            Get Started
        </Button>
    </div>
  )
}

export default LandingHeader