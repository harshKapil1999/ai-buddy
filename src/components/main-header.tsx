import { UserCircle } from 'lucide-react'
import React from 'react'

const MainHeader = () => {
  return (
    <div className='flex items-center justify-between p-4 border-b'>
        <div className='flex flex-col'>
           <h1 className='text-xl font-bold'>AI Buddy</h1> 
           <p className='text-muted-foreground text-sm'>Your Personal Assistant</p>
        </div>
        
        <div>
            <UserCircle size={32} />
        </div>
    </div>
  )
}

export default MainHeader