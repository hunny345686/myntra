import { useState } from "react"

function Category({ category, CateName }) {

  const [cate, setCate] = useState({})

  // htts//Apiendpoain?q=Brand=a,s,v && colore= adk && car



  // [
  //   {
  //     brand: ["nike", "adidas"],
  //     color: ["red", "yello"],
  //     size: ["M"],
  //   }
  // ]

  // {
  //   "id": 1,
  //     "title": "iPhone 9",
  //       "description": "An apple mobile which is nothing like apple",
  //         "price": 549,
  //           "discountPercentage": 12.96,
  //             "rating": 4.69,
  //               "stock": 94,
  //                 "brand": "Alena",
  //                   "category": [
  //                     "topwear",
  //                     "jecket"
  //                   ],
  //                     "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  //                       "images": [
  //                         "https://cdn.dummyjson.com/product-images/1/1.jpg",
  //                         "https://cdn.dummyjson.com/product-images/1/2.jpg",
  //                         "https://cdn.dummyjson.com/product-images/1/3.jpg",
  //                         "https://cdn.dummyjson.com/product-images/1/4.jpg",
  //                         "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
  //                       ],
  //                         "color": "red",
  //                           "size": "s"
  // }
  // {
  //   "id": 22,
  //     "title": "iPhone 9",
  //       "description": "An apple mobile which is nothing like apple",
  //         "price": 549,
  //           "discountPercentage": 12.96,
  //             "rating": 4.69,
  //               "stock": 94,
  //                 "brand": "Addais",
  //                   "category": [
  //                     "topwear",
  //                     "jecket"
  //                   ],
  //                     "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  //                       "images": [
  //                         "https://cdn.dummyjson.com/product-images/1/1.jpg",
  //                         "https://cdn.dummyjson.com/product-images/1/2.jpg",
  //                         "https://cdn.dummyjson.com/product-images/1/3.jpg",
  //                         "https://cdn.dummyjson.com/product-images/1/4.jpg",
  //                         "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
  //                       ],
  //                         "color": "red",
  //                           "size": "s"
  // }

  const handleChange = (e) => {

    console.log(e.target.value)
    console.log(e.target.name)
  }
  return (
    <div className="flex items-center">
      <input id={category} name={CateName} value={category} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" onChange={handleChange} />
      <label htmlFor={category} className="ml-3 text-sm text-gray-600">{category}</label>
    </div>
  )
}

export default Category