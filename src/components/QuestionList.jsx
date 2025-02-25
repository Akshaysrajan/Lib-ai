import { Book, BookOpen, Blocks } from "lucide-react";
import QuestionCard from "./QuestionCard";

const QuestionList = ({ onQuestionSelect }) => {
  const sampleQuestions = [
    {
      id: 1,
      text: "Can you help me find a book titled ‘Introduction to Machine Learning’ by Alpaydin?",
      icon: <Book className="w-6 h-6 text-gray-500 flex-shrink-0" />,
    },
    {
      id: 2,
      text: "Can you recommend some beginner-friendly books on data structures and algorithms?",
      icon: <BookOpen className="w-6 h-6 text-gray-500 flex-shrink-0" />,
    },
    {
      id: 3,
      text: "Do you have any recently published journals on deep learning?",
      icon: <Blocks className="w-6 h-6 text-gray-500 flex-shrink-0" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
      {sampleQuestions.map((question) => (
        <QuestionCard key={question.id} question={question} onClick={onQuestionSelect} />
      ))}
    </div>
  );
};

export default QuestionList;
