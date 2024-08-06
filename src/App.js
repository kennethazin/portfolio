import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Container from './components/Container';
import WorksPage from './components/WorksPage'; // Import the Works component
import Footer from './components/Footer'; // Import the Footer component
import { Box } from '@chakra-ui/react';
import './styles.css';

const headerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  paddingLeft: 20,
  paddingRight: 20,
  zIndex: 15,
  backdropFilter: 'blur(1vw)',
  overflow: 'none', // Add this line to stop overscrolling
};

export default function App() {
  return (
    <Router>
      <div>
        <div style={headerStyle}>
          <Header />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{ width: '90%', margin: '100px auto', overflow: 'hidden' }}
          >
            <Routes>
              <Route path="/portfolio/works" element={<WorksPage />} />
              <Route exact path="/portfolio" element={<Container />} />
            </Routes>
          </div>
        </div>
        <Box
          className="footer"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'left',
            marginTop: '100px',
          }}
        >
          <Footer />
        </Box>
      </div>
    </Router>
  );
}
