import { useState } from "react";
import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = "";

function App() {
  const [messages, setMessages] = useState([
    { message: "Hello I am ChatGPT", sender: "ChatGPT" },
  ]);
  const [typing, setTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "User",
      direction: "outgoing",
    };

    // adding new messages
    const newMessages = [...messages, newMessage];

    // updating state
    setMessages(newMessages);

    // set a typing indicator (chatGPT is typing)
    setTyping(true);

    // process message to chatGPT
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") role = "assistant";
      else role = "user";
      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content: "explain like i am a 10 years experienced software engineer",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setTyping(false);
      });
  }

  return (
    <div className="App">
      <div style={{ position: "relative", height: "530px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                typing ? <TypingIndicator content="ChatGPT is typing" /> : null
              }
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput
              placeholder="type your message here"
              onSend={handleSend}
            ></MessageInput>
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
