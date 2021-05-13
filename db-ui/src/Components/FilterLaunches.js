import { useState } from "react";

const FilterLaunches = ({ onFilter }) => {
  const [date, setDate] = useState("");
  const [after, setAfter] = useState(false);
  const [before, setBefore] = useState(false);
  const [site, setSite] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!date) {
      if (!site) {
        alert("Please add a date");
        return;
      }
    }

    onFilter({ date, site, after, before });

    setDate("");
    setSite("");
    setAfter(false);
    setBefore(false);
  };

  return (
    <form className="filter-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>By Date</label>
        <input
          type="text"
          placeholder=" "
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>

      <div className="form-control">
        <label>By Site</label>
        <input
          type="text"
          placeholder=" "
          value={site}
          onChange={(e) => setSite(e.target.value)}
        ></input>
      </div>

      <div className="form-control form-control-check">
        <label>All Launches After Given Date</label>
        <input
          type="checkbox"
          checked={after}
          value={after}
          onChange={(e) => setAfter(e.currentTarget.checked)}
        ></input>
      </div>

      <div className="form-control form-control-check">
        <label>All Launches Before Given Date</label>
        <input
          type="checkbox"
          checked={before}
          value={before}
          onChange={(e) => setBefore(e.currentTarget.checked)}
        ></input>
      </div>

      <input type="submit" value="Filter Launches" className="btn btn-block" />
    </form>
  );
};

export default FilterLaunches;
