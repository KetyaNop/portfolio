import "./App.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import {} from "react-router-dom";

// Import Blog Posts
import HapticXcelBlog from "./blogposts/HapticXcelBlog/HapticXcelBlog";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              exact
              path="/blog/haptic-xcel"
              element={<HapticXcelBlog />}
            />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
