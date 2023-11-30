import Header from "./components/Header";
import "./styles/App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="layout">
      <div className="wrap">
        <Header>title</Header>
        <Main></Main>
        <Footer>Copyright</Footer>
      </div>
    </div>
  );
}

export default App;
