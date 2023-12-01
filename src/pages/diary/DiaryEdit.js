import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";

const DiaryEdit = () => {
  const param = useParams();
  console.log(param);
  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };

  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="bt_back.svg">
        Edit
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "#0e4599" }}>
          다이어리 Edit화면 {param.pk} 글 수정
        </h2>
      </Main>
      <Footer>
        <h3 style={{ textAlign: "center" }}>diary.Copyright</h3>
      </Footer>
    </>
  );
};

export default DiaryEdit;
