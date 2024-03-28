import { useParams } from "react-router-dom";
import { productData } from "../ProductsComponents/productData";
import { useState } from "react";

const product = {
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
};
const colors = ["red", "white", "gray", "black"];
const sizes = ["M", "S", "L", "XL", "XXL", "XXXL"];

function SingleProduct() {
  const { id } = useParams();

  const [checked, setChecked] = useState(null);
  let singleProduct = productData.products.filter((item) => item.id == id);
  const {
    title,
    thumbnail,
    description,
    color,
    price,
    stock,
    size,
    rating,
    images,
    discountPercentage,
    brand,
  } = singleProduct[0];

  const handleChange = (e) => {
    setChecked(e.target.value);
    console.log(singleProduct[0], checked);
  };

  return (
    <div className="container mx-auto mt-24">
      <div className=" mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-full lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block shadow-sm">
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg shadow-sm">
            <img
              src={images[0]}
              alt={title}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg shadow-sm">
            <img
              src={images[1]}
              alt={title}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          <img
            src={images[2]}
            alt={title}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-full lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {title}
          </h1>
        </div>
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">{price}</p>
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">{rating} Ratings..</div>
              <a
                href=""
                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                480 reviews
              </a>
            </div>
          </div>
          <form className="mt-10">
            <div className="flex items-center justify-between">
              <h3 className="text-xxl font-medium text-gray-900">Color</h3>
            </div>
            <fieldset className="mt-4">
              <div className="flex items-center space-x-3">
                {colors.map((item, i) => (
                  <label className="relative m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                    <input
                      type="radio"
                      name="color-choice"
                      value={item}
                      className="sr-only"
                      aria-labelledby="color-choice-0-label"
                      onChange={handleChange}
                    />
                    <span
                      aria-hidden="true"
                      style={{ backgroundColor: `${item}` }}
                      className={`h-8 w-8 rounded-full border border-gray-300${
                        checked == item ? " border-blue-700 border-4" : ""
                      } `}
                    ></span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-xxl font-medium text-gray-900">Size</h3>
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Size guide
                </a>
              </div>
              <fieldset className="mt-4">
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  {sizes.map((item, i) => (
                    <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase cursor-pointer bg-white text-gray-900 shadow-sm">
                      <input
                        type="radio"
                        name="size-choice"
                        value={item}
                        className="sr-only"
                        aria-labelledby="size-choice-2-label"
                        onChange={handleChange}
                      />
                      <span id="size-choice-2-label">{item}</span>
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute -inset-px rounded-md${
                          checked == item ? " border-blue-700 border-4" : ""
                        } `}
                      ></span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <button
              type="submit"
              className="btnColor mt-10 flex w-full items-center justify-center border border-transparent px-8 py-3 text-base font-semibold"
            >
              Add to bag
            </button>
          </form>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          <div>
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6">
              <p className="text-base text-gray-900">{description}</p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="text-gray-400">
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Details</h2>
            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
