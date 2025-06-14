import { createContext, useContext, useState } from "react";
import { getReply } from "../utils/gemini";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const initialContacts = [
    {
      id: 1,
      name: "Emma Thompson",
      lastMessage:
        "I've sent you the latest project I've sent you the latest project",
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
    {
      id: 5,
      name: "Amelia Wilson",
      lastMessage: "Thanks for your help with the client",
      lastMessageTime: "Monday",
      status: "",
    },
    {
      id: 6,
      name: "Daniel Martinez",
      lastMessage: "Let's schedule a call to discuss the project",
      lastMessageTime: "May 25",
      status: "",
    },
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState({});
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    const id = Date.now();
    const contactId = activeContact.id;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMessage = {
      id: id,
      text: newMessage,
      sender: "user",
      currentTime,
    };

    const typingMessage = {
      id: id + 1,
      text: "",
      sender: "bot",
      typing: true,
    };

    setMessages((prev) => ({
      ...prev,
      [contactId]: [...(prev[contactId] || []), userMessage, typingMessage],
    }));

    setNewMessage("");

    // Gemini reply
    setLoading(true);
    const botResponse = await getReply(newMessage);

    const botMessage = {
      id: id + 2,
      text: botResponse,
      sender: "bot",
      currentTime,
    };

    // Replace typing message
    setMessages((prev) => ({
      ...prev,
      [contactId]: (prev[contactId] || []).map((msg) =>
        msg.typing ? botMessage : msg
      ),
    }));

    const updatedContact = contacts.map((contact) =>
      contact.id === contactId
        ? { ...contact, lastMessage: botResponse, lastMessageTime: currentTime }
        : contact
    );

    setContacts(updatedContact);
    setLoading(false);
  };

  return (
    <ChatContext.Provider
      value={{
        contacts,
        activeContact,
        setActiveContact,
        sideBarOpen,
        setSideBarOpen,
        newMessage,
        setNewMessage,
        loading,
        sendMessage,
        messages,
        activeContactMessage: messages[activeContact.id] || [],
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
