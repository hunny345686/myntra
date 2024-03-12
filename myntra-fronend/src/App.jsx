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
