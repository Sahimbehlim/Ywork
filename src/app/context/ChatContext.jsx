import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const initialContacts = [
    {
      id: 1,
      name: "Emma Thompson",
      lastMessage: "I've sent you the latest project",
      lastMessageTime: "12:45 PM",
      status: "online",
    },
    {
      id: 2,
      name: "Michael Johnson",
      lastMessage: "Are we still meeting for coffee",
      lastMessageTime: "Yesterday",
      status: "offline",
    },
    {
      id: 3,
      name: "Sophia Lee",
      lastMessage: "The design team loved your",
      lastMessageTime: "Yesterday",
      status: "online",
    },
    {
      id: 4,
      name: "Robert Brown",
      lastMessage: "Can you review the budget",
      lastMessageTime: "Tuesday",
      status: "",
    },
  ];

  const [contacts, setContacts] = useState(initialContacts);

  return (
    <ChatContext.Provider value={{ contacts }}>{children}</ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
