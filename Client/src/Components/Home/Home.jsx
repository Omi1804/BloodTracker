import React from "react";
import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
} from "@coreui/react";
import carousal from "../../assets/carousal.png";
import "@coreui/coreui/dist/css/coreui.min.css";
import donationIcon from "../../assets/donationIcon.png";
import "./home.css";

const Home = () => {
  return (
    <div className="homePage">
      <div className="heroSec">
        <div className="div1">
          <h1>Save Life Donate Blood</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button>Get Free Checkup</button>
        </div>
        <div className="div2">
          <div className="circle"></div>
          <div className="halfCircle halfCircle1"></div>
        </div>
      </div>
      <div className="missionSec">
        <h1>Our Mission</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="collabSec">
        <h1>Our Collaborators</h1>
        <CCarousel controls indicators dark>
          <CCarouselItem>
            <CImage className="carouselImage" src={carousal} alt="slide 1" />
            <CCarouselCaption className="caption">
              <p>NCC</p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="carouselImage" src={carousal} alt="slide 2" />
            <CCarouselCaption className="caption">
              <p>NSS</p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="carouselImage" src={carousal} alt="slide 3" />
            <CCarouselCaption className="caption">
              <p>YMCA</p>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>
      </div>
      <div className="bloodDonateSec">
        <h1>What are you waiting For ?</h1>
        <button>DONATE NOW</button>
      </div>

      <div className="homeFooter">
        <img src={donationIcon} alt="" />
        <h1>Donate your blood and save a life.</h1>
      </div>
    </div>
  );
};

export default Home;
