import { useState, useRef, useEffect } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(0);

  console.log("Rendering.....");

  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-300 p-2 m-4 rounded-lg"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increment x
        </button>
        <span>Let x = {x}</span>
      </div>

      <div>
        <button
          className="bg-green-300 p-2 m-4 rounded-lg"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increment y
        </button>
        <span>Let y = {y}</span>
      </div>

      <div>
        <button
          className="bg-green-300 p-2 m-4 rounded-lg"
          onClick={() => {
            ref.current = ref.current + 1;
          }}
        >
          Increment ref
        </button>
        <span>ref = {ref.current}</span>
      </div>
    </div>
  );
};
export default Demo2;
