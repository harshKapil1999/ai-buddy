import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Chat from './input-form'

const ChatPage = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center p-4 gap-2'>
        <h1 className='text-2xl font-bold '>Chat</h1>
        <Card className='w-full flex flex-col items-center justify-center overflow-scroll'>
            <CardHeader>
                <CardTitle>Chat</CardTitle>  
            </CardHeader>
            <CardContent className='w-full overflow-scroll'>
              {/* Chat component */}
                <Chat />
            </CardContent>
        </Card>
        
    </div>
  )
}

export default ChatPage