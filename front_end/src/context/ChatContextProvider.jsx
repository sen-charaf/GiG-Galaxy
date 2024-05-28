import React, { createContext, useState } from 'react';

export const ChatContext = createContext({
  messages: [],
  conversations: {},
  setConversation: () => {},
  setMessages: () => {},
  setMessage: () => {},
});

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
 
  const [conversation, setConversation] = useState({});


  const value = { messages, conversation, setConversation,  setMessages };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
