  import React, { useState } from "react";
  import styled from "styled-components";
  import Button from "../../Component/Botton";
  import InputLoginFields from "../../Component/inputLogin";
  import { Link, useNavigate } from "react-router-dom";
  import Swal from "sweetalert2";
  import axios from "axios";

  const LoginComponent = ({ url, setUser, className }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // นำเข้า useNavigate ที่นี่

    async function submit() {

      if (!username || !password ) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'โปรดกรอดข้อมูลให้ครบ',
          text: 'กรุณาลองใหม่อีกครั้ง',
          showConfirmButton: false,
          timer: 2000
        });
        return;
      }
      try {
        const response = await axios.get(`${url}/users/${username}/${password}`)

        if (response.data.user) {
          console.log('User found:', response.data.user);
          setUser(response.data.user)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'เข้าสู่ระบบ',
            text: 'ยินดีต้อนรับ',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            navigate('/');
          });

        } 
        
      } catch (error) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'ไม่พบบัญชีผู้ใช้',
          text: 'กรุณาลองใหม่อีกครั้ง',
          showConfirmButton: false,
          timer: 2000
        });
        console.error('User not found.');
        console.error('Internal server error:', error);
      }
    };

    return (
      <div className={className}>
        <>
          <div className="container">
            <div className="left-content">
              <Link to="/" className="previous">
                &#8249;
              </Link>
              <h1>ยินดีต้อนรับ</h1>
              <p>เราพร้อมให้บริการคุณ</p>

              <InputLoginFields
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                  >
                    <path
                      d="M13.5513 17.535H11.9171V15.9007C11.9171 14.5468 10.8195 13.4493 9.46562 13.4493H4.56277C3.20888 13.4493 2.11134 14.5468 2.11134 15.9007V17.535H0.477051V15.9007C0.477051 13.6443 2.30629 11.815 4.56277 11.815H9.46562C11.7221 11.815 13.5513 13.6443 13.5513 15.9007V17.535ZM7.01419 10.1807C4.30642 10.1807 2.11134 7.98562 2.11134 5.27786C2.11134 2.57008 4.30642 0.375 7.01419 0.375C9.72196 0.375 11.9171 2.57008 11.9171 5.27786C11.9171 7.98562 9.72196 10.1807 7.01419 10.1807ZM7.01419 8.54643C8.81934 8.54643 10.2828 7.08304 10.2828 5.27786C10.2828 3.47267 8.81934 2.00929 7.01419 2.00929C5.20901 2.00929 3.74562 3.47267 3.74562 5.27786C3.74562 7.08304 5.20901 8.54643 7.01419 8.54643Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                }
                placeholder="ชื่อผู้ใช้"
                type="text"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <InputLoginFields
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                  >
                    <path
                      d="M3.11134 6.19754V5.3804C3.11134 2.67262 5.30642 0.477539 8.0142 0.477539C10.722 0.477539 12.9171 2.67262 12.9171 5.3804V6.19754H14.5513C15.0026 6.19754 15.3685 6.56339 15.3685 7.01468V16.8204C15.3685 17.2717 15.0026 17.6375 14.5513 17.6375H1.47706C1.02576 17.6375 0.659912 17.2717 0.659912 16.8204V7.01468C0.659912 6.56339 1.02576 6.19754 1.47706 6.19754H3.11134ZM13.7342 7.83182H2.2942V16.0033H13.7342V7.83182ZM7.19706 12.516C6.70857 12.2334 6.37991 11.7053 6.37991 11.1004C6.37991 10.1978 7.11158 9.46611 8.0142 9.46611C8.91681 9.46611 9.64848 10.1978 9.64848 11.1004C9.64848 11.7053 9.31983 12.2334 8.83134 12.516V14.369H7.19706V12.516ZM4.74563 6.19754H11.2828V5.3804C11.2828 3.57521 9.81935 2.11182 8.0142 2.11182C6.20901 2.11182 4.74563 3.57521 4.74563 5.3804V6.19754Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                }
                placeholder="รหัสผ่าน"
                type="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />

              <div className="bttncon">
              <Button text="เข้าสู่ระบบ" onClick={submit} />
              </div>
              <div className="additional-text">
                <div className="text1">ยังไม่มีบัญชี</div>
                <Link to="/choose-login-page" className="text2">
                  สมัครสมาชิก
                </Link>
              </div>
            </div>
            <div className="right-content">
              <div className="right-img"></div>
            </div>
          </div>
        </>
      </div>
    );
  };

  export default styled(LoginComponent)`
  @import url('https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap');
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  a{
    text-decoration: none;
    font-family: "Anuphan";
  }
    .container {
      max-width: 1110px;
      font-family: "Anuphan";
      max-height: 550px;
      width: 100%;
      height:100%;
      background-color: #ffffff;
      border-radius: 54px;
      display: flex;
      flex-wrap: wrap;
      align-content: space-around;
      flex-direction: row;
      padding: 30px;
      box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.4);
    }

    h1 {
      font-size: 120px;
      font-weight: bold;
      margin: 5px;
      text-align: center;
      font-family: "Anuphan";
    }

    p {
      text-align: center;
      padding-bottom: 10px;
      font-size: 17.55px;
      margin: 15px;
      font-family: "Anuphan";
    }

    .group-underline {
      display: flex;
      justify-content: center;
    }

    .underline {
      width: 50%;
      height: 1.444px;
      background: #000;
    }

    .underline2 {
      width: 50%;
      height: 1.444px;
      background: #dbdbdb;
    }

    .bttncon {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #FFF;
    }

    .button {
      display: flex;
      width: 20%;  
      padding: 10px 5px;
      justify-content: center;
      font-family: "Lora";
      align-items: center;
      gap: 5.775px;
      background: #141415;
      border-radius: 8.663px;
      cursor: pointer;
      margin-top: 20px;
    }

    .button-text {
      color: #fff;
      text-align: center;
      font-family: "Anuphan";
      font-size: 13px;
      font-weight: 700;
      line-height: 17.325px;
    }

    .text-under-button {
      margin-top: 20px;
      font-size: 20px;
    }

    .previous {
      text-decoration: none;
      display: inline-block;
      padding: 8px 16px;
      background-color: #f1f1f1;
      color: black;
      border-radius: 50%;
      margin-left: 0px;
  }

    .previous:hover {
      background-color: #ddd;
      color: black;
    }

    .right-content {
      width: 500px ;
      max-height: 320px;
      border-radius: 40px;
      margin-left:20px;
      margin-top:50px;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url("https://happiestcamper.com/wp-content/uploads/2020/09/DSC03551.jpg") -228.551px -176.433px / 150.681% 182.082% no-repeat;
    }


    .additional-text {
      font-size: 15px;
      display: flex;
      justify-content: center;
      font-family: "Anuphan";
      margin-top: 10px;
     
    }

    .text1 {
      margin-right: 5px;
      font-size: 15px;
      font-family: "Anuphan";
      color: #807d7d;
    }

    @media (max-width: 768px) {
      .container {
        margin: 20px;
        padding: 20px;
        font-family: "Anuphan";
        width: 100%;
        height: auto;
      }

      .left-content {
        font-family: "Anuphan";
        width: 100%;
      }

      .right-content {
        font-family: "Anuphan";
        display: none;
      }
    } 
  `;