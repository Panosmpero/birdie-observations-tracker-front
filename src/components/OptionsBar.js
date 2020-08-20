import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { observationsRequest } from "../store/actions/observationsActions";

const OptionsBar = () => {
  const [client, setClient] = useState("df50cac5-293c-490d-a06c-ee26796f850d");
  const [eventType, setEventType] = useState("");
  const [fromDate, setFromDate] = useState("2019-05-10");
  const [toDate, setToDate] = useState("2019-05-12");

  const dispatch = useDispatch();
  const { payload } = useSelector((state) => state.observations);

  useEffect(() => {
    dispatch(observationsRequest({}));
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      observationsRequest({
        client,
        eventType,
        fromDate,
        toDate,
      })
    );
  };

  const handleReset = () => {
    dispatch(observationsRequest({}));
  };

  return (
    <form className="options-bar" onSubmit={handleSubmit}>
      {/* 
      Client Selector is for test purposes only is not meant for the consumers 
      */}
      <div>
        <select
          name="client"
          id="client"
          onChange={(e) => setClient(e.target.value)}
        >
          <option value="df50cac5-293c-490d-a06c-ee26796f850d">
            Care Recipient A
          </option>
          <option value="e3e2bff8-d318-4760-beea-841a75f00227">
            Care Recipient B
          </option>
          <option value="ad3512a6-91b1-4d7d-a005-6f8764dd0111">
            Care Recipient C
          </option>
        </select>
      </div>

      <div>
        <select
          name="eventType"
          id="eventType"
          onChange={(e) => setEventType(e.target.value)}
          defaultValue={""}
          required
        >
          <option value="" disabled hidden>
            Event Type
          </option>
          <option value="all">All</option>
          {payload &&
            [...new Set(payload.map((x) => x.event_type))].map(
              (event_type, id) => (
                <option key={id} value={event_type}>
                  {event_type}
                </option>
              )
            )}
        </select>
      </div>

      <div>
        <label htmlFor="fromDate">From</label>
        <input
          type="date"
          name="fromDate"
          id="fromDate"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="toDate">To</label>
        <input
          type="date"
          name="toDate"
          id="toDate"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </div>

      <div>
        <input type="submit" value="Submit" />
      </div>
      <div>Results: {payload && payload.length}</div>
      <div onClick={handleReset} className="reset-btn">
        reset
      </div>
    </form>
  );
};

export default OptionsBar;
