import { useState } from "react"
import { FaHeart, FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"
import ImgsSlider from "./ImgsSlider"
function ProductList({ product }) {
  const [productHover, setProductHover] = useState(true)

  const { brand, description
    , discountPercentage, images, price, rating, thumbnail, title } = product

  return (
    <>
      <div className="productGroup"
        onMouseEnter={() => setProductHover(false)}
        onMouseLeave={() => setProductHover(true)} >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80 relative">
          {
            productHover ? <img src={thumbnail} alt={title} className="h-full w-full object-cover object-center lg:h-full lg:w-full" /> :
              <ImgsSlider imgs={images} />
          }
          {
            productHover &&
            <div className="absolute flex items-center bottom-2 left-2 px-3 py-2 bg-white rounded-sm">
              <p className="flex items-center gap-1">{rating} <FaStar className="starIcon" />  |</p>
              <p className="ml-1">5.5k</p>
            </div>
          }
        </div>
        <div className="p-4 pr-0 productDetail relative shadow-md">
          {productHover ?
            <>
              <h3 className="uppercase font-bold mb-2">{brand}</h3>
              <p>{description.substring(0, 40)}...</p>
              <p><span className="font-bold">RS.{price - ((price * discountPercentage) / 100).toFixed(2)}</span> <del className="mx-1">RS.{price}</del> <span className="off">({discountPercentage}% OFF)</span></p>
            </>
            :
            <>
              <div className="pruductWishlist absolute bg-white left-0 right-0 w-full flex items-center justify-center">
                <Link>
                  <button className="uppercase flex items-center gap-2"> <FaHeart /> wishlist  </button>
                </Link>
              </div>
              <p className="mt-6">Sizes:M</p>
              <p><span className="font-bold">Rs.869</span> <del className="mx-1">RS.{price}</del> <span className="off">({discountPercentage}% OFF)</span></p>
            </>
          }
        </div>
      </div>
    </>

  )
}

export default ProductList