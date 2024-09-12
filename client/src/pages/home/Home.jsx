import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/header/Header";
import "./home.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

function Home() {
  const [category, setcategory] = useState("all");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setcategory={setcategory} />
      <FoodDisplay category={category} />
    </div>
  );
}

export default Home;
