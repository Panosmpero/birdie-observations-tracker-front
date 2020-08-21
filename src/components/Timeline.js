import React from "react";
import { useSelector } from "react-redux";
import TimelineGraph from "react-time-line";
import * as util from "../util";
import Loading from "./Loading";

const Timeline = () => {
  const { payload, error } = useSelector((state) => state.observations);

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
        <Loading />
      ) : (
        <TimelineGraph items={data} format="hh:mm a" />
      )}
    </div>
  );
};

export default Timeline;
