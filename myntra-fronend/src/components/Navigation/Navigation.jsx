import { Link } from "react-router-dom";
import Menu from "./Menu";
import NavigationRight from "./NavigationRight";
import { FaUser, FaShoppingBag, FaHeart, FaSearch } from "react-icons/fa";
import { categories } from "../../pages/ProductsComponents/ProductData";

function Navigation() {
  return (
    <div className="shadow-md navigation fixed top-0 left-0 right-0 z-10">
      <nav className="container mx-auto relative">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img
              className="h-15 w-20 object-cover"
              src="/assets/navigation-img/logo-myntra.png"
              alt="logo-myntra"
            />
          </Link>
          <div>
            <ul className="flex items-center text-m uppercase font-semibold">
              {categories.map((item, i) => (
                <Menu menu={item} key={i} />
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4 navigationSearch p-4 rounded-xl">
            <FaSearch />
            <input
              className="outline-none"
              type="text"
              placeholder="Search for products, brands and more..."
            />
          </div>
          <div className="flex items-center gap-6">
            <NavigationRight linkTo="singin" name="Profile">
              <FaUser />
            </NavigationRight>
            <NavigationRight linkTo="wishlist" name="Wishlist">
              <FaHeart />
            </NavigationRight>
            <NavigationRight linkTo="cart" name="Cart" cartCount="1">
              <FaShoppingBag />
            </NavigationRight>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
