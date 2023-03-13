import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isShowings,
  isEditPosition,
  isEditOffice,
} from "../../redux/Slice/tableSlice";
import "../.././App.css";

function Row({ data }) {
  const dispatch = useDispatch();

  const [position, setPosition] = useState(data.position);
  const [editPosition, setEditPosition] = useState(false);
  const [office, setOffice] = useState(data.office);
  const [editOffice, setEditOffice] = useState(false);
  const handleDisplaySalary = () => {
    dispatch(isShowings(data.id));
  };

  // handle edit position
  const handleEditPosition = () => {
    setEditPosition(true);
    // dispatch(isEditData(data.id));
  };

  const handleChangeInputPosition = (e) => {
    setPosition(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmitNewPosition = (e) => {
    if (e.key === "Enter") {
      dispatch(isEditPosition({ id: data.id, data: position }));
      setEditPosition(false);
    }
  };

  const handleOnBlurPosition = () => {
    dispatch(isEditPosition({ id: data.id, data: position }));
    setEditPosition(false);
  };

  // handle edit office
  const handleEditOffice = () => {
    setEditOffice(true);
  };

  const handleChangeInputOffice = (e) => {
    setOffice(e.target.value);
  };

  const handleSubmitNewOffice = (e) => {
    if (e.key === "Enter") {
      dispatch(isEditOffice({ id: data.id, data: office }));
      setEditOffice(false);
    }
  };

  return (
    <>
      <tr key={data.id}>
        <td className="dtr-control sorting_1" onClick={handleDisplaySalary}>
          {data.name}
        </td>
        {editPosition ? (
          <td>
            <input
              value={position}
              onChange={handleChangeInputPosition}
              onKeyDown={handleSubmitNewPosition}
              onBlur={handleOnBlurPosition}
            />
          </td>
        ) : (
          <td onDoubleClick={handleEditPosition}>{position}</td>
        )}

        {editOffice ? (
          <td>
            <input
              value={office}
              onChange={handleChangeInputOffice}
              onKeyDown={handleSubmitNewOffice}
            />
          </td>
        ) : (
          <td onDoubleClick={handleEditOffice}>{office}</td>
        )}

        <td className="dt-body-right">{data.age}</td>

        <td className="dt-body-right" onClick={handleCalendar}>
          {data.date}
        </td>
      </tr>
      {data.isShowing && (
        <tr>
          <td>
            <ul>
              <li>a</li>
            </ul>
          </td>
        </tr>
      )}
    </>
  );
}

export default Row;
