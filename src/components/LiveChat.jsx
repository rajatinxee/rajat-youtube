import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/Redux/Slices/chatSlice";
import generateRandomNames, { generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [liveMessage, setLiveMessage] = useState("");

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
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const sendLiveMessage = () => {
    if (liveMessage === "") return;

    dispatch(
      addMessage({
        name: "Rajat",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <div>
      <div className="w-full h-[575px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse  ">
        <span className="text-red-500 font-bold">Live Chat</span>
        {ChatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <div className="w-full p-2 ml-2 border border-black rounded-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendLiveMessage();
          }}
        >
          <input
            type="text"
            className="w-72 border border-gray-500 rounded-md p-2"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            placeholder="Send a live chat..."
          />

          <button
            type="submit"
            className="bg-green-700 font-bold text-white m-2 p-2 rounded-lg hover:bg-gray-600 transition-all duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
