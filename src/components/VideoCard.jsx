const VideoCard = ({ info }) => {
  console.log("info", info);
  if (!info) return null;
  const { snippet, statistics } = info;

  return (
    <div className=" p-2 m-2 w-72 shadow-lg ">
      <img src={snippet.thumbnails.high.url} alt="thumbnail"  
      className="rounded-lg"/>
      <ul>
        <li className="font-bold">{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
