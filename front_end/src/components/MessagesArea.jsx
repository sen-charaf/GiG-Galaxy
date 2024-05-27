import React from 'react'
import Message from './Message'

export default function MessagesArea() {
  return (
    <div className='h-full flex flex-col-reverse  '>
      <Message text = "This is a message 1 " />
      <Message text = "This is a message 2" />
    </div>
  )
}
