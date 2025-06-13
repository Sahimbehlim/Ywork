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
  const [activeContact, setActiveContact] = useState(contacts[0]);

  // Get initial letters from name
  const getInitials = (name) => {
    const parts = name.split(" ");
    return parts.length === 1
      ? parts[0][0].toUpperCase()
      : `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  };

  // Generate random color based on name
  const getRandomColor = (name) => {
    const hash = [...name].reduce((a, c) => a + c.charCodeAt(0), 0);
    const hue = hash % 360;
    return {
      bg: `hsl(${hue}, 70%, 80%)`,
      text: `hsl(${hue}, 70%, 30%)`,
    };
  };

  return (
    <ChatContext.Provider
      value={{
        contacts,
        activeContact,
        setActiveContact,
        getInitials,
        getRandomColor,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
