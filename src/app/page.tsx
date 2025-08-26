import Product from "./product";
import Mxklabs from "./mxklabs";

export default function Home() {
  return (
    <div className="bg-mxk-gray h-screen overflow-y-scroll bg-gray-100">
      <div className="bg-white max-w-4xl mx-auto py-16 px-4 space-y-8">
        <div className="grid grid-auto-flow grid-cols-6 gap-4">

        <div className="max-w-full col-span-6 bg-gray-200" >
          <div className="p-5">
              {/* <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TITLE</h5>
              </a> */}
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Welcome to <Mxklabs/>, your go-to destination for high-quality
                  AI/ML-based VST plugins. We craft state-of-the-art VST3 instruments
                  using advanced machine learning techniques. Unlike traditional sample libraries, our virtual
                  instruments are dynamic, responsive, and <i>alive</i> — just like
                  their acoustic counterparts.
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Our mission is to develop machine learning models that
                  render the most beautiful, expressive, high-quality sounds
                  possible. Join us on our journey.
              </p>
          </div>
        </div>
        <Product
          title="4: Model K V1 (Soft Piano)"
          description="This is a premium piano product."
          imageUrl="/piano1.png"
          price="£20.99"
          cardSize="max-w-full col-span-6"
          bgColor="bg-mxk-orange"
        />
        <Product
          title="1: Arpeggio V1 (Classical Guitar)"
          description="This is a high-quality guitar product."
          imageUrl="/guitar1.png"
          price="£9.99"
          cardSize="max-w-full col-span-3"
          bgColor="bg-mxk-cyan"
        />
        <Product
          title="2: Model K V1 (Soft Piano)"
          description="This is a premium piano product."
          imageUrl="/piano1.png"
          price="£20.99"
          cardSize="max-w-full col-span-3"
          bgColor="bg-mxk-red"
        />
        <Product
          title="3: Model K V1 (Soft Piano)"
          description="This is a premium piano product."
          imageUrl="/piano1.png"
          price="£20.99"
          cardSize="max-w-full col-span-2"
          bgColor="bg-mxk-gray"
        />
        <Product
          title="4: Model K V1 (Soft Piano)"
          description="This is a premium piano product."
          imageUrl="/piano1.png"
          price="£20.99"
          cardSize="max-w-full col-span-2"
          bgColor="bg-mxk-orange"
        />
        <Product
          title="1: Arpeggio V1 (Classical Guitar)"
          description="This is a high-quality guitar product."
          imageUrl="/guitar1.png"
          price="£9.99"
          cardSize="max-w-full col-span-2"
          bgColor="bg-mxk-cyan"
        />
        </div>
      </div>
    </div>
  );
}
