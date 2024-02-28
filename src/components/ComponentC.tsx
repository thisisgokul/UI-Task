import { Resizable } from 're-resizable'


export default function ComponentC() {
  return (
    <Resizable
          defaultSize={{ width: "100%", height: 400 }}
          maxWidth="100%"
          className="border-8 shadow-md rounded-2xl border-gray-400 m-2 overflow-hidden"
        >
          <div
            className="w-full h-full p-4 flex justify-center flex-col items-center
         bg-gradient-to-r from-custom-green-light to-custom-green rounded-lg text-gray-800"
          >
            <h2 className="text-4xl font-bold mb-4 text-center">MongoDB</h2>
            <img src="/img3.png" alt="MongoDB Logo" className="mt-4 h-36" />
            <p className="text-2xl font-semibold font-mono">
              MongoDB is a NoSQL database that stores data in flexible,
              JSON-like documents. It is widely used for handling large amounts
              of unstructured data and provides scalability and high
              performance.
            </p>
          </div>
        </Resizable>
  )
}
