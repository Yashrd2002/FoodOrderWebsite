import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

function List() {
  const [list, setlist] = useState([]);
  const [category, setCategory] = useState([]);
  // console.log("Server URL:", import.meta.env.VITE_API_URL);
  const fetchData = async () => {
    const response = await axios.get(`https://foodorderwebsite-ac6o.onrender.com/api/food/list`);

    if (response.data.success) {
      setlist(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  const deleteFood = async (id) => {
    const response = await axios.post(`https://foodorderwebsite-ac6o.onrender.com/api/food/remove`, {
      id,
    });

    if (response.data.success) {
      toast.success(response.data.message);
      await fetchData();
    } else {
      toast.error(response.data.message);
    }
  };
  const deleteFodCategory = async (id) => {
    const response = await axios.post(`https://foodorderwebsite-ac6o.onrender.com/api/food/removeCategory`, {
      id,
    });

    if (response.data.success) {
      toast.success(response.data.message);
      await fetchCategory();
    } else {
      toast.error(response.data.message);
    }
  };

  const fetchCategory = async () => {
    const response = await axios.get(
      `https://foodorderwebsite-ac6o.onrender.com/api/food/getCategory`
    );
    console.log(response);
    
    if (response.data.success) {
      setCategory(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };
  console.log(category);
  

  useEffect(() => {
    fetchData();
    fetchCategory();
  }, []);
  return (
    <div className="list flex-col add">
      <p>All Items</p>
      <div className="list-table">
        <div className="list-table-format title ">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, idx) => {
          return (
            <div key={idx} className="list-table-format">
              <img src={`https://foodorderwebsite-ac6o.onrender.com/images/${item.image}`} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => deleteFood(item._id)} className="delete">
                X
              </p>
            </div>
          );
        })}
      </div>
      <p style={{marginTop:"20px"}}>Categories</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>

          <b>Category</b>

          <b>Action</b>
        </div>
        {category.map((item, idx) => {
          return (
            <div key={idx} className="list-table-format">
              <img src={`https://foodorderwebsite-ac6o.onrender.com/images/${item.image}`} alt="" />
              <p>{item.category}</p>
              <p onClick={() => deleteFodCategory(item._id)} className="delete">
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
