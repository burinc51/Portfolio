import React from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;

function Contact(props) {
  const theme = props.theme;

  return (
    <div className="contact container" id="contact">
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div d-flex justify-content-center">
              <img
                className="profile-pic"
                src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/329211318_723361519396840_572475017180501934_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH0xF_xu3AAKhHs15VyzOErfnQsYlnKP-Z-dCxiWco_5rS6qK25NnmHalWYtykpPjD3x3hUSM5WtDvwsRkXtnlU&_nc_ohc=6WNrZeOGnkUAb4i2DA9&_nc_oc=AdgFpliayfj5NuZYIBGPTvpoVp0W19eCo_Lu5e7zcL7u6tbnAjREeFBVf5AS6gcGDsI&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfDBjDkj6npZGAnIjciDlmIV0CgYrohOQA-5qBclCwwZzA&oe=66147B2A"
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
            </div>
          </div>
        </Fade>
       
      </div>
    </div>
  );
}

export default Contact;
