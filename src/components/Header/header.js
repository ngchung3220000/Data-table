import "../.././App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchText, showEntries } from "../../redux/Slice/headerSlice";
export default function Header() {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");
  const showNumber = useSelector((state) => state.header.show);

  const handleSearchName = (e) => {
    setSearchName(e.target.value);
    dispatch(searchText(e.target.value));
  };

  const handleShowNumber = (e) => {
    dispatch(showEntries(e.target.value));
  };

  const handleResetSearch = () => {
    dispatch(searchText(""));
    setSearchName("");
  };

  return (
    <div>
      <div className="dataTables_length">
        Show
        <select value={showNumber} onChange={handleShowNumber}>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        entries
      </div>

      <div className="dataTables_filter">
        Search:
        <input value={searchName} onChange={handleSearchName} />
        {searchName.length ? (
          <button className="destroy" onClick={handleResetSearch}>
            x
          </button>
        ) : null}
      </div>
    </div>
  );
}
