import { useEffect, useState } from "react";
import { useParams } from "react-router";

function MessageList({ selectedUser }) {
  const [messages, setMessages] = useState([]);

  const { conversationId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/messages?conversationId=${conversationId}`)
      .then((resp) => resp.json())
      .then(setMessages);
  }, [conversationId]);

  return (
    <>
      {messages.map((message) => (
        <li
          key={message.id}
          className={message.userId === selectedUser.id ? `outgoing` : ``}
        >
          <p>{message.messageText}</p>
        </li>
      ))}
    </>
  );
}

export default MessageList;
