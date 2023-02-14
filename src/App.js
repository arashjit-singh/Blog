import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/About";
import ArticlePage from "./pages/ArticlePage";
import ArticleList from "./pages/ArticlesList";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />
          <Route path="/article" element={<ArticleList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
