const VideoCard = ({ info }) => {
  // console.log("info", info);
  if (!info) return null;
  const { snippet, statistics } = info;

  return (
    <div className=" p-2 m-2 w-72 shadow-lg ">
      <img
        src={snippet.thumbnails.high.url}
        alt="thumbnail"
        className="rounded-lg"
      />
      <ul>
        <li className="font-bold">{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-700">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
