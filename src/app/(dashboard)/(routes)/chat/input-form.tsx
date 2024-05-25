'use client';

import { Input } from '@/components/ui/input';
import { useChat } from 'ai/react';
import { useCompletion } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  //const { completion, input, handleInputChange, handleSubmit, error } = useCompletion();

  return (
    <div className="flex flex-col w-full max-w-3xl py-6 mx-auto stretch">
        <div className='overflow-scroll max-h-96'>
           {messages.map(m => (
            <div key={m.id} className="whitespace-pre-wrap">
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
            </div>
        ))} 
        </div>
      

      <form onSubmit={handleSubmit}>
        <Input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}