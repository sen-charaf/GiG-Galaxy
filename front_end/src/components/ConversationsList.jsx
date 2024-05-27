import React from 'react'
import Conversation from './Conversation'

export default function ConversationsList() {
  return (
    <div className='bg-white w-1/4 h-[90vh] border'>
        <div className='flex flex-col mx-3 py-5'>
            <div className='font-custom font-semibold text-2xl mx-5'>Conversations</div>
            <div className='h-px my-3  bg-gray-300'/>
            <div className='flex flex-col space-y-5'>
                <Conversation/>
                <Conversation/>
            </div>
        </div>
    </div>
  )
}
