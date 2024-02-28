import { Resizable } from 're-resizable'


export default function ComponentB() {
  return (
    <Resizable
          defaultSize={{ width: "70%", height: 400 }}
          maxWidth="70%"
          className="border-8 rounded-3xl border-gray shadow-md-400 m-2 overflow-hidden"
        >
          <div
            className="w-full h-full p-4 flex flex-col items-center text-gray-800
          justify-center bg-gradient-to-r from-custom-yellow to-custom-pink rounded-lg"
          >
            <h2 className="text-4xl font-bold mb-4 text-center">Node.js</h2>
            <img src="/img1.png" alt="Node.js Logo" className="mt-4 h-32" />
            <p className="text-xl leading-8 font-mono font-semibold">
              Node.js is a server-side JavaScript runtime environment. It allows
              developers to build scalable and efficient backend applications.
              Express.js is commonly used with Node.js for creating RESTful
              APIs.
            </p>
          </div>
        </Resizable>
  )
}
