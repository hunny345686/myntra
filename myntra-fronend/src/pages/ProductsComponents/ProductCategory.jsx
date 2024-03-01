import { FaSearch } from 'react-icons/fa'
import Category from './Category'
function ProductCategory({ category, cateName }) {
  return (
    <div className="border-b border-gray-200 py-6">
      <h3 className="-my-3 flow-root">
        <button className="flex w-full items-center justify-between bg-white py-3- pr-2 text-sm text-gray-400 hover:text-gray-500">
          <span className="font-semibold text-gray-900">{cateName}</span>
          <FaSearch />
        </button>
      </h3>
      <div className="pt-6" id="filter-section-1">
        <div className="space-y-4">
          {
            category.map((category) => {
              return (
                <Category key={category} category={category} CateName={cateName} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ProductCategory