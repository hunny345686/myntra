
function Category({ category }) {
  return (
    <div className="flex items-center">
      <input id={category} name="category[]" value={category} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
      <label htmlFor={category} className="ml-3 text-sm text-gray-600">{category}</label>
    </div>
  )
}

export default Category