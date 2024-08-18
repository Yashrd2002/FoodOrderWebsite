import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { useContext, useEffect, useState } from "react";
import axios from "axios"
import { StoreContext } from "../../context/StoreContext";
// eslint-disable-next-line react/prop-types
function ExploreMenu({ category, setcategory }) {
  const {url} = useContext(StoreContext);

  const [cat,setCat]=useState([]);
  useEffect(()=>{
    const getCat = async()=>{
      const res = await axios.get('http://localhost:8000/api/food/getCategory')
      // console.log(res.data);
      
      if (res.data.success) {
        setCat(res.data.data);
    }
    
      
    }
    getCat();
  },[])
  // console.log(cat[0].image);
  
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-p">Choose Your Favourite</p>
      <div className="explore-menu-list">
        {cat.map((item, idx) => (
          <div
            onClick={() => {
              setcategory((prev) =>
                prev == item.category ? "all" : item.category
              );
            }}
            key={idx}
            className="explore-menu-lis-item"
          >
            <img
              className={category == item.category ? "active" : ""}
              src={`${url}/images/${item.image}`}
              alt=""
            />
            <p>{item.category}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
