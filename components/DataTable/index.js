import MyTable from "../Table";
import { dataHeaders } from "../../contants";
import styles from "./DataTable.module.css";

export default function DataTable({ csvArray }) {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>Data</div>
      <div className={styles.tableWrapper}>
        <MyTable data={csvArray} headers={dataHeaders} />
      </div>
    </div>
  );
}
