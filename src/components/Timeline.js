import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { observationsRequest } from "../store/actions/observationsActions";
import TimelineGraph from "react-time-line";
import * as util from "../util";

const Timeline = () => {
  const { payload, error } = useSelector((state) => state.observations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(observationsRequest());
    // eslint-disable-next-line
  }, []);

  const lineData = () => {
    return payload.map((observation) => {
      return {
        ts: observation.timestamp,
        text: util.formatString(observation.event_type),
      };
    });
  };

  const data = payload ? lineData() : [];
  return (
    <div className="timeline-container container overflow">
      {error ? (
        <div>Error</div>
      ) : !payload ? (
        <div>Loading</div>
      ) : (
        <TimelineGraph items={data} format="hh:mm a" />
      )}
    </div>
  );
};

export default Timeline;
