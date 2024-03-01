import { Link } from "react-router-dom";
function SubmenuItem({ submenu }) {
  return (
    <ul className="px-4 py-4">
      {submenu.map((item) => {
        return (
          <li key={item.link}>
            <Link to={item.link}>{item.cateName}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SubmenuItem;
