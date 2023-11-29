import styled from "@emotion/styled";
import Header from "./components/Header";
import "./styles/App.css";
import Footer from "./components/Footer";

const Contents = styled.main`
  width: 100%;
  min-height: 500px;
  background: #fff;
`;

function App() {
  return (
    <div className="layout">
      <div className="wrap">
        <Header>title</Header>
        <Contents>중심 컨텐츠</Contents>
        <Footer>Copyright</Footer>
      </div>
    </div>
  );
}

export default App;
