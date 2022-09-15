import React from "react";

import Header from "../components/Header";
import ValidateCSV from "../components/ValidateCSV";

export default function ValidatePage() {
  return (
    <div className="home-page">
      <Header />
      <h1>CSV Validation</h1>
      <ValidateCSV />
    </div>
  );
}
