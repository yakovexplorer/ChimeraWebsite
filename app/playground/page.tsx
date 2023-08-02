'use client'

import { useChat } from 'ai/react'

export default function Chat() {

  const { messages, input, handleInputChange, handleSubmit, } = useChat({
    api: "/errror"
  })

  return (
    <div className="flex flex-col items-center justify-end h-screen">
      <div className="chat chat-start">
      {messages.length > 0
        ? messages.map(m => (
            <div key={m.id} className="my-2 whitespace-pre-wrap chat-bubble">
              {m.role === 'user' ? 'User: ' : 'AI: '}
              {m.content}
            </div>
          ))
        : null}
</div>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 border border-gray-300 rounded shadow-xl"
          value={input}
          disabled
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        <input
          className="w-full p-2 mt-2 border border-gray-300 rounded shadow-xl"
          value={input}
          disabled
          placeholder="API KEY"
          onChange={handleInputChange}
        />
        
      </form>
    </div>
  )
}
