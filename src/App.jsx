import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Header from "./components/Header";

import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const location = useLocation();

  return (
    <div className="bg-gray-200 w-full min-h-screen">
      <div className="max-w-4xl mx-auto py-10 px-5 selection:bg-red-600 selection:text-white">
        <Header />
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Routes location={location}>
              <Route path="/" exact element={<Home title="Home" />} />
              <Route path="/about" element={<About title="About" />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default App;
