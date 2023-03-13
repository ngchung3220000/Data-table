import "../.././App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  showNumberEntries,
  informationsSelector,
  infoRemainingSelector,
  reverseNameAction,
} from "../../redux/seletor";
import { useEffect, useState } from "react";
import { informations } from "../../redux/Slice/tableSlice";
import { end, start } from "../../redux/Slice/footerSlice";

export default function Footer() {
  const dispatch = useDispatch();
  const number = useSelector(showNumberEntries);
  const data = useSelector(infoRemainingSelector);
  const numberPage = useSelector(reverseNameAction);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastNews = currentPage * Number(number);
  const indexOfFirstNews = indexOfLastNews - Number(number);
  const dataSlice = data.slice(indexOfFirstNews, indexOfLastNews);

  useEffect(() => {
    dispatch(start(indexOfFirstNews));
    dispatch(end(indexOfLastNews));
  }, [number, currentPage]);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / number); i++) {
    pageNumbers.push(i);
  }

  const handleChoosePage = (num) => {
    setCurrentPage(num);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [number, data.length, numberPage.toggle]);

  const handlePrevious = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage !== Math.ceil(data.length / number))
      setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div className="dataTables_info">
        {data.length <= 0
          ? `Showing 0 to 0 of 0 entries (filtered from 25 total entries)`
          : `Showing ${indexOfFirstNews + 1} to ${
              dataSlice.length !== Number(number)
                ? data.length
                : indexOfLastNews
            } of ${data.length} entries ${
              data.length < 25 ? "(filtered from 25 total entries)" : ""
            }`}
      </div>

      <div className="dataTables_paginate paging_simple_numbers">
        <a
          href="#aa"
          className="paginate-button previous disabled"
          onClick={handlePrevious}
        >
          Previous
        </a>
        <span>
          {data.length
            ? pageNumbers.map((number) => {
                return (
                  <a
                    className={`paginate_button ${
                      currentPage === number && "current"
                    }`}
                    key={number}
                    onClick={() => handleChoosePage(number)}
                  >
                    {number}
                  </a>
                );
              })
            : []}
        </span>
        <a href="#aa" className="paginate_button next" onClick={handleNextPage}>
          Next
        </a>
      </div>
    </div>
  );
}
