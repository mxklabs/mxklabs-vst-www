import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="max-w-4xl mx-auto py-16 px-4 space-y-8">
        {
        /* <section className="bg-white shadow-md rounded-lg p-6">
             <h2 className="text-xl font-semibold text-gray-800">Get Started</h2> */
        }
        <section className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">Virtual Instruments powered by AI/ML</h2>
          <p className="mt-2 text-gray-600">
            Explore our virtual instruments powered by AI/ML.
          </p>
        </section>
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Get Started</h2>
          <p className="mt-2 text-gray-600">
            Sign up today and start creating amazing music with our tools.
          </p>
        </section>
      </div>
    </div>
  );
}
