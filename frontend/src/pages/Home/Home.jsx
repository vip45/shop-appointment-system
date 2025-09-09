import React from "react";
import Connect from "../../components/common/Connect/Connect";
import HomeBanner from "../../components/home/HomeBanner/HomeBanner";
import Steps from "../../components/home/Steps/Steps";
import Featured from "../../components/home/Featured/Featured";

const Home = () => {
  return (
    <div className="common-main-container">
      <HomeBanner />
      <Featured />
      <Connect />
      <Steps />
    </div>
  );
};

export default Home;
