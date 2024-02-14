
function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb" className="w-full p-4 bg-gray-100 text-gray-800 mt-20">
      <div className='container mx-auto'>
        <ol className="flex h-8 space-x-2 text-gray-800">
          <li className="flex items-center">
            <a rel="noopener noreferrer" href="#" title="Back to homepage" className="flex items-center hover:underline">Home</a>
          </li>
          <li className="flex items-center space-x-1">
            <span className="text-gray-600">/</span>
            <a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline">Parent</a>
          </li>
          <li className="flex items-center space-x-1">
            <span className="text-gray-600">/</span>
            <a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline">Parent</a>
          </li>
          <li className="flex items-center space-x-1">
            <span className="text-gray-600">/</span>
            <a rel="noopener noreferrer" href="#" className="flex items-center px-1 capitalize hover:underline hover:no-underline cursor-default">Current</a>
          </li>
        </ol>
      </div>
    </nav>
  )
}

export default Breadcrumb