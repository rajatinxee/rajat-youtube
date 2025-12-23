import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

 
const MainContainer = () => {
 return (
   <>
    <div className="flex flex-col justify-center items-center">
        <ButtonList />
        <VideoContainer />
    </div>
   </>
 )
};

export default MainContainer;