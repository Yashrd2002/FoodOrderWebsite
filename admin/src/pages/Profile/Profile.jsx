import { assets } from "../../assets/assets";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Profile = () => {
  const [image, setimage] = useState(null);
  const [heroimage, setHeroimage] = useState(null);
  const [imagepresent, setimagepresent] = useState(null);
  const [heroimagepresent, setHeroimagepresent] = useState(null);

  const [data, setdata] = useState({
    HeroTitle: "",
    HeroDesc: "",
    ContactNo: "",
    ContactEmail: "",
    SocialFacebook: "",
    SocialTwitter: "",
    SocialInstagram: "",
    ColorTheme:"#ffffff"
  });
 
  
  const getContent = async () => {
    const response = await axios.get(
      `https://foodorderwebsite-ac6o.onrender.com/api/content/getcontent`
    );


    if (response.data.success) {
      setdata({
        HeroTitle: response.data.data[0].HeroTitle,
        HeroDesc: response.data.data[0].HeroDesc,
        ContactNo: response.data.data[0].ContactNo,
        ContactEmail: response.data.data[0].ContactEmail,
        SocialFacebook: response.data.data[0].SocialFacebook,
        SocialTwitter: response.data.data[0].SocialInstagram,
        SocialInstagram: response.data.data[0].SocialTwitter,
        ColorTheme: response.data.data[0].ColorTheme,
      });
      setimagepresent(
        `https://foodorderwebsite-ac6o.onrender.com/images/${response.data.data[0].Navbarlogo}`
      );
      setHeroimagepresent(
        `https://foodorderwebsite-ac6o.onrender.com/images/${response.data.data[0].HeroImage}`
      );
    } else {
      toast.error(response.data.message);
    }
  };
  useEffect(() => {

    getContent();
  }, []);
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
 
  };

  const OnSubmitHandler = async (e) => {
    e.preventDefault();

    
    const formData = new FormData();
    console.log(image || imagepresent);

    if(image){
      formData.append("Navbarlogo", image);
    }
    if(heroimage){

      formData.append("HeroImage", heroimage);
    }
    
    formData.append("HeroTitle", data.HeroTitle);
    formData.append("HeroDesc", data.HeroDesc);
    formData.append("ContactNo", data.ContactNo);
    formData.append("ContactEmail", data.ContactEmail);
    formData.append("SocialFacebook", data.SocialFacebook);
    formData.append("SocialTwitter", data.SocialTwitter);
    formData.append("SocialInstagram", data.SocialInstagram);
    formData.append("ColorTheme", data.ColorTheme);
    

    const res = await axios.post(
      `https://foodorderwebsite-ac6o.onrender.com/api/content/addcontent`,
      formData
    );

    if (res.data.success) {
      setimage(null)
      setHeroimage(null)
      getContent()
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  };



  return (
    <div className="add">
      <form onSubmit={OnSubmitHandler} className="flex-col">
        <div className="flex-col">
          <p className="text-xl">Navbar Content:</p>
          <div className="add-img-upload flex-col px-4">
            <p>Navbar logo</p>
            <label htmlFor="image" className="flex gap-3">
              {!image?.name ? (
                <img src={imagepresent || assets.upload_area} alt="" />
              ) : (
                <img
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt=""
                />
              )}
            </label>
            <input
              onChange={(e) => setimage(e.target.files[0])}
              type="file"
              id="image"
              name="image"
              hidden

            />
          </div>
        </div>
        <div className="flex-col">
          <p className="text-xl">Hero Content:</p>
          <div className="add-img-upload flex-col px-4">
            <p>Hero image</p>
            <label htmlFor="heroimage">
              {!heroimage?.name  ? (
                <img src={heroimagepresent ||assets.upload_area} alt="" />
              
              ) : (
                <img
                  src={
                    heroimage
                      ? URL.createObjectURL(heroimage)
                      : assets.upload_area
                  }
                  alt=""
                />
              )}
            </label>
            <input
              onChange={(e) => setHeroimage(e.target.files[0])}
              type="file"
              id="heroimage"
              name="heroimage"
              hidden

            />
          </div>
          <div className="add-product-name flex-col px-4">
            <p>Hero Title</p>
            <input
              onChange={handleChange}
              type="text"
              required
              value={data.HeroTitle}
              placeholder="Enter Hero Title"
              name="HeroTitle"
            />
          </div>
          <div className="add-product-description flex-col px-4">
            <p>Hero Description</p>
            <textarea
              onChange={handleChange}
              value={data.HeroDesc}
              name="HeroDesc"
              rows="6"
              placeholder="Enter description"
            ></textarea>
          </div>
        </div>
        <div className="flex-col">
          <p className="text-xl">Contact:</p>
          <div className="add-product-name flex-col px-4">
            <p>Contact Number</p>
            <input
              onChange={handleChange}
              type="text"
              required
              value={data.ContactNo}
              placeholder="Enter Contact Number"
              name="ContactNo"
            />
          </div>
          <div className="add-product-name flex-col px-4">
            <p>Email</p>
            <input
              onChange={handleChange}
              type="email"
              required
              value={data.ContactEmail}
              placeholder="Enter Email"
              name="ContactEmail"
            />
          </div>
        </div>
        <div className="flex-col">
          <p className="text-xl">Socials:</p>
          <div className="add-product-name flex-col px-4">
            <p>Facebook</p>
            <input
              onChange={handleChange}
              type="text"
              required
              value={data.SocialFacebook}
              placeholder="Enter Facebook Url"
              name="SocialFacebook"
            />
          </div>
          <div className="add-product-name flex-col px-4">
            <p>Twitter</p>
            <input
              onChange={handleChange}
              type="text"
              required
              value={data.SocialTwitter}
              placeholder="Enter Twitter Url"
              name="SocialTwitter"
            />
          </div>
          <div className="add-product-name flex-col px-4">
            <p>Instagram</p>
            <input
              onChange={handleChange}
              type="text"
              required
              value={data.SocialInstagram}
              placeholder="Enter Instagram Url"
              name="SocialInstagram"
            />
          </div>
        </div>
        <div className="flex-col">
          <p className="text-xl">Color Theme:</p>
          <div className=" px-4">
            <input type="color"  value={data.ColorTheme} onChange={handleChange} name="ColorTheme"/>
          </div>
         
        </div>

        <button className="add-btn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default Profile;
