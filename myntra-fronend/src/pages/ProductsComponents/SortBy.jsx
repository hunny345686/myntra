
function SortBy() {
  let recommendation = ["Most Popular", "Recommended", "Best Rating", "Newest", "Price: Low to High", "Price: High to Low"]

  return (
    <div className="absolute right-0 left-0 z-10 bg-white top-full origin-top-right rounded-sm shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none mt-1" role="menu">
      <div className="py-1">
        {
          recommendation.map((item) =>
            <span key={item} className="font-medium cursor-pointer text-gray-900 block px-4 py-2 text-sm hover:bg-gray-100 ">{item}</span>
          )
        }
      </div>
    </div>
  )
}
export default SortBy