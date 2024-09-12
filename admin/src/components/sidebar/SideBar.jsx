import "./SideBar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-2/12 min-h-screen border-2 pt-10 p-5 md:block hidden">
      <div className="flex flex-col h-full">
        <NavLink to={"/add"} className="flex gap-4 mt-4 items-center p-2">
          <img src={assets.food} alt="" />
          <p>Add Food</p>
        </NavLink>
        <NavLink to={"/list"} className="flex gap-4 mt-4 items-center p-2">
          <img src={assets.list} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink to={"/orders"} className="flex gap-4 mt-4 items-center p-2">
          <img src={assets.order} alt="" />
          <p>Orders</p>
        </NavLink>
        <NavLink to={"/category"} className="flex gap-4 mt-4 items-center p-2">
          <img src={assets.category} alt="" />
          <p>Add Category</p>
        </NavLink>
        <NavLink to={"/profile"} className="flex gap-4 mt-4 items-center p-2">
          <img src={assets.content} alt="" />
          <p>Content</p>
        </NavLink>
        <NavLink to={"/promo"} className="flex gap-4 mt-4 items-center p-2">
          <img src={assets.code} alt="" />
          <p>Add Promo</p>
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar
