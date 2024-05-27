import React, { useEffect, useState } from 'react'
import Pusher from 'pusher-js';
import { axiosClient } from '@/api/axios';
import ConversationsList from '@/components/ConversationsList';
import ChatSection from '@/components/ChatSection';

export default function ChatPage() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
    const pusher = new Pusher('152dd772c0915f356ab0', {
        cluster: 'eu'
      });
  
      const channel = pusher.subscribe('my-channel');
      channel.bind('my-event', function(data) {
        setMessages([...messages, {
            username: data.user,
            message: data.message}]);
      });    
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.post('/chat', {message, username}).then((response) => {
            
        })
    }

  return (
    <div className='flex'>
       <ConversationsList />
       <ChatSection />
    </div>
  )
}
