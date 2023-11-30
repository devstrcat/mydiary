import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const DiaryAdd = () => {
  return (
    <>
      <Header>Add</Header>
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
