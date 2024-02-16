import { Link } from "react-router-dom"
import SubMenu from "./SubMenu"
function Menu({ menu }) {
  return (
    <>
      <li className="p-6"><Link to={menu.link}>{menu.categoryName}</Link>
        <div className="rounded-md shadow-lg absolute top-full left-0 right-0 bg-slate-50 sub-nav flex gap-10">
          <SubMenu submenu={menu.subCategory} />
        </div>
      </li>
    </>
  )
}

export default Menu