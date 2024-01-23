import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";


import "./styles.css"

export default function App() {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '90%', margin: '0 auto', overflow: 'hidden' }}>
          <Header />
          <Container />
        </div>
      </div>
    </div>
  );
}