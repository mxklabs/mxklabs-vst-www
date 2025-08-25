import Product from "./product";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-100">
      <div className="max-w-4xl bg-cyan-500 mx-auto py-16 px-4 space-y-8">
        <Product
          title="Arpeggio V1 (Classical Guitar)"
          description="This is a high-quality guitar product."
          imageUrl="/guitar1.png"
          price="£9.99"
          cardSize="max-w-xs"
          bgColor="bg-mxk-cyan"
        />
        <Product
          title="Model K V1 (Soft Piano)"
          description="This is a premium piano product."
          imageUrl="/piano1.png"
          price="£20.99"
          cardSize="max-w-xs"
          bgColor="bg-mxk-red"
        />
        <Product
          title="Model K V1 (Soft Piano)"
          description="This is a premium piano product."
          imageUrl="/piano1.png"
          price="£20.99"
          cardSize="max-w-xs"
          bgColor="bg-mxk-gray"
        />
        <Product
          title="Model K V1 (Soft Piano)"
          description="This is a premium piano product."
          imageUrl="/piano1.png"
          price="£20.99"
          cardSize="max-w-xs"
          bgColor="bg-mxk-orange"
        />
      </div>
    </div>
  );
}
