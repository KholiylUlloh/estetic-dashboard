import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Body from "./components/body/body";
import Generic from "./components/generic/generic";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Staff from "./components/staff/staff";
import "./global.css";

const Root = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="root_wrap">
      <Sidebar setActive={setActive} active={active} />
      <div className="right">
        <Header />
        <div className="body">
          <Body active={active} />
          <Routes>
            <Route path="/userpreferences" element={<Generic />} />
            <Route path="/passwordlogininfo" element={<Generic />} />
            <Route path="/devices" element={<Generic />} />
            <Route path="/buildings" element={<Generic />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/services" element={<Generic />} />
            <Route path="/products" element={<Generic />} />
            <Route path="/servicerooms" element={<Generic />} />
            <Route path="/security" element={<Generic />} />
            <Route path="/logrecords" element={<Generic />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Root;
