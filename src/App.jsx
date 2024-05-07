import { Home } from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Quiz } from "./Quiz";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
};
