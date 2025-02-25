import { useState } from "react";
import Header from "../components/Header";
import QuestionList from "../components/QuestionList";
import ChatMessage from "../components/ChatMessage";
import TypingAnimation from "../components/TypingAnimation";
import InputBox from "../components/InputBox";

const QuestionPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasSubmittedFirstQuery, setHasSubmittedFirstQuery] = useState(false);

  const handleQuestionClick = (questionText) => {
    setInputValue(questionText);
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) return;

    setMessages((prev) => [...prev, { isUser: true, text: inputValue }]);
    setShowChat(true);
    setIsTyping(true);
    setHasSubmittedFirstQuery(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          isUser: false,
          text: "This is a sample response to question. In a real application, this would be replaced with an actual API response from AI service.",
        },
      ]);
    }, 2000);

    setInputValue("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-8">
      <Header />
      <main className="max-w-2xl mx-auto">
        {!showChat ? (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">What would you like to know?</h1>
            <p className="text-gray-500">
              Use one of the most common prompts below
              <br />
              or use your own to start
            </p>
            <QuestionList onQuestionSelect={handleQuestionClick} />
          </div>
        ) : (
          <div className="mb-16 bg-gray-50 rounded-lg p-4 min-h-[400px] flex flex-col">
            <div className="flex-1 overflow-y-auto mb-4">
              {messages.map((message, index) => (
                <ChatMessage key={index} isUser={message.isUser} message={message.text} />
              ))}
              {isTyping && <TypingAnimation />}
            </div>
          </div>
        )}

        <InputBox inputValue={inputValue} onInputChange={setInputValue} onSubmit={handleSubmit}  hasSubmittedFirstQuery={hasSubmittedFirstQuery}/>
      </main>
    </div>
  );
};

export default QuestionPage;
