import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const DiaryAdd = () => {
  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };
  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="bt_back.svg">
        Add
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "#125bc7" }}>
          다이어리 Add화면
        </h2>
      </Main>
      <Footer>
        <h3 style={{ textAlign: "center" }}>diary.Copyright</h3>
      </Footer>
    </>
  );
};

export default DiaryAdd;
