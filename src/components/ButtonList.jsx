import { Link } from "react-router-dom";
import { buttonListMock } from "../data/buttonListMock";
import Button from "./Button";

const ButtonList = () => {
  return (
    <>
      <div className="flex justify-between ">
      <Link to={"/demo"}><Button label="Demo" /></Link>
        {buttonListMock.map((button) => (
          <div key={button.id}>
            <Button label={button.label} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ButtonList;
