import { useState } from "react";
import { FaUser, FaShoppingBag, FaHeart, FaSearch } from "react-icons/fa";



function Navigation() {
  return (
    <div className="shadow-md navigation fixed top-0 left-0 right-0">
      <nav className="container mx-auto relative">
        <div className='flex items-center justify-between'>
          <a href="">
            <img className="h-15 w-20 object-cover" src="/assets/navigation-img/logo-myntra.png" alt="logo-myntra" />
          </a>
          <div>
            <ul className='flex items-center text-m uppercase font-semibold'>
              <li className="p-6"><a href="">Man</a>
                <div className="absolute top-full left-0 right-0 bg-slate-50 p-6 sub-nav flex gap-10">
                  <div className="p-4">
                    <h2>Topwear</h2>
                    <ul>
                      <li><a href="">T-Shirts</a></li>
                      <li><a href="">Casual Shirts</a></li>
                      <li><a href="">Formal Shirts</a></li>
                      <li><a href="">Sweatshirts</a></li>
                      <li><a href="">Sweaters</a></li>
                      <li><a href="">Jackets</a></li>
                      <li><a href="">Blazers & Coats</a></li>
                      <li><a href="">Suits</a></li>
                      <li><a href="">Rain Jacket</a></li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <h2>Footwear</h2>
                    <ul>
                      <li><a href="">Casual Shoes</a></li>
                      <li><a href="">Sports Shoes</a></li>
                      <li><a href="">Formal Shoes</a></li>
                      <li><a href="">Sneakers</a></li>
                      <li><a href="">Sandals & Floaters</a></li>
                      <li><a href="">Flip Flops</a></li>
                      <li><a href="">Socks</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="p-6"><a href="#">Woman </a>
                <div className="absolute top-full left-0 right-0 bg-slate-50 p-6 sub-nav flex gap-10">
                  <div className="p-4">
                    <h2>Indian & Fusion Wear</h2>
                    <ul>
                      <li><a href="">Kurtas & Suits </a></li>
                      <li><a href="">Kurtis, Tunics & Tops</a></li>
                      <li><a href="">Sarees</a></li>
                      <li><a href="">Ethnic Wear</a></li>
                      <li><a href="">Leggings, Salwars & Churidars</a></li>
                      <li><a href="">Skirts & Palazzos</a></li>
                      <li><a href="">Dress Materials</a></li>
                      <li><a href="">Lehenga Cholis</a></li>
                      <li><a href="">Dupattas & Shawls</a></li>
                      <li><a href="">Jackets</a></li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <h2>Footwear</h2>
                    <ul>
                      <li><a href="">Kurtas & Suits </a></li>
                      <li><a href="">Kurtis, Tunics & Tops</a></li>
                      <li><a href="">Sarees</a></li>
                      <li><a href="">Ethnic Wear</a></li>
                      <li><a href="">Leggings, Salwars & Churidars</a></li>
                      <li><a href="">Skirts & Palazzos</a></li>
                      <li><a href="">Dress Materials</a></li>
                      <li><a href="">Lehenga Cholis</a></li>
                      <li><a href="">Dupattas & Shawls</a></li>
                      <li><a href="">Jackets</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="p-6"><a href="#">Kids</a>
                <div className="absolute top-full left-0 right-0 bg-slate-50 p-6 sub-nav flex gap-10">
                  <div className="p-4">
                    <h2>Boys Clothing</h2>
                    <ul>
                      <li><a href="">T-Shirts</a></li>
                      <li><a href="">Shirts</a> </li>
                      <li><a href="">Shorts</a> </li>
                      <li><a href="">Jeans</a> </li>
                      <li><a href="">Trousers</a> </li>
                      <li><a href="">Clothing Sets</a> </li>
                      <li><a href="">Ethnic Wear</a> </li>
                      <li><a href="">Track Pants & Pyjamas</a> </li>
                      <li><a href="">Jacket, Sweater & Sweatshirts</a> </li>
                      <li><a href="">Party Wear</a> </li>
                      <li><a href="">Innerwear & Thermals</a> </li>
                      <li><a href="">Nightwear & Loungewear</a> </li>
                      <li><a href="">Value Packs</a> </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <h2>Girls Clothing</h2>
                    <ul>
                      <li><a href="">T-Shirts</a></li>
                      <li><a href="">Shirts</a> </li>
                      <li><a href="">Shorts</a> </li>
                      <li><a href="">Jeans</a> </li>
                      <li><a href="">Trousers</a> </li>
                      <li><a href="">Clothing Sets</a> </li>
                      <li><a href="">Ethnic Wear</a> </li>
                      <li><a href="">Track Pants & Pyjamas</a> </li>
                      <li><a href="">Jacket, Sweater & Sweatshirts</a> </li>
                      <li><a href="">Party Wear</a> </li>
                      <li><a href="">Innerwear & Thermals</a> </li>
                      <li><a href="">Nightwear & Loungewear</a> </li>
                      <li><a href="">Value Packs</a> </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <h2>Girls Clothing</h2>
                    <ul>
                      <li><a href="">T-Shirts</a></li>
                      <li><a href="">Shirts</a> </li>
                      <li><a href="">Shorts</a> </li>
                      <li><a href="">Jeans</a> </li>
                      <li><a href="">Trousers</a> </li>
                      <li><a href="">Clothing Sets</a> </li>
                      <li><a href="">Ethnic Wear</a> </li>
                      <li><a href="">Track Pants & Pyjamas</a> </li>
                      <li><a href="">Jacket, Sweater & Sweatshirts</a> </li>
                      <li><a href="">Party Wear</a> </li>
                      <li><a href="">Innerwear & Thermals</a> </li>
                      <li><a href="">Nightwear & Loungewear</a> </li>
                      <li><a href="">Value Packs</a> </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="p-6"><a href="#">Home & Living</a></li>
              <li className="p-6"><a href="#">beauti</a></li>
            </ul>
          </div>
          <div className="flex items-center gap-4 navigationSearch p-4 rounded-xl">
            <FaSearch />
            <input className="outline-none" type="text" placeholder="Search for products, brands and more..." />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center flex-col gap-2 cursor-pointer">
              <FaUser />
              <span>Profile</span>
            </div>
            <div className="flex items-center justify-center flex-col gap-2 cursor-pointer">
              <FaHeart />
              <span>Widhlist</span>
            </div>
            <div className="flex items-center justify-center flex-col gap-2 cursor-pointer relative">
              <span className="absolute noOfItem">1</span>
              <FaShoppingBag />
              <span>Cart</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation