import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Index = () => {
  return (
    <>
      <Header>index</Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "#5090ef" }}>
          웹서비스 첫화면
        </h2>
      </Main>
      <Footer>
        <h3 style={{ textAlign: "center" }}>Copyright</h3>
      </Footer>
    </>
  );
};

export default Index;
