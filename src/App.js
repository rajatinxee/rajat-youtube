import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./utils/Redux/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <Body />
        {/* 
        Head 
        Body
          Sidebar
            Menubar
          MainContainer
            ButtonList
            VideoContainer
              VideoCards
      */}
      </div>
    </Provider>
  );
}

export default App;
