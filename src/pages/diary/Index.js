import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const Index = () => {
  return (
    <>
      <Header>My Diary</Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "#2272eb" }}>
          다이어리 첫화면
        </h2>
      </Main>
      <Footer>
        <h3 style={{ textAlign: "center" }}>diary.Copyright</h3>
      </Footer>
    </>
  );
};

export default Index;
