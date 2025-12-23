import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);

    const json = await data.json();

    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {videos.map((video) => (
          <div>
            <VideoCard info={video} />
          </div>
        ))}
        {/* <VideoCard info={videos[0]} /> */}
      </div>
    </>
  );
};

export default VideoContainer;
