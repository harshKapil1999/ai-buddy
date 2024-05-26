import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import StreamChat from './stream-chat'

const Completion = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center p-4 gap-2'>
        <h1 className='text-2xl font-bold '>Completion</h1>
        <Card className='w-full flex flex-col items-center justify-center overflow-scroll'>
            <CardHeader>
                <CardTitle>Completion</CardTitle>  
            </CardHeader>
            <CardContent className='w-full overflow-scroll'>
              {/* Chat component */}
                <StreamChat />
            </CardContent>
        </Card>
    </div>
  )
}

export default Completion