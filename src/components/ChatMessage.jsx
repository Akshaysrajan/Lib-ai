const ChatMessage = ({ isUser, message }) => (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[80%] p-4 rounded-lg ${
          isUser ? "bg-purple-100 text-purple-900" : "bg-white text-gray-800"
        } shadow-sm`}
      >
        {message}
      </div>
    </div>
  );
  
  export default ChatMessage;
  