import { User } from "lucide-react";
import logo from "../assets/debyez_logo.svg"; // Import the logo
const Header = () => {
  return (
    <header className="flex justify-between items-center mb-20">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Company Logo" className="w-10 h-10 rounded-lg" />
        <span className="text-xl font-semibold">Alexandria</span>
      </div>
      <User className="w-6 h-6 text-gray-500" />
    </header>
  );
};

export default Header;
