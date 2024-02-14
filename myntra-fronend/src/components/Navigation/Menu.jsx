import SubMenu from "./SubMenu"
function Menu({ menu }) {
  return (
    <>
      <li className="p-6"><a href="">{menu.name}</a>
        <div className="rounded-md shadow-lg absolute top-full left-0 right-0 bg-slate-50 sub-nav flex gap-10">
          <SubMenu submenu={menu.submenu} />
        </div>
      </li>
    </>
  )
}

export default Menu