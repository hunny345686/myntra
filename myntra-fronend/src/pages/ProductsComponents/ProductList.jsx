import { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import ImgsSlider from "./ImgsSlider";
import React, { useContext } from "react";
import { WishlistContext } from "../../ContextAPI/WishlistContext";

function ProductList({ product }) {
  const [productHover, setProductHover] = useState(true);
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const {
    id,
    brand,
    description,
    discountPercentage,
    images,
    price,
    rating,
    thumbnail,
    title,
    size,
  } = product;

  // adding product in Wishlist
  const handleWishList = () => {
    setWishlist([...wishlist, product]);
  };
  // Check if Allready In WhishList
  const AllreadyInwishlist = wishlist.map((item) => item.id);

  return (
    <div
      className="productGroup"
      onMouseEnter={() => setProductHover(false)}
      onMouseLeave={() => setProductHover(true)}
    >
      <Link to={`/product/${id}`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80 ">
          {productHover ? (
            <img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          ) : (
            <ImgsSlider imgs={images} />
          )}
          {productHover && (
            <div className="px-3 py-2 bg-white rounded-sm">
              <p className="flex items-center gap-1">
                {rating} <FaStar className="starIcon" /> |
              </p>
              <p className="ml-1">5.5k</p>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4 pr-0 productDetail shadow-md">
        {productHover ? (
          <>
            <h3 className="uppercase font-bold mb-2">{brand}</h3>
            <p>{description.substring(0, 40)}...</p>
            <p>
              <span className="font-bold">
                RS.{price - ((price * discountPercentage) / 100).toFixed(2)}
              </span>
              <del className="mx-1">RS.{price}</del>
              <span className="off">({discountPercentage}% OFF)</span>
            </p>
          </>
        ) : (
          <>
            <div className="pruductWishlist bg-white w-full">
              {AllreadyInwishlist.includes(id) ? (
                <button className="uppercase flex items-center gap-2 justify-center font-bold">
                  <FaHeart className="text-red-500" /> Wishlished
                </button>
              ) : (
                <button
                  className="uppercase flex items-center gap-2 justify-center font-bold"
                  onClick={() => handleWishList(id)}
                >
                  <FaHeart /> wishlist
                </button>
              )}
            </div>
            <p className="mt-4">Sizes : {size}</p>
            <p>
              <span className="font-bold">Rs.869</span>
              <del className="mx-1">RS.{price}</del>
              <span className="off">({discountPercentage}% OFF)</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductList;
