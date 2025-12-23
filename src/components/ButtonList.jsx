import { buttonListMock } from "../data/buttonListMock";
import Button from "./Button";

const ButtonList = () => {
  return (
    <>
      <div className="flex justify-between ">
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
