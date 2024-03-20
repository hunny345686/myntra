import { useContext } from "react";
import { WishlistContext } from "../../ContextAPI/WishlistContext";
import { FaWindowClose } from "react-icons/fa";

function Wishlist() {
  let { wishlist, setWishlist } = useContext(WishlistContext);
  const handleFilter = (filterId) => {
    setWishlist(wishlist.filter((item) => item.id != filterId));
  };
  return (
    <div className="container mx-auto mt-20">
      <h3 className=" text-3xl font-bold tracking-tight text-gray-900 my-10 pt-6">
        My Wishlist {wishlist.length} items
      </h3>
      <div className="flex gap-6 flex-wrap">
        {wishlist.length > 0 ? (
          wishlist.map((item) => {
            return (
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow relative">
                <FaWindowClose
                  className="absolute right-2 text-3xl top-2 text-red-500 cursor-pointer"
                  onClick={() => handleFilter(item.id)}
                />
                <img
                  class="rounded-t-lg"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {item.title}
                  </h5>
                  <p class="mb-3 font-normal text-gray-700 ">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none"
                  >
                    Move to Bag
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <h2>No Whislist Data</h2>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
