import React, { useState } from "react";
import InputRegField from '../../../Component/inputReg';
import Button from '../../../Component/Botton';
import './Register-user.css'
import styled from 'styled-components';
import { Link,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const StyledBotton = styled.div`
.button {
    display: flex;
    width: 288.75px;
    padding: 8.663px 5.775px;
    justify-content: center;
    align-items: center;
    gap: 5.775px;
    background: #141415;
    border-radius: 8.663px;
    cursor: pointer;
    margin-top: 20px;
    margin-left:40px;
}
.button-text {
    color: #FFF;
    text-align: center;
    font-family: 'Open Sans';
    font-size: 13px;    
    font-weight: 700;
    line-height: 17.325px;
}
`;
const Stylep = styled.div`

    margin: 10px;
    padding-left: 70px;
    font-size: 11.55px;
    
`


const RegisterUser = ({setUser,url,className}) => {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [comfirmPassword, setComfirmPassword] = useState("")
    const navigate = useNavigate();

    async function submit(){

        if (!username || !email || !password || !comfirmPassword ) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Please fill in all fields',
              showConfirmButton: false,
              timer: 2000
            });
            return;
          }

          if (password !== comfirmPassword) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Passwords do not match',
              showConfirmButton: false,
              timer: 2000
            });
            return;
          }

        try{
        const newUser = {
            username:username,
            email:email,
            password:password,
            status:"customer"
          };
          
        const response = await axios.post(`${url}/users`,newUser);
        

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            navigate('/login');
          });
          console.log("User registered successfully", response.data);

        }catch(error){
            console.error(`Register error : ${error}`)
        }

    }

    return (
        
        <div className="container">
            
            <div className="left-content">
            <Link to="/choose-login-page" className="previous">&#8249;</Link>
                
                    <h1>Create account</h1>
                    <Stylep>
                    <p>ผู้ใช้งาน</p>
                    </Stylep>

                    <div className='group-underline'>
                        <div className="underline"></div>
                        <div className="underline2"></div>
                    </div>
                    <InputRegField placeholder="Enter your email" type="text" onChange={(event) => {setEmail(event.target.value);}}/>
                    <InputRegField placeholder="Create password" type="password" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.8686 10.6558C6.43086 10.6558 5.26383 9.48879 5.26383 8.05105C5.26383 6.61332 6.43086 5.44629 7.8686 5.44629C9.30633 5.44629 10.4734 6.61332 10.4734 8.05105C10.4734 9.48879 9.30633 10.6558 7.8686 10.6558ZM7.8686 6.34863C6.93016 6.34863 6.16618 7.11262 6.16618 8.05105C6.16618 8.98949 6.93016 9.75348 7.8686 9.75348C8.80704 9.75348 9.57102 8.98949 9.57102 8.05105C9.57102 7.11262 8.80704 6.34863 7.8686 6.34863Z" fill="#828C97"/>
                                <path d="M7.86857 13.4772C5.60669 13.4772 3.47115 12.1538 2.00334 9.85578C1.36568 8.8632 1.36568 7.245 2.00334 6.24641C3.47716 3.94844 5.61271 2.625 7.86857 2.625C10.1244 2.625 12.26 3.94844 13.7278 6.24641C14.3654 7.23898 14.3654 8.85719 13.7278 9.85578C12.26 12.1538 10.1244 13.4772 7.86857 13.4772ZM7.86857 3.52734C5.92552 3.52734 4.06669 4.69438 2.76732 6.73367C2.31615 7.4375 2.31615 8.66469 2.76732 9.36852C4.06669 11.4078 5.92552 12.5748 7.86857 12.5748C9.81162 12.5748 11.6704 11.4078 12.9698 9.36852C13.421 8.66469 13.421 7.4375 12.9698 6.73367C11.6704 4.69438 9.81162 3.52734 7.86857 3.52734Z" fill="#828C97"/>
                            </svg>} onChange={(event) => {setPassword(event.target.value);}} />

                            <InputRegField placeholder="Confirm password" type="password" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.8686 10.6558C6.43086 10.6558 5.26383 9.48879 5.26383 8.05105C5.26383 6.61332 6.43086 5.44629 7.8686 5.44629C9.30633 5.44629 10.4734 6.61332 10.4734 8.05105C10.4734 9.48879 9.30633 10.6558 7.8686 10.6558ZM7.8686 6.34863C6.93016 6.34863 6.16618 7.11262 6.16618 8.05105C6.16618 8.98949 6.93016 9.75348 7.8686 9.75348C8.80704 9.75348 9.57102 8.98949 9.57102 8.05105C9.57102 7.11262 8.80704 6.34863 7.8686 6.34863Z" fill="#828C97"/>
                                <path d="M7.86857 13.4772C5.60669 13.4772 3.47115 12.1538 2.00334 9.85578C1.36568 8.8632 1.36568 7.245 2.00334 6.24641C3.47716 3.94844 5.61271 2.625 7.86857 2.625C10.1244 2.625 12.26 3.94844 13.7278 6.24641C14.3654 7.23898 14.3654 8.85719 13.7278 9.85578C12.26 12.1538 10.1244 13.4772 7.86857 13.4772ZM7.86857 3.52734C5.92552 3.52734 4.06669 4.69438 2.76732 6.73367C2.31615 7.4375 2.31615 8.66469 2.76732 9.36852C4.06669 11.4078 5.92552 12.5748 7.86857 12.5748C9.81162 12.5748 11.6704 11.4078 12.9698 9.36852C13.421 8.66469 13.421 7.4375 12.9698 6.73367C11.6704 4.69438 9.81162 3.52734 7.86857 3.52734Z" fill="#828C97"/>
                            </svg>}  onChange={(event) => {setComfirmPassword(event.target.value);}}/>

                    <InputRegField placeholder="Username" type="text" onChange={(event) => {setUsername(event.target.value);}}/>

                    <StyledBotton>
                    <Button text="Continue" onClick={submit} />
                    </StyledBotton>
                    <div className='additional-text'>
                        <div className="text1">already have accoaccount ?</div> 
                        <Link to="/login" className="text2">Sign in</Link>
                    </div>
            </div>
                <div className="right-image">
                    <div className="right-img"></div>
                </div>
        </div>
        
    );
};

export default  RegisterUser

    

    ; 