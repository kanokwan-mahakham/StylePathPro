import React, { useState, useEffect } from "react";
import axios from "axios";
import EditHome from "./features/Home/EditHome";
import HomePage from "./features/Home/HomePage";
import LoginComponent from "./features/Login/LoginUser";
import RegisterUser from "./features/Registers/RegisterPage/Register-user";
import RegisterCompany from "./features/Registers/RegisterPage/Register-company";
import ChoosePage from "./features/Registers/Choose/chooseRegisters";
import ProfileUser from "./features/Profile/ProfileUser";
import ProfileFactory from "./features/Profile/ProfileFactory";
import ProfileAddmin from "./features/Profile/ProfileAddmin";
import ProfileFactoryEdit from "./features/Profile/ProfileFactory/ProfileFactoryEdit";
import PopupAddProductDesigner from "./features/Registers/RegisterPage/popup/product/designer/addproduct";
import EditProfileUser from "./features/Profile/ProfileUser/EditProfileUser";
import PopupAddProductFarbic from "./features/Registers/RegisterPage/popup/product/farbic/addproduct";
import PopupAddProductFactory from "./features/Registers/RegisterPage/popup/product/factory/addproduct";
import HelpmeFactoryOne from "./features/HelpMe/factory/page1";
import HelpmeFactoryTwo from "./features/HelpMe/factory/page2";
import HelpmeFabicOne from "./features/HelpMe/fabic/page1";
import HelpmeFabicTwo from "./features/HelpMe/fabic/page2";
import HelpmeDesignOne from "./features/HelpMe/designer/page1";
import HelpmeDesignTwo from "./features/HelpMe/designer/page2";
import Category from "./features/Category";
import Filter from "./features/Category/Filter";
import PopupPayment from "./features/Payment/popupPayment";
import CheckData from "./features/Registers/RegisterPage/popup/checkData";
import CheackPayment from "./features/Payment/checkPayment";

import Compare from "./features/Compare/index";
import { Routes, Route } from "react-router-dom";

function App() {
  const url = `http://localhost:5000`;
  const [user, setUser] = useState("");
  const [companies, setCompanies] = useState([]);
  const [favs, setFavs] = useState([]);
  const [imageHome, setImageHome] = useState([]);

  const [information, setInformation] = useState([]);
  const [products, setProducts] = useState([]);
  const [compares, setCompares] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [packages, setPackages] = useState([]);
  const [showNoti, setShownoti] = useState("");
  const [notis, setNotis] = useState([]);

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // เดือนใน JavaScript เริ่มจาก 0
  const year = String(currentDate.getFullYear()).slice(2); // หรือคุณสามารถใช้ .substr(2) แทน .slice(2)
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const [formattedTime, setFormattedTime] = useState(`${hours}.${minutes}`);
  const [formattedDay, setFormattedDay] = useState(`${day}-${month}-${year}`);

  useEffect(() => {
    async function getCompanies() {
      try {
        const resCompany = await axios.get(`${url}/users`);
        const resImageHome = await axios.get(`${url}/informations/1`);
        const resCustomerFavs = await axios.get(`${url}/customerFavs`);
        // const resPackages = await axios.get(`${url}/packages/delete/${formattedDay}`)
        // if (resPackages) {
        //   await axios.delete(`${url}/packages/${resPackages.data.order.id}`);
        // }
        setCompanies(resCompany.data);
        setFavs(resCustomerFavs.data);
        setImageHome(resImageHome.data);
        console.log("seccess");
      } catch (error) {
        console.error(error);
      }
    }
    getCompanies();
  }, []);

  useEffect(() => {
    async function getInformation() {
      if (typeof user == "object") {
        const resCompany = await axios.get(`${url}/users`);
        const res = await axios.get(
          `${url}/informations/${user.informationId}`
        );
        const resProducts = await axios.get(`${url}/products`);
        const resPackages = await axios.get(`${url}/packages`);
        const resNoti = await axios.get(`${url}/notis`);
        setCompanies(resCompany.data);
        setProducts(resProducts.data);
        setFilterProduct(resProducts.data);
        setInformation(res.data);
        setPackages(resPackages.data);
        setNotis(resNoti.data);
      }
    }
    getInformation();
  }, [user]);

  return (
    <>
      {companies.length > 0 ? (
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                imageHome={imageHome}
                url={url}
                user={user}
                setUser={setUser}
                companies={companies}
                setFavs={setFavs}
                compares={compares}
                setCompares={setCompares}
                showNoti={showNoti}
                setShownoti={setShownoti}
                notis={notis}
                setNotis={setNotis}
              />
            }
          />
          <Route
            path="/edit-home"
            element={
              <EditHome
                url={url}
                user={user}
                setUser={setUser}
                companies={companies}
              />
            }
          />
          <Route
            path="/login"
            element={<LoginComponent url={url} setUser={setUser} />}
          />
          <Route
            path="/register-user"
            element={<RegisterUser setUser={setUser} url={url} />}
          />
          <Route
            path="/register-company"
            element={<RegisterCompany setUser={setUser} url={url} />}
          />
          <Route path="/choose-login-page" element={<ChoosePage />} />
          <Route
            path="/profile-user"
            element={
              <ProfileUser
                user={user}
                setUser={setUser}
                url={url}
                companies={companies}
                favs={favs}
                setFavs={setFavs}
                information={information}
                compares={compares}
                setCompares={setCompares}
              />
            }
          />
          <Route
            path="/profile-user-edit"
            element={
              <EditProfileUser
                user={user}
                setUser={setUser}
                url={url}
                companies={companies}
                favs={favs}
                setFavs={setFavs}
                information={information}
                setInformation={setInformation}
              />
            }
          />

          <Route
            path="/profile-addmin"
            element={<ProfileAddmin user={user} setUser={setUser} />}
          />
          <Route
            path="/profile-company"
            element={
              <ProfileFactory
                user={user}
                setUser={setUser}
                url={url}
                information={information}
                products={products}
                setProducts={setProducts}
                compares={compares}
                setCompares={setCompares}
              />
            }
          />
          <Route
            path="/edit-profile-company"
            element={
              <ProfileFactoryEdit
                user={user}
                setUser={setUser}
                url={url}
                companies={companies}
                favs={favs}
                setFavs={setFavs}
                information={information}
                setInformation={setInformation}
                products={products}
                setProducts={setProducts}
              />
            }
          />
          <Route
            path="/add-product-desingner"
            element={
              <PopupAddProductDesigner
                url={url}
                user={user}
                setProducts={setProducts}
              />
            }
          />
          <Route
            path="/add-product-company"
            element={
              <PopupAddProductFactory
                url={url}
                user={user}
                setProducts={setProducts}
              />
            }
          />
          <Route
            path="/add-product-fabric"
            element={
              <PopupAddProductFarbic
                url={url}
                user={user}
                setProducts={setProducts}
              />
            }
          />
          <Route
            path="/company"
            element={
              <Category
                url={url}
                user={user}
                setUser={setUser}
                setFavs={setFavs}
                companies={companies}
                type={"company"}
                compares={compares}
                setCompares={setCompares}
              />
            }
          />
          <Route
            path="/designer"
            element={
              <Category
                url={url}
                user={user}
                setUser={setUser}
                setFavs={setFavs}
                companies={companies}
                type={"designer"}
                compares={compares}
                setCompares={setCompares}
              />
            }
          />
          <Route
            path="/fabric"
            element={
              <Category
                url={url}
                user={user}
                setUser={setUser}
                setFavs={setFavs}
                companies={companies}
                type={"fabric"}
                compares={compares}
                setCompares={setCompares}
              />
            }
          />

          <Route
            path="/filter-company"
            element={
              <Filter
                url={url}
                user={user}
                setUser={setUser}
                setFavs={setFavs}
                companies={companies}
                type={"company"}
                compares={compares}
                setCompares={setCompares}
                products={products}
                filterProduct={filterProduct}
                setFilterProduct={setFilterProduct}
              />
            }
          />
          <Route
            path="/filter-designer"
            element={
              <Filter
                url={url}
                user={user}
                setUser={setUser}
                setFavs={setFavs}
                companies={companies}
                type={"designer"}
                compares={compares}
                setCompares={setCompares}
                products={products}
                filterProduct={filterProduct}
                setFilterProduct={setFilterProduct}
              />
            }
          />
          <Route
            path="/filter-fabric"
            element={
              <Filter
                url={url}
                user={user}
                setUser={setUser}
                setFavs={setFavs}
                companies={companies}
                type={"fabric"}
                compares={compares}
                setCompares={setCompares}
                products={products}
                filterProduct={filterProduct}
                setFilterProduct={setFilterProduct}
              />
            }
          />

          <Route
            path="/compare"
            element={
              <Compare
                url={url}
                user={user}
                setUser={setUser}
                compares={compares}
                setCompares={setCompares}
                products={products}
              />
            }
          />

          <Route
            path="/HelpmeFactoryOne"
            element={
              <HelpmeFactoryOne
                filterProduct={filterProduct}
                setFilterProduct={setFilterProduct}
              />
            }
          />
          <Route
            path="/HelpmeFactoryTwo"
            element={
              <HelpmeFactoryTwo
                filterProduct={filterProduct}
                setFilterProduct={setFilterProduct}
              />
            }
          />

          <Route
            path="/HelpmeFabicOne"
            element={
              <HelpmeFabicOne
                filterProduct={filterProduct}
                setFilterProduct={setFilterProduct}
              />
            }
          />
          <Route
            path="/HelpmeFabicTwo"
            element={
              <HelpmeFabicTwo
                filterProduct={filterProduct}
                setFilterProduct={setFilterProduct}
              />
            }
          />
          <Route
            path="/HelpmeDesignOne"
            element={
              <HelpmeDesignOne
                filterProduct={filterProduct}
                setFilterProduct={setFilterProduct}
              />
            }
          />
          <Route
            path="/HelpmeDesignTwo"
            element={
              <HelpmeDesignTwo
                filterProduct={filterProduct}
                setFilterProduct={setFilterProduct}
              />
            }
          />

          <Route
            path="/payment-day"
            element={
              <PopupPayment
                url={url}
                user={user}
                pomotion={"day"}
                setPackages={setPackages}
                setNotis={setNotis}
              />
            }
          />
          <Route
            path="/payment-month"
            element={
              <PopupPayment
                url={url}
                user={user}
                pomotion={"month"}
                setPackages={setPackages}
                setNotis={setNotis}
              />
            }
          />
          <Route
            path="/payment-year"
            element={
              <PopupPayment
                url={url}
                user={user}
                pomotion={"year"}
                setPackages={setPackages}
                setNotis={setNotis}
              />
            }
          />
          <Route
            path="/check-regis/:id/:notiId"
            element={
              <CheckData
                url={url}
                companies={companies}
                setCompanies={setCompanies}
                setNotis={setNotis}
              ></CheckData>
            }
          />

          <Route
            path="/check-payment/:id/:notiId"
            element={
              <CheackPayment url={url} packages={packages} setPackages={setPackages} setNotis={setNotis}/>
            }
          />
        </Routes>
      ) : (
        <div>Loading....</div>
      )}
    </>
  );
}

export default App;
