import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-100">
      <div className="max-w-4xl mx-auto py-16 px-4 space-y-8">
        {/* Card 1: rounded-lg rounded-t-lg shadow-sm */}
          <div className="max-w-l bg-yellow-100 border border-gray-200   dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="" src="/piano1.png" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Model K.1 (Soft Piano)</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Free Demo
                </a>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Buy (£7.99)
                </a>
            </div>
          </div>
          <div className="max-w-xs bg-yellow-100 border border-gray-200   dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="" src="/guitar1.png" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Arpeggia 1(Soft Piano)</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Free Demo
                </a>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Buy (£7.99)
                </a>
            </div>
          </div>
        </div>

    </div>
  );
}
