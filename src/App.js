import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Table from "./components/Table/table";

function App() {
  return (
    <div className="App w-2-3">
      <div className="hero-callout">
        <div className="dataTables_wrapper">
          <Header />
          <Table />
          <Footer />
          {/* <div className="dataTables_length">
            Show
            <select onChange={handleChangeValue}>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            entries
          </div>

          <div className="dataTables_filter">
            Search:
            <input />
          </div>

          <table
            className="display nowrap dataTable dtr-inline collapsed"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th className="sorting sorting_asc" style={{ width: "118px" }}>
                  Name
                </th>
                <th className="sorting" style={{ width: "189px" }}>
                  Position
                </th>
                <th className="sorting" style={{ width: "87px" }}>
                  Office
                </th>
                <th className="dt-body-right sorting" style={{ width: "34px" }}>
                  Age
                </th>
                <th className="dt-body-right sorting" style={{ width: "77px" }}>
                  Start date
                </th>
              </tr>
            </thead>

            <tbody>
              {dataTable.map((data) => {
                return (
                  <tr key={data.id}>
                    <td className="dtr-control sorting_1">{data.name}</td>
                    <td>{data.position}</td>
                    <td>{data.office}</td>
                    <td className="dt-body-right">{data.age}</td>
                    <td className="dt-body-right">{data.date}</td>
                  </tr>
                );
              })}
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

          <div className="dataTables_info">Showing 1 to 10 of 57 entries</div>

          <div className="dataTables_paginate paging_simple_numbers">
            <a className="paginate-button previous disabled">Previous</a>
            <span>
              <a className="paginate_button current">1</a>
              <a className="paginate_button ">2</a>
              <a className="paginate_button ">3</a>
              <a className="paginate_button ">4</a>
              <a className="paginate_button ">5</a>
              <a className="paginate_button ">6</a>
            </span>
            <a className="paginate_button next">Next</a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
