import { Link, ArrowRight } from "lucide-react";

const InputBox = ({ inputValue, onInputChange, onSubmit }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white py-4 shadow-lg">
      <div className="relative max-w-xl mx-auto">
        <div className="flex items-center bg-white rounded-full shadow-sm px-4 py-3">
          <Link className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask whatever you want"
            className="flex-1 outline-none text-gray-600 placeholder-gray-400"
          />
          <button
            onClick={onSubmit}
            className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-purple-200 transition-colors"
          >
            <ArrowRight className="w-4 h-4 text-purple-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputBox;

