import { Link } from "react-router-dom"
import SubmenuItem from "./SubmenuItem"
function SubMenu({ submenu }) {
  return (
    submenu.map((item) => {
      return (
        <div>
          <Link className="px-4 py-4 inline-block">{item.name}</Link>
          <SubmenuItem submenu={item.submenu} />
        </div>

      )
    })
  )
}

export default SubMenu