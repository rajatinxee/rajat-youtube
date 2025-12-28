import { USER_ICON } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center">
      <img src={USER_ICON} alt="USER_ICON" className="h-8 rounded-full" />
      <span className="font-bold mx-3 text-gray-700">{name}</span>
      <span className="text-gray-500">"{message}"</span>
    </div>
  );
};

export default ChatMessage;
