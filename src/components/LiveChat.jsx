import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/Redux/Slices/chatSlice";
import generateRandomNames, { generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("API POOLING");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessage(20) + " 🤪",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse  ">
      <span className="text-red-500 font-bold">Live Chat</span>
      {ChatMessages.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
