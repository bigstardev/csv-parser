import styles from "./Table.module.css";

export default function MyTable({ headers, data }) {
  return (
    <div className={styles.container}>
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {headers.map((header, i) => (
                  <td key={header + i}>{item[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
}
