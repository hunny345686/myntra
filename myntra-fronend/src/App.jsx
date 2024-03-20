import Footer from "./components/Footer";
import Navigation from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { WishlistProvider } from "./ContextAPI/WishlistContext";

function App() {
  return (
    <WishlistProvider>
      <Navigation />
      <Outlet />
      <Footer />
    </WishlistProvider>
  );
}

export default App;

// const items = [
//   { id: 1, name: "Item 1", category: "category1" },
//   { id: 2, name: "Item 2", category: "category2" },
//   { id: 3, name: "Item 3", category: "category1" },
//   { id: 4, name: "Item 4", category: "category3" },
//   { id: 5, name: "Item 4", category: "category3" },
//   { id: 6, name: "Item 4", category: "category3" },
//   { id: 7, name: "Item 4", category: "category3" },
//   { id: 8, name: "Item 4", category: "category3" },
//   { id: 9, name: "Item 4", category: "category3" },
//   // Add more items with different categories as needed
// ];
// const [selectedCategories, setSelectedCategories] = useState([]);

// const handleCategorySelect = (category) => {
//   console.log("category", category);
//   if (selectedCategories.includes(category)) {
//     setSelectedCategories(
//       selectedCategories.filter((cat) => cat !== category)
//     );
//   } else {
//     setSelectedCategories([...selectedCategories, category]);
//   }
//   console.log(selectedCategories.includes(category));
// };

// const filteredItems =
//   selectedCategories.length > 0
//     ? items.filter((item) => selectedCategories.includes(item.category))
//     : items;

//     <div>
//     <h1>Filter by Multiple Categories</h1>

//     <div>
//       <h2>Available Categories:</h2>
//       {Array.from(new Set(items.map((item) => item.category))).map(
//         (category) => (
//           <label key={category}>
//             <input
//               type="checkbox"
//               value={category}
//               checked={selectedCategories.includes(category)}
//               onChange={() => handleCategorySelect(category)}
//             />
//             {category}
//           </label>
//         )
//       )}
//     </div>
//     <div>
//       <h2>Filtered Items:</h2>
//       <ul>
//         {filteredItems.map((item) => (
//           <li key={item.id}>
//             {item.name} - {item.category}
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
