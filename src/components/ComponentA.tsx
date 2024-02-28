import { Resizable } from "re-resizable";

export default function () {
  return (
    <Resizable
      defaultSize={{ width: "30%", height: 400 }}
      maxWidth="30%"
      className="border-4 rounded-3xl shadow-md border-gray-400 m-2 overflow-hidden"
    >
      <div
        className="w-full h-full p-4 flex flex-col justify-center items-center bg-gradient-to-r
     from-custom-indigo to-custom-blue rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">React.js</h2>
        <img src="/img2.png" alt="React.js Logo" className="mt-4 w-24" />
        <p className="text-lg font-mono font-semibold">
          React.js is a powerful JavaScript library for building user
          interfaces. It allows developers to create reusable UI components and
          efficiently manage state using a virtual DOM.
        </p>
      </div>
    </Resizable>
  );
}
