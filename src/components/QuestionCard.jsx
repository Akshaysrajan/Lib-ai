const QuestionCard = ({ question, onClick }) => {
    return (
      <button
        onClick={() => onClick(question.text)}
        className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center gap-4 h-full"
      >
        <div className="flex flex-col items-center h-full">
          {question.icon}
          <span className="text-gray-500 text-sm mt-4 line-clamp-3 overflow-hidden">
            {question.text}
          </span>
        </div>
      </button>
    );
  };
  
  export default QuestionCard;
  