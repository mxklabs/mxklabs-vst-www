import Product from "./product";
import Mxklabs from "./mxklabs";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
      <Product
        title="1: Arpeggio V1 (Classical Guitar)"
        description="This is a high-quality guitar product."
        imageUrl="/guitar1.png"
        price="£9.99"
        cardSize="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 row-span-2"
        bgColor="bg-mxk-cyan"
      />
      <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 bg-gray-200">
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
        title="4: Model K V1 (Soft Piano)"
        description="This is a premium piano product."
        imageUrl="/piano1.png"
        price="£20.99"
        cardSize="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-6"
        bgColor="bg-mxk-orange"
      />
      <Product
        title="3: Model K V1 (Soft Piano)"
        description="This is a premium piano product."
        imageUrl="/piano1.png"
        price="£20.99"
        cardSize="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2"
        bgColor="bg-mxk-gray"
      />
      <Product
        title="4: Model K V1 (Soft Piano)"
        description="This is a premium piano product."
        imageUrl="/piano1.png"
        price="£20.99"
        cardSize="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2"
        bgColor="bg-mxk-orange"
      />
      <Product
        title="1: Arpeggio V1 (Classical Guitar)"
        description="This is a high-quality guitar product."
        imageUrl="/guitar1.png"
        price="£9.99"
        cardSize="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2"
        bgColor="bg-mxk-cyan"
      />
    </div>
  );
}
