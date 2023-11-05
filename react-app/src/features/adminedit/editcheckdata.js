import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import defaultImage from "../../image Hackathon/image/choose1.jpeg";
import { Link, useNavigate, useParams } from "react-router-dom";

const Background = styled.div`
  background-color: #000;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Styleprevious = styled.div`
  .previous {
    text-decoration: none;
    display: inline-block;
    padding: 8px 16px;
    background-color: #f1f1f1;
    color: black;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .previous:hover {
    background-color: #ddd;
    color: black;
  }
`;

const ScrollableContainer = styled.div`
  max-height: 700px; /* Set the maximum height for scrolling */
  overflow-y: auto; /* Enable vertical scrolling when content overflows */
`;

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
  overflow: hidden;
  height: 50%; /* Set the height to 100% to expand within ScrollableContainer */
`;

const StyledH1 = styled.h1`
  color: #fff;
  text-align: center;
`;

const InputSection = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  flex-direction: column;
`;

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const InputLabel = styled.label`
  width: 100%;
  font-weight: bold;
  margin-bottom: 5px;
  font-family: "Anuphan";
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px 40px;
  margin: 7px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-family: "Anuphan";
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ImageSection = styled.div`
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: contain;
`;

const EditableImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  cursor: pointer;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

const ConfirmButtonDiv = styled.div`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

function EditCheckData({ url, companies, setCompanies, setNotis }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [company, setCompany] = useState([]);
  const [email, setEmail] = useState("");
  const [type, setType ] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [juristicNumber, setJuristicNumber] = useState("");

  
  const { id } = useParams();
  const navigate = useNavigate();
  

  useEffect(() => {
    async function getCompanies() {
      try {
        const findCompany = companies.find((com) => com.id == Number(id));
        if(findCompany){
          setCompany(findCompany)
          setEmail(company.email)
          setUsername(company.username)
          setPassword(company.password)
          setJuristicNumber(company.juristicNumber)
          setType(company.type)
        }

      } catch (error) {
        console.error(error);
      }
    }
    getCompanies();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  function back() {
    navigate(-1);
  }

  return (
    <Background>
      <Styleprevious>
        <div className="previous" onClick={back}>
          &#8249;
        </div>
      </Styleprevious>
      <ScrollableContainer>
        <Container>
          <StyledH1>แก้ไขข้อมูล</StyledH1>
          <InputSection>
            {/* <InputFieldWrapper>
              <InputLabel>ผู้ประกอบการ</InputLabel>
              <InputField type="text" placeholder=/>
            </InputFieldWrapper> */}
            <InputFieldWrapper>
              <InputLabel>อีเมล </InputLabel>
              <InputField
                type="text"
                placeholder={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <InputLabel>ชื่อผู้ใช้</InputLabel>
              <InputField type="text" placeholder={username} />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <InputLabel>รหัสผ่าน</InputLabel>
              <InputField type="text" placeholder={password} />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <InputLabel>ประเภท</InputLabel>
              <InputField type="text" placeholder={type} />
            </InputFieldWrapper>
            <InputFieldWrapper>
              <InputLabel>เลขประจำตัวผู้เสียภาษี</InputLabel>
              <InputField type="text" placeholder={juristicNumber} />
            </InputFieldWrapper>
            <ImageSection>
              <ImageLabel>
                แก้ไขรูปภาพ
                <EditableImageInput
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </ImageLabel>
              <Image src={selectedImage || defaultImage} alt="Your Image" />
              <ConfirmButtonDiv>ยืนยัน</ConfirmButtonDiv>
            </ImageSection>
          </InputSection>
        </Container>
      </ScrollableContainer>
    </Background>
  );
}

export default EditCheckData;
