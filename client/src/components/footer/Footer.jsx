import { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./Footer.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

function Footer() {
  const [logo, setLogo] = useState(null);
  const { url } = useContext(StoreContext);
  const [data, setdata] = useState({
    ContactNo: "",
    ContactEmail: "",
    SocialFacebook: "",
    SocialTwitter: "",
    SocialInstagram: "",
  });
  const getContent = async () => {
    const response = await axios.get(
      `${url}/api/content/getcontent`
    );

    if (response.data.success) {
      setdata({
        ContactNo:response.data.data[0].ContactNo,
        ContactEmail:response.data.data[0].ContactEmail,
        SocialFacebook:response.data.data[0].SocialFacebook,
        SocialTwitter:response.data.data[0].SocialTwitter,
        SocialInstagram:response.data.data[0].SocialInstagram,
      });
      setLogo(
        `${url}/images/${response.data.data[0].Navbarlogo}`
      );
    } else {
      // toast.error(response.data.message);
    }
  };
  useEffect(() => {
    getContent();
  }, []);
  return (
    <div className="footer" id="footer">
      <div className="content">
        <div className="left">
          <img src={logo} alt="" />
          {/* <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
            dolorem?
          </p> */}
          <div className="links">
            <Link to={data.SocialFacebook} target="_blank">
              <img src={assets.facebook_icon} alt="" />
            </Link>
            <Link to={data.SocialTwitter} target="_blank">
              <img src={assets.twitter_icon} alt="" />
            </Link>
            <Link to={data.SocialInstagram} target="_blank">
              <img src={assets.linkedin_icon} alt="" />
            </Link>
          </div>
        </div>
        {/* <div className="center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div> */}
        <div className="right">
          <h2>Get In Touch</h2>
          <ul>
            <li>{data.ContactNo}</li>
            <li>{data.ContactEmail}</li>
          </ul>
        </div>
      </div>
      <hr />
      {/* <p className="footer-copyright">Copyright © 2024</p> */}
    </div>
  );
}

export default Footer;
