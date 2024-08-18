import React, { useEffect } from "react";
import "./Category.css";

import { assets } from "../../assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Category = () => {
  const [image, setimage] = useState(false);
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setdata({ ...data, [e.target.value]: e.target.value });
  };

  const OnSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("category", category);

    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/food/addCategory`,
      formData
    );

    if (res.data.success) {
      

      setimage(false);
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <div className="add">
      <form onSubmit={OnSubmitHandler} className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setimage(e.target.files[0])}
            type="file"
            id="image"
            name="image"
            hidden
            required
          />
        </div>

        <div className="add-product-name flex-col">

            <p>Category</p>
            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} />

        </div>
        <button className="add-btn" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Category;
