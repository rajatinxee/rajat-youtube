import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./utils/Redux/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />

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
