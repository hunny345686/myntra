import { Link } from "react-router-dom"
import SubmenuItem from "./SubmenuItem"
function SubMenu({ submenu }) {
  return (
    submenu.map((item) => {
      return (
        <div key={item.link}>
          <Link to={item.link} className="px-4 py-4 inline-block">{item.subCategoryName}</Link>
          <SubmenuItem submenu={item.subCategory} />
        </div>

      )
    })
  )
}

export default SubMenu