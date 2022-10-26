import "./App.css";
import React, { useState } from "react";
import Moment from "react-moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [date, setDate] = useState(new Date());

  const [cycle, setCycle] = useState("28");

  const cycleLength = +cycle;
  //console.log(cycleLength);

  const days = (date1, date2) => {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="App">
      <div className="periodTracker">
        <div className=" container-sm bg-secondary bg-gradient d-flex  flex-column  align-items-center gap-3 my-5 border border-dark border-2">
          <h4 className="text-dark my-3">Calculate Next Period Date 📲</h4>

          <Calendar className="Calender mt-2" onChange={setDate} value={date} />
          <label className="text-dark">
            Select your Cycle Length :
            <select onChange={(e) => setCycle(e.target.value)}>
              <option value="28">28</option>
              <option value="30">30</option>
              <option value="32">31-33</option>
              <option value="35">34-36</option>
              <option value="39">37-40</option>
              <option value="43">41-45</option>
            </select>
          </label>
          <div className="text-warning d-flex gap-3">
            <h5> 🗓 Next Period : </h5>

            <Moment format="Do MMMM YYYY" add={{ days: cycleLength - 1 }}>
              {date}
            </Moment>
          </div>
          <h5>
            🧘‍♀️ You passed{" "}
            <span className="text-info"> {days(date, new Date())}Days </span>
            from your last period
          </h5>
          <h5>
            🔜Now You have{" "}
            <span className="text-info">
              {cycleLength - days(date, new Date())} Days{" "}
            </span>
            left for your next period.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default App;
