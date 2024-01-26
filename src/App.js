import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";
import WorksPage from "./components/WorksPage"; // Import the Works component

import "./styles.css";

const headerStyle = {
  position: 'sticky',
  top: 0,
  marginLeft: 20,
  marginRight: 20,
  zIndex: 20,
  backdropFilter: 'blur(10px)'
};

export default function App() {
  return (
    <Router>
      <div>
        <div style={headerStyle}>
          <Header />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '90%', margin: '0 auto', overflow: 'hidden' }}>
            <Routes>
              <Route exact path="/works" element={<WorksPage />} />
              <Route exact path="/portfolio" element={<Container />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
