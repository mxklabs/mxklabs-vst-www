'use client'
import Product from "./product";
import Mxklabs from "./mxklabs";

export default function Home() {
  return (
    <>
      <section className="relative w-full flex flex-col md:flex-row items-center justify-between px-6 py-16 min-h-screen overflow-hidden bg-mxk-white">
        {/* Decorative waveform background */}
        <img src="/file.svg" alt="Waveform background" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none" style={{zIndex: 0}} />
        <div className="relative z-10 flex-1 flex flex-col items-start justify-center text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">AI/ML-Powered Virtual Instruments</h1>
          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
            Discover a new era of expressive, dynamic, and beautiful sound. Crafted by musicians, powered by machine learning.
          </p>
        </div>
        <div className="relative z-10 flex-1 flex flex-col items-center md:items-end justify-center w-full md:w-auto mt-8 md:mt-0">
          <div className="flex flex-col items-center animate-bounce cursor-pointer" onClick={() => {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}>
            <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-mxk-orange mb-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-mxk-orange mb-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-mxk-orange mb-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <span className="text-mxk-orange text-lg font-medium">Scroll down to explore</span>
          </div>
        </div>
      </section>
      <div id="products" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4 mt-[-4rem] md:mt-[-6rem]">
        {/* <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 bg-gray-200" data-aos="fade-up">
          <div className="p-5">
            <div className="p-6">
              <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400">
                Welcome to <Mxklabs/>, your go-to destination for high-quality
                AI/ML-based VST3 plugins! We craft state-of-the-art VST3 instruments
                using advanced machine learning techniques. Unlike traditional sample-based plug-ins, our virtual
                instruments are dynamic, responsive. In a sense, they are <i>alive</i>, just like
                their acoustic counterparts.
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Our mission is to develop machine learning models that
                render the most beautiful, expressive, high-quality sounds
                possible. Join us on our journey.
              </p>
            </div>
          </div>
        </div>
        <Product
          title="1: Arpeggio V1 (Classical Guitar)"
          description="This is a high-quality guitar product."
          imageUrl="/guitar1.png"
          price="£9.99"
          cardSize="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 row-span-2"
          bgColor="bg-mxk-cyan"
          data-aos="fade-up"
        />
        <Product
          title="4: Model K V1 (Soft Piano)"
          description="This is a premium piano product."
          imageUrl="/piano1.png"
          price="£20.99"
          cardSize="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-6"
          bgColor="bg-mxk-orange"
          data-aos="fade-up"
        /> */}
        <Product
          title="3: Model K V1 (Soft Piano)"
          description="This is a premium piano product."
          imageUrl="/piano1.png"
          price="£20.99"
          cardSize="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2"
          bgColor="bg-mxk-gray"
          data-aos="fade-right"
        />
        <Product
          title="4: Model K V1 (Soft Piano)"
          description="This is a premium piano product."
          imageUrl="/piano1.png"
          price="£20.99"
          cardSize="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2"
          bgColor="bg-mxk-orange"
          data-aos="flip-up"
        />
        <Product
          title="1: Arpeggio V1 (Classical Guitar)"
          description="This is a high-quality guitar product."
          imageUrl="/guitar1.png"
          price="£9.99"
          cardSize="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2"
          bgColor="bg-mxk-cyan"
          data-aos="zoom-in"
        />
        <Product
          title="3: Model K V1 (Soft Piano)"
          description="This is a premium piano product."
          imageUrl="/piano1.png"
          price="£20.99"
          cardSize="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2"
          bgColor="bg-mxk-gray"
          data-aos="fade-right"
        />
        <Product
          title="4: Model K V1 (Soft Piano)"
          description="This is a premium piano product."
          imageUrl="/piano1.png"
          price="£20.99"
          cardSize="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2"
          bgColor="bg-mxk-orange"
          data-aos="flip-up"
        />
        <Product
          title="1: Arpeggio V1 (Classical Guitar)"
          description="This is a high-quality guitar product."
          imageUrl="/guitar1.png"
          price="£9.99"
          cardSize="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2"
          bgColor="bg-mxk-cyan"
          data-aos="zoom-in"
        />
      </div>
    </>
  );
}
