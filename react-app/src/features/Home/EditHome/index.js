import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../Component/Navbar";
import EditBlogSlide from "../../Component/EditBlogSlide";
import BoxData from "../../Component/BoxData";
import Footer from "../../Component/Footer";

const EditHome = ({ url, user, setUser, companies, className }) => {
  const image = require("../../../image Hackathon/image/background.jpeg");
  const edit = require("../../../image Hackathon/icon/editing.png");

  const [frabic, setFrabic] = useState([])
  const [factory, setFactory] = useState([])
  const [designer, setDesigner] = useState([])
  
 
  useEffect(() => {
    async function getCompanies() {
      const frabicCompanies = companies.filter(company => company.type == "frabic shop" && company.status == "company");
      const factoryCompanies = companies.filter(company => company.type == "company" && company.status == "company");
      const designerCompanies = companies.filter(company => company.type == "designer" && company.status == "company");
      
      setFrabic(frabicCompanies);
      setFactory(factoryCompanies);
      setDesigner(designerCompanies);
    }
    getCompanies();
  }, []);
  
  return (
    <div className={className}>
      <Navbar user={user} setUser={setUser} />
      <div className="image">
        <img src={image}></img>
        <div className="icon-overlay">
            <img src={edit}/>
        </div>
      </div>
      <div className="blog">
        <div className="header-text">
          <p>Blog</p>
        </div>
        <EditBlogSlide />
      </div>

      <div className="show-category">
        {/* Factory */}
        <div id="factory">
          <div className="header-category">
            <p>Factory</p>
          </div>
          <div className="detail">
            <p>รับผลิตและจัดจำหน่ายสินค้าประเภทเสื้อผ้า</p>
            <a id="seeAll">See All</a>
          </div>
          <div className="show-slide">
          {factory.slice(0, 3).map((company) => {
                return <BoxData key={company.id} user={user} url={url} item={company}  />;
            })}
          </div>
        </div>

        {/* Fabric */}
        <div id="fabric">
          <div className="header-category">
            <p>Fabric</p>
          </div>
          <div className="detail">
            <p>ร้านค้าขายปลีก-ส่ง ผ้าม้วนนำเข้าราคาถูก</p>
            <a id="seeAll">See All</a>
          </div>
          <div className="show-slide">
          {frabic.slice(0, 3).map((company) => {
               return <BoxData key={company.id} user={user} url={url} item={company}  />;
            })}
          </div>
        </div>

        {/* Designer */}
        <div id="designer">
          <div className="header-category">
            <p>Designer</p>
          </div>
          <div className="detail">
            <p>หามืออาชีพออกแบบเสื้อผ้าแฟชั่นงานคุณภาพ</p>
            <a id="seeAll">See All</a>
          </div>
          <div className="show-slide">
          {designer.slice(0, 3).map((company) => {
                return <BoxData key={company.id} user={user} url={url} item={company}  />;
            })}
          </div>
        </div>
      </div>
      <Footer/>
      
    </div>
  );
};

export default styled(EditHome)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  .navbar {
    position: absolute;
    width: 100%;
    z-index: 2;
  }
  .image img {
    width: 100%;
    height: 800px;
    border-bottom-left-radius: 400px;
    border-bottom-right-radius: 400px;
    opacity: 0.4;
  }
  .icon-overlay img{
    border-radius: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
  }
  .blog {
    width: 100%;
    height: 600px;
    margin: 80px 0px;
  }
  .header-text {
    border-radius: 50px;
    border: 1px solid black;
    width: fit-content;
    height: fit-content;
  }
  .header-text p {
    margin: 15px 60px;
    font-family: "lora";
    font-size: 45px;
    font-weight: 500;
  }

  /*Category */
  .show-category {
    background-color: #f7f5e6;
    padding: 40px;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
  }
  .header-category {
    background-color: #333a56;
    border-radius: 50px;
    border: 1px solid black;
    width: fit-content;
    height: fit-content;
    color: white;
    margin: 50px;
  }
  .header-category p {
    margin: 15px 60px;
    font-family: "lora";
    font-size: 45px;
    font-weight: 500;
  }
  .detail {
    display: flex;
    padding: 0px 80px 40px 50px;
    align-content: center;
    justify-content: space-between;
  }
  .detail p {
    font-family: "Anuphan";
    font-size: 33px;
    font-weight: 400;
    margin: 0 80px;
  }
  .detail a {
    font-family: "lora";
    font-size: 25px;
    font-weight: 500;
    margin: 0px;
  }
  .detail #seeAll{
    font-family: "lora";
    font-size: 25px;
    font-weight: 500;
    color: #4F7108;
    text-decoration: none;
  }

  /*Showslide */
  .show-slide {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
  }

  
`;