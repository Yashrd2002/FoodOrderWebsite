import { useEffect, useState } from "react";
import "./Header.css";
import axios from "axios";

function Header() {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    Title: "Order Now your food",
    desc: "Food Store is an online food ordering system that allows customers to browse a wide variety of menus, place orders, and even track their order.",
  });
  const getContent = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/content/getcontent"
    );

    if (response.data.success) {

      
      setData({
        Title:response.data.data[0].HeroTitle,
        desc:response.data.data[0].HeroDesc
      })
      setImage(
        `http://localhost:8000/images/${response.data.data[0].HeroImage}`
      );
    } else {
      // toast.error(response.data.message);
    }
  };
  useEffect(() => {
    getContent();
  }, []);
  return (
    <div className="header">
      <div
        className={`content `}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2.5vw",
          borderRadius: "20px",
          padding: "30px",
        }}
      >
        <h2>{data.Title}</h2>

        <p>
        {data.desc}
        </p>
        <div>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
