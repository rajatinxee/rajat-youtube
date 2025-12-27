import { USER_ICON } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text, replied } = data;

  return (
    <>
      <div className="flex bg-gray-100 shadow-sm p-2 rounded-md my-2">
        <img className="w-12 h-12" src={USER_ICON} alt="USER_ICON" />

        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p className="">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
