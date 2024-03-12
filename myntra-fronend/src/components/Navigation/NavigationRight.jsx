import { Link } from "react-router-dom";

function NavigationRight({ linkTo, name, cartCount, children }) {
  return (
    <Link to={linkTo}>
      <div className="flex items-center justify-center flex-col gap-2 cursor-pointer relative">
        {cartCount && <span className="absolute noOfItem">{cartCount}</span>}
        {children}
        <span>{name}</span>
      </div>
    </Link>
  );
}

export default NavigationRight;
