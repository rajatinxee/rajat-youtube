import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/Redux/Slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [serachParams] = useSearchParams();

  // console.log("Video Id: ", serachParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col p-3 m-3 w-full">
      <div className="flex ">
        <div>
          <iframe
            width="1000"
            height="600"
            src={"https://www.youtube.com/embed/" + serachParams.get("v")}
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
