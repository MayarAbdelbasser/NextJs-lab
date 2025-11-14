import Image from "next/image";
import { notFound } from "next/navigation";

async function getSingleProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

async function getAllProducts() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  return res.json();
}

// change the page title
export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  return {
    title: product.title,
    description: product.description,
  };
}

// generate all ids
export async function generateStaticParams() {
  const products = await getAllProducts();
  const ids = products.map((p) => {
    return { id: p.id.toString() };
  });
  return ids;
}

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <Image
              className="w-75"
              src={product.image}
              alt={product.title}
              width={800}
              height={500}
            />
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {product.title}
            </h1>
            <p className="mb-6 text-gray-500 dark:text-gray-400">
              {product.description}
            </p>
            <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
