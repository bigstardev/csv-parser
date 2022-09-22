import { useState, useEffect } from "react";
import { allowedExtensions } from "../../contants";
import styles from "./CsvReader.module.css";

export default function CsvReader({ setCsvArray }) {
  const [error, setError] = useState("");
  const [csvFile, setCsvFile] = useState(null);

  useEffect(() => {
    if (csvFile) submit();
  }, [csvFile]);

  const handleFileChange = (e) => {
    setError("");
    // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }

      // If input type is correct set the state
      setCsvFile(inputFile);
    }
  };
  const processCSV = (str, delim = ",") => {
    const headers = str.slice(0, str.indexOf("\n")).split(delim);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const newArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        //replace unwanted \r characters
        header = header.replace(/\r/g, "");
        obj[header] = values[i].replace(/\r/g, "");
        return obj;
      }, {});
      return eachObject;
    });
    setCsvArray(newArray);
  };

  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      processCSV(text); // plugged in here
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input
        type="file"
        id="csv-upload"
        style={{ display: "none" }}
        accept=".csv"
        onChange={handleFileChange}
      />
      <div className={styles.labelWrapper}>
        <label htmlFor="csv-upload">
          <div className={styles.label}>Open</div>
        </label>
        <div className={styles.error}>{error ? error : ""}</div>
      </div>
    </div>
  );
}
