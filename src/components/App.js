import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

// HEIARCHY:

// - App
// -- Header
// -- Plant Page
// ---- New Plant Form
// ---- Plant List
// ------ Plant Card
// ---- Search

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
