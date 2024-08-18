
import { assets } from "../../assets/assets";

function NavBar() {
  return (
    <div className="flex justify-between p-4 px-10">
      <img className="w-[180px] h-[40px]" src={assets.logo} alt=""/>
      {/* <img className="" src={assets.profile_image} alt="" /> */}
    </div>
  );
}

export default NavBar;
