import { Link } from "react-router-dom";
import Menu from "./Menu";
import NavigationRight from "./NavigationRight";
import { FaUser, FaShoppingBag, FaHeart, FaSearch } from "react-icons/fa";
const navigationData = {
  menu: [
    {
      name: 'Man',
      link: 'man',
      submenu: [
        {
          name: 'Topwear',
          link: 'topwear',
          submenu: [
            {
              name: 'T-Shirts',
              link: 't-shirts',
              submenu: null
            },
            {
              name: 'Shirts',
              link: 'shirts',
              submenu: null
            },
            {
              name: 'Sarees',
              link: 'casual-shirts',
              submenu: null
            },
            {
              name: 'Formal Shirts',
              link: 'formal-shirts',
              submenu: null
            },
            {
              name: 'Sweaters',
              link: 'sweaters',
              submenu: null
            },
            {
              name: 'Suits',
              link: 'suits',
              submenu: null
            },
            {
              name: 'Jackets',
              link: 'jackets',
              submenu: null
            },
            {
              name: 'Sweaters',
              link: 'sweaters',
              submenu: null
            },
            {
              name: 'Rain Jackets',
              link: 'rain-jackets',
              submenu: null
            }
          ]
        },
        {
          name: 'Indian & Festive Wear',
          link: 'Indian & Festive Wear',
          submenu: [
            {
              name: 'Kurtas & Kurta Sets',
              link: 'Kurtas & Kurta Sets',
              submenu: null
            },
            {
              name: 'Sherwanis',
              link: 'Sherwanis',
              submenu: null
            },
            {
              name: 'Nehru Jackets',
              link: 'Nehru Jackets',
              submenu: null
            },
          ]
        }

      ]
    },
    {
      name: 'Women',
      link: 'women',
      submenu: [
        {
          name: 'Indian & Fusion Wear',
          link: 'Indian & Fusion Wear',
          submenu: [
            {
              name: 'Kurtas & Suits',
              link: 'Kurtas & Suits',
              submenu: null
            },
            {
              name: 'Kurtis, Tunics & Tops',
              link: 'Kurtis, Tunics & Tops',
              submenu: null
            },
            {
              name: 'Sarees',
              link: 'Sarees',
              submenu: null
            },
            {
              name: 'Ethnic Wear',
              link: 'Ethnic Wear',
              submenu: null
            },
            {
              name: 'Lehenga Cholis',
              link: 'Lehenga Cholis',
              submenu: null
            },
            {
              name: 'Suits',
              link: 'suits',
              submenu: null
            },
            {
              name: 'Dupattas & Shawls',
              link: 'Dupattas & Shawls',
              submenu: null
            },
            {
              name: 'Sweaters',
              link: 'sweaters',
              submenu: null
            },
            {
              name: 'Jackets',
              link: 'jackets',
              submenu: null
            }
          ]
        },
        {
          name: 'Western Wear',
          link: 'Western Wear',
          submenu: [
            {
              name: 'Dresses',
              link: 'Dresses',
              submenu: null
            },
            {
              name: 'Tshirts',
              link: 'Tshirts',
              submenu: null
            },
            {
              name: 'Tops',
              link: 'Tops',
              submenu: null
            },
            {
              name: 'Jeans',
              link: 'Jeans',
              submenu: null
            },
            {
              name: 'Playsuits',
              link: 'Playsuits',
              submenu: null
            },
          ]
        },
        {
          name: 'Jewellery',
          link: 'Jewellery',
          submenu: [
            {
              name: 'Fashion Jewellery',
              link: 'Fashion Jewellery',
              submenu: null
            },
            {
              name: 'Fine Jewellery',
              link: 'Fine Jewellery',
              submenu: null
            },
            {
              name: 'Earrings',
              link: 'Earrings',
              submenu: null
            },
            {
              name: 'NeckLess',
              link: 'NeckLess',
              submenu: null
            },
            {
              name: 'Playsuits',
              link: 'Playsuits',
              submenu: null
            },
          ]
        }

      ]
    },
    {
      name: 'Kids',
      link: 'Kids',
      submenu: [
        {
          name: 'Indian & Fusion Wear',
          link: 'Indian & Fusion Wear',
          submenu: [
            {
              name: 'Kurtas & Suits',
              link: 'Kurtas & Suits',
              submenu: null
            },
            {
              name: 'Kurtis, Tunics & Tops',
              link: 'Kurtis, Tunics & Tops',
              submenu: null
            },
            {
              name: 'Sarees',
              link: 'Sarees',
              submenu: null
            },
            {
              name: 'Ethnic Wear',
              link: 'Ethnic Wear',
              submenu: null
            },
            {
              name: 'Lehenga Cholis',
              link: 'Lehenga Cholis',
              submenu: null
            },
            {
              name: 'Suits',
              link: 'suits',
              submenu: null
            },
            {
              name: 'Dupattas & Shawls',
              link: 'Dupattas & Shawls',
              submenu: null
            },
            {
              name: 'Sweaters',
              link: 'sweaters',
              submenu: null
            },
            {
              name: 'Jackets',
              link: 'jackets',
              submenu: null
            }
          ]
        },
        {
          name: 'Western Wear',
          link: 'Western Wear',
          submenu: [
            {
              name: 'Dresses',
              link: 'Dresses',
              submenu: null
            },
            {
              name: 'Tshirts',
              link: 'Tshirts',
              submenu: null
            },
            {
              name: 'Tops',
              link: 'Tops',
              submenu: null
            },
            {
              name: 'Jeans',
              link: 'Jeans',
              submenu: null
            },
            {
              name: 'Playsuits',
              link: 'Playsuits',
              submenu: null
            },
          ]
        },
        {
          name: 'Jewellery',
          link: 'Jewellery',
          submenu: [
            {
              name: 'Fashion Jewellery',
              link: 'Fashion Jewellery',
              submenu: null
            },
            {
              name: 'Fine Jewellery',
              link: 'Fine Jewellery',
              submenu: null
            },
            {
              name: 'Earrings',
              link: 'Earrings',
              submenu: null
            },
            {
              name: 'NeckLess',
              link: 'NeckLess',
              submenu: null
            },
            {
              name: 'Playsuits',
              link: 'Playsuits',
              submenu: null
            },
          ]
        }

      ]
    },
    {
      name: 'Homs & Living',
      link: 'Homs & Living',
      submenu: [
        {
          name: 'Indian & Fusion Wear',
          link: 'Indian & Fusion Wear',
          submenu: [
            {
              name: 'Kurtas & Suits',
              link: 'Kurtas & Suits',
              submenu: null
            },
            {
              name: 'Kurtis, Tunics & Tops',
              link: 'Kurtis, Tunics & Tops',
              submenu: null
            },
            {
              name: 'Sarees',
              link: 'Sarees',
              submenu: null
            },
            {
              name: 'Ethnic Wear',
              link: 'Ethnic Wear',
              submenu: null
            },
            {
              name: 'Lehenga Cholis',
              link: 'Lehenga Cholis',
              submenu: null
            },
            {
              name: 'Suits',
              link: 'suits',
              submenu: null
            },
            {
              name: 'Dupattas & Shawls',
              link: 'Dupattas & Shawls',
              submenu: null
            },
            {
              name: 'Sweaters',
              link: 'sweaters',
              submenu: null
            },
            {
              name: 'Jackets',
              link: 'jackets',
              submenu: null
            }
          ]
        },
        {
          name: 'Western Wear',
          link: 'Western Wear',
          submenu: [
            {
              name: 'Dresses',
              link: 'Dresses',
              submenu: null
            },
            {
              name: 'Tshirts',
              link: 'Tshirts',
              submenu: null
            },
            {
              name: 'Tops',
              link: 'Tops',
              submenu: null
            },
            {
              name: 'Jeans',
              link: 'Jeans',
              submenu: null
            },
            {
              name: 'Playsuits',
              link: 'Playsuits',
              submenu: null
            },
          ]
        },
        {
          name: 'Jewellery',
          link: 'Jewellery',
          submenu: [
            {
              name: 'Fashion Jewellery',
              link: 'Fashion Jewellery',
              submenu: null
            },
            {
              name: 'Fine Jewellery',
              link: 'Fine Jewellery',
              submenu: null
            },
            {
              name: 'Earrings',
              link: 'Earrings',
              submenu: null
            },
            {
              name: 'NeckLess',
              link: 'NeckLess',
              submenu: null
            },
            {
              name: 'Playsuits',
              link: 'Playsuits',
              submenu: null
            },
          ]
        }

      ]
    },
    {
      name: 'Beauty',
      link: 'Beauty',
      submenu: [
        {
          name: 'Indian & Fusion Wear',
          link: 'Indian & Fusion Wear',
          submenu: [
            {
              name: 'Kurtas & Suits',
              link: 'Kurtas & Suits',
              submenu: null
            },
            {
              name: 'Kurtis, Tunics & Tops',
              link: 'Kurtis, Tunics & Tops',
              submenu: null
            },
            {
              name: 'Sarees',
              link: 'Sarees',
              submenu: null
            },
            {
              name: 'Ethnic Wear',
              link: 'Ethnic Wear',
              submenu: null
            },
            {
              name: 'Lehenga Cholis',
              link: 'Lehenga Cholis',
              submenu: null
            },
            {
              name: 'Suits',
              link: 'suits',
              submenu: null
            },
            {
              name: 'Dupattas & Shawls',
              link: 'Dupattas & Shawls',
              submenu: null
            },
            {
              name: 'Sweaters',
              link: 'sweaters',
              submenu: null
            },
            {
              name: 'Jackets',
              link: 'jackets',
              submenu: null
            }
          ]
        },
        {
          name: 'Western Wear',
          link: 'Western Wear',
          submenu: [
            {
              name: 'Dresses',
              link: 'Dresses',
              submenu: null
            },
            {
              name: 'Tshirts',
              link: 'Tshirts',
              submenu: null
            },
            {
              name: 'Tops',
              link: 'Tops',
              submenu: null
            },
            {
              name: 'Jeans',
              link: 'Jeans',
              submenu: null
            },
            {
              name: 'Playsuits',
              link: 'Playsuits',
              submenu: null
            },
          ]
        },
        {
          name: 'Jewellery',
          link: 'Jewellery',
          submenu: [
            {
              name: 'Fashion Jewellery',
              link: 'Fashion Jewellery',
              submenu: null
            },
            {
              name: 'Fine Jewellery',
              link: 'Fine Jewellery',
              submenu: null
            },
            {
              name: 'Earrings',
              link: 'Earrings',
              submenu: null
            },
            {
              name: 'NeckLess',
              link: 'NeckLess',
              submenu: null
            },
            {
              name: 'Playsuits',
              link: 'Playsuits',
              submenu: null
            },
          ]
        }

      ]
    },
  ]
};
function Navigation() {
  return (
    <div className="shadow-md navigation fixed top-0 left-0 right-0 z-10">
      <nav className="container mx-auto relative">
        <div className='flex items-center justify-between'>
          <Link to="/">
            < img className="h-15 w-20 object-cover" src="/assets/navigation-img/logo-myntra.png" alt="logo-myntra" />
          </Link>
          <div>
            <ul className='flex items-center text-m uppercase font-semibold'>
              {
                navigationData.menu.length > 0 ? navigationData.menu.map((item, i) =>
                  <Menu menu={item} key={i} />
                ) : null
              }
            </ul>
          </div>
          <div className="flex items-center gap-4 navigationSearch p-4 rounded-xl">
            <FaSearch />
            <input className="outline-none" type="text" placeholder="Search for products, brands and more..." />
          </div>
          <div className="flex items-center gap-6">
            <NavigationRight linkTo="singin" name="Profile" ><FaUser /> </NavigationRight>
            <NavigationRight linkTo="wishlist" name="Wishlist" > <FaHeart /></NavigationRight>
            <NavigationRight linkTo="cart" name="Cart" cartCount="1" ><FaShoppingBag /></NavigationRight>
          </div>
        </div>
      </nav >
    </div >
  )
}

export default Navigation