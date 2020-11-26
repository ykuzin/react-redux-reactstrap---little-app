import React from "react";

import "./styles.scss";
import NavBar from "../NavBar";

function PageHeader({ title }) {
  return (
    <div className="nk-block-between-md g-4 flex-wrap topnav">
      <div className="nk-block-head-content">
        <h2 className="nk-block-title">{title}</h2>
      </div>
      <div className="nk-block-head-content">
        <NavBar />
      </div>
    </div>
  );
}

export default PageHeader;
