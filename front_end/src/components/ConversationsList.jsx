import React, { useEffect, useState } from 'react'
import Conversation from './Conversation'
import { axiosClient } from '@/api/axios'

export default function ConversationsList() {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    axiosClient.post(`/get_conversations`).then((res) => {
      setConversations(res.data)
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <div className='bg-white w-1/4 h-[90vh] border'>
        <div className='flex flex-col mx-3 py-5'>
            <div className='font-custom font-semibold text-2xl mx-5'>Conversations</div>
            <div className='h-px my-3  bg-gray-300'/>
            <div className='flex flex-col space-y-5'>
                {
                  conversations && conversations.map((conversation, index) => {
                    return <Conversation key={index} conversation={conversation} />
                  })
                }
            </div>
        </div>
    </div>
  )
}
