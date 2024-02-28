import React from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

const App: React.FC = () => {
  return (
    <div className="flex px-16 flex-col h-full py-7">
      <h1 className="text-center text-white text-5xl my-3">UI-TASK</h1>
      <h2 className="text-center text-gray-500 text-2xl my-3">
        Fully Responsive and Resizing Option
      </h2>
      <div className="flex justify-center">
        <ComponentA />
        <ComponentB />
      </div>

      <div className="flex justify-center items-center">
        <ComponentC/>
      </div>
    </div>
  );
};

export default App;
