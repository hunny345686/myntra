import React from 'react'

function Navigation() {
  return (
    <nav className="container mx-auto">
      <div className='flex items-center justify-between'>
        <div className="text-2xl font-semibold">MyntraLogo</div>
        <div className="navigation">
          <ul className='flex items-center'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About </a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
          </ul>
        </div>
        <div className="serch">Search</div>
        <div className="PPWL">icone wishlist</div>
      </div>
    </nav>
  )
}

export default Navigation