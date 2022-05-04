import { ReactNode, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import PostPage from "pages/PostPage";

const App = (): ReactNode => {
  return (
    <div className="App">
      <PostPage />
    </div>
  );
};

export default App;
