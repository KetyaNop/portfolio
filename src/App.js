import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import Blog Posts
import HapticXcelBlog from "./blogposts/HapticXcelBlog/HapticXcelBlog";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
