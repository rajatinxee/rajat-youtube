import { useSelector } from "react-redux";
import { mid, top } from "../data/sidebarMock";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return pattern
  // if(!isMenuOpen) return null;

  return (
    <>
      <div className=" p-5 shadow-lg w-48">
        <Link to={"/demo"}>
          <div className="font-bold">Demo</div>
        </Link>
        {top.map((item) => (
          <div key={item.id}>
            {item.name === "Home" ? (
              <Link to="/">
                <div className="font-bold text-xl text-red-700">
                  {item.name}
                </div>
              </Link>
            ) : (
              <div>{item.name}</div>
            )}
          </div>
        ))}

        <h1 className="font-bold pt-5">Subscriptions</h1>
        {mid.map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>
          </div>
        ))}

        <h1 className="font-bold pt-5">Watch Later</h1>
        {mid.map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
