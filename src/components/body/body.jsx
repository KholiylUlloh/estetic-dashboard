import React from "react";
import "./body.css";
import { ReactComponent as User } from "../../assets/icons/userBlack.svg";
import { ReactComponent as Key } from "../../assets/icons/key.svg";
import { ReactComponent as Devices } from "../../assets/icons/devices.svg";
import { ReactComponent as Building } from "../../assets/icons/building.svg";
import { ReactComponent as UserId } from "../../assets/icons/user-id.svg";
import { ReactComponent as Services } from "../../assets/icons/spa.svg";
import { ReactComponent as Box } from "../../assets/icons/box.svg";
import { ReactComponent as Events } from "../../assets/icons/calendar-event.svg";
import { ReactComponent as SecCamera } from "../../assets/icons/security-camera.svg";
import { ReactComponent as Documents } from "../../assets/icons/documents.svg";
import { Link, Outlet, useLocation } from "react-router-dom";

const Body = ({ active }) => {
  const { pathname } = useLocation();
  return (
    <div className="body_wrap">
      {active ? (
        <div className="drawer_wrap">
          <div className="title">KULLANICI</div>
          <div className="options">
            <Link
              to={"/userpreferences"}
              className={
                pathname.includes("serpreferences") ? "option active" : "option"
              }
            >
              <User />
              Kullanıcı tercihleri
            </Link>
            <Link
              to={"/passwordlogininfo"}
              className={
                pathname.includes("passwordlogininfo")
                  ? "option active"
                  : "option"
              }
            >
              <Key />
              Şifre ve giriş bilgileri
            </Link>
            <Link
              to={"/devices"}
              className={
                pathname.includes("devices") ? "option active" : "option"
              }
            >
              <Devices />
              Cihazlar
            </Link>
          </div>
          <div className="title">ŞİRKET</div>
          <div className="options">
            <Link
              to={"/buildings"}
              className={
                pathname.includes("buildings") ? "option active" : "option"
              }
            >
              <Building />
              Şirket ayarları
            </Link>
            <Link
              to={"/staff"}
              className={
                pathname.includes("staff") ? "option active" : "option"
              }
            >
              <UserId />
              Personeller
            </Link>
            <Link
              to={"/services"}
              className={
                pathname.includes("services") ? "option active" : "option"
              }
            >
              <Services />
              Hizmetler
            </Link>
            <Link
              to={"/products"}
              className={
                pathname.includes("products") ? "option active" : "option"
              }
            >
              <Box />
              Ürünler
            </Link>
            <Link
              to={"/servicerooms"}
              className={
                pathname.includes("servicerooms") ? "option active" : "option"
              }
            >
              <Events />
              Hizmet odaları
            </Link>
          </div>
          <div className="title">GÜVENLİK</div>
          <div className="options">
            <Link
              to={"/security"}
              className={
                pathname.includes("security") ? "option active" : "option"
              }
            >
              <SecCamera />
              Güvenlik ayarları
            </Link>
            <Link
              to={"/logrecords"}
              className={
                pathname.includes("logrecords") ? "option active" : "option"
              }
            >
              <Documents />
              Log kayıtları
            </Link>
          </div>
        </div>
      ) : null}
      <div className={!active ? "outlet expand" : "outlet"}>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
