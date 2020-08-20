import React from "react";
import Table from "../components/Table";
import Timeline from "../components/Timeline";
import LineGraph from "../components/LineGraph";
import OptionsBar from "../components/OptionsBar";

const Home = () => {
  return (
    <div className="home-screen">
      <OptionsBar />
      <div className="main-wrapper">
        <div className="main-left">
          <Table />
          <LineGraph />
        </div>
        <Timeline />
      </div>
    </div>
  );
};

export default Home;
