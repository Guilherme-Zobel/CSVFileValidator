import React, { useState } from "react";
import CSVFileValidator from "csv-file-validator";
import { CSVLink } from "react-csv";

import "./ValidateCSV.scss";

let requiredError = (headerName, rowNumber, columnNumber) => {
  return `<div class="red">${headerName} is required in the <strong>${rowNumber} row</strong> / <strong>${columnNumber} column</strong></div>`;
};
let CSVConfig = {
  headers: [
    {
      name: "Id_categoria",
      inputName: "Id_categoria",
      required: true,
      requiredError
    }
  ]
};
let headerCsvDownloadConfig = [
  { label: "First Name", key: "firstName" },
  { label: "Last Name", key: "lastName" },
  { label: "Email", key: "email" },
  { label: "Password", key: "password" },
  { label: "Roles", key: "roles" }
];

export default function ValidateCSV() {
  let [csvData, setCsvData] = useState("");

  let handleChange = (e) => {
    CSVFileValidator(e.target.files[0], CSVConfig).then((csvData) => {
      csvData.inValidMessages.forEach((message) => {
        document
          .getElementById("invalidMessages")
          .insertAdjacentHTML("beforeend", message);
      });

      setCsvData(csvData.data);
    });
    console.log(csvData);
  };

  console.log({ csvData });

  return (
    <div className="validate-csv">
      <div className="input-box">
        <input type="file" accept=".csv" id="file" onChange={handleChange} />
        <div id="invalidMessages" />
      </div>
      <CSVLink
        className="download"
        headers={headerCsvDownloadConfig}
        data={csvData}
        filename="demo.csv"
        target="_blank"
      >
        Download
      </CSVLink>
    </div>
  );
}
