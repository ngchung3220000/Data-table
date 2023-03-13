import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  infoRemainingSelector,
  informationsSelector,
  startIndex,
  endIndex,
  searchText,
} from "../../redux/seletor";
import { datas } from "../Information/Data";
import { informations } from "../../redux/Slice/tableSlice";
import { reverseNameAction } from "../../redux/Slice/headerSlice";
import Row from "./Row";
import "../.././App.css";

export default function Table() {
  const dispatch = useDispatch();
  const [sortData, setSortData] = useState({ key: "", toggle: false });
  const [sortByDirection, setSortByDirection] = useState(false);

  const data = useSelector(infoRemainingSelector);
  const start = useSelector(startIndex);
  const end = useSelector(endIndex);
  const search = useSelector(searchText);

  useEffect(() => {
    if (data.length <= 0) {
      dispatch(informations(datas));
    }
  }, [data]);

  const newData = [...data];

  const sortDataTable = (data, rev) => {
    return data.sort((a, b) => {
      if (a[rev.key] > b[rev.key]) {
        return rev.toggle ? -1 : 1;
      }
      if (a[rev.key] < b[rev.key]) {
        return rev.toggle ? 1 : -1;
      }
      return 0;
    });
  };

  const dataTable = sortDataTable(newData, sortData).slice(start, end);

  const handleReverseName = (name) => {
    setSortByDirection(!sortByDirection);
    setSortData({ key: name, toggle: !sortByDirection });
    dispatch(reverseNameAction(sortData));
  };
  return (
    <table
      className="display nowrap dataTable dtr-inline collapsed"
      style={{ width: "100%" }}
    >
      <thead>
        <tr>
          <th
            className="sorting sorting_asc"
            style={{ width: "118px" }}
            onClick={() => handleReverseName("name")}
          >
            Name
          </th>
          <th
            className="sorting"
            style={{ width: "189px" }}
            onClick={() => handleReverseName("position")}
          >
            Position
          </th>
          <th
            className="sorting"
            style={{ width: "87px" }}
            onClick={() => handleReverseName("office")}
          >
            Office
          </th>
          <th
            className="dt-body-right sorting"
            style={{ width: "34px" }}
            onClick={() => handleReverseName("age")}
          >
            Age
          </th>
          <th
            className="dt-body-right sorting"
            style={{ width: "77px" }}
            onClick={() => handleReverseName()}
          >
            Start date
          </th>
        </tr>
      </thead>

      <tbody>
        {dataTable.length ? (
          dataTable.map((data) => {
            return <Row data={data} key={data.id} />;
          })
        ) : (
          <tr>
            <td colSpan={6} className="dataTables_empty">
              No matching records found
            </td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <th rowSpan={2}>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th className="dt-body-right">Age</th>
          <th className="dt-body-right">Start date</th>
        </tr>
      </tfoot>
    </table>
  );
}
