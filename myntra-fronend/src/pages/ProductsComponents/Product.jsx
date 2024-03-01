import { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import ProductList from "./ProductList";
import { productData } from "./ProductData"
import { useLocation } from "react-router-dom";
import SortBy from "./SortBy";
import ProductCategory from "./ProductCategory";

function Product() {
  const { pathname } = useLocation()
  const [sortDropdown, setSortDropdown] = useState(false)
  const sortRef = useRef()
  let param = pathname.split("/").at(-1);
  const filterData = productData.products.filter((item) =>
    item.category.includes(param))

  useEffect(() => {
    function listener(e) {
      if (!sortRef.current || sortRef.current.contains(e.target)) return
      setSortDropdown(false)
    }
    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)
    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [])



  let brand = filterData.map(item => item.brand)
  brand = [...new Set(brand)]
  let color = filterData.map(item => item.color)
  color = [...new Set(color)]
  let size = filterData.map(item => item.size)
  size = [...new Set(size)]

  return (
    <div className="container mx-auto" >
      <main className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between pb-2 pt-24">
          <h1 className="text-xl font-bold">FILTERS</h1>
          <div className="flex items-center">
            <div ref={sortRef} className="relative border px-4 py-2 rounded-sm p-dropdown" onClick={() => setSortDropdown(!sortDropdown)}>
              <button type="button" className="group flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                Sort: Recommended
                <FaAngleDown />
              </button>
              {
                sortDropdown && (
                  <SortBy />
                )
              }
            </div>
            <button type="button" className="ml-3 p-2 text-gray-400 hover:text-gray-500 sm:ml-4">
              <IoGrid />
            </button>
          </div>
        </div>
        <section aria-labelledby="products-heading" className="border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            <form className="hidden lg:block border-r py-4 px-1 border-gray-200">
              <ProductCategory category={brand} cateName="BRAND" />
              <ProductCategory category={color} cateName="COLOR" />
              <ProductCategory category={size} cateName="SIZE" />
            </form>

            <div className="lg:col-span-3">
              <div className="py-4 pl-6">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                  {
                    filterData.map((item) =>
                      <ProductList key={item.id} product={item} />
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div >
  )
}

export default Product