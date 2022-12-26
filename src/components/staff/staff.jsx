import React from "react";
import "./staff.css";
import user from "../../assets/images/01_2022-12-26/01.jpg";
import { ReactComponent as More } from "../../assets/icons/more.svg";

const Staff = () => {
  return (
    <div className="staff_wrap">
      <div className="staff_header">
        <div className="staff_header-links">
          <a href="#" className={"link"}>
            Personeller
          </a>
          <a href="#" className={"link"}>
            Roller
          </a>
        </div>
      </div>
      <div className="staff_body">
        <div className="staff_body-header">
          <div className="staff_category">
            <a href="#" className="active_users">
              Aktif personeller (4)
            </a>
            <a href="#" className="passive_users">
              Pasif personeller (0)
            </a>
          </div>
          <button className="users_btn">Personel ekle</button>
        </div>
        <div className="users_table">
          <div className="row">
            <div className="user_info">
              <img src={user} alt="user" />
              Hakan Doğruer
            </div>
            <div className="position">Admin</div>
            <div className="history">
              <span>Kayıt tarihi</span> 16.09.2020
            </div>
            <div className="more">
              <More />
            </div>
          </div>
          <div className="row">
            <div className="user_info">
              <img src={user} alt="user" />
              Hakan Doğruer
            </div>
            <div className="position">Admin</div>
            <div className="history">
              <span>Kayıt tarihi</span> 16.09.2020
            </div>
            <div className="more">
              <More />
            </div>
          </div>
          <div className="row">
            <div className="user_info">
              <img src={user} alt="user" />
              Hakan Doğruer
            </div>
            <div className="position">Admin</div>
            <div className="history">
              <span>Kayıt tarihi</span> 16.09.2020
            </div>
            <div className="more">
              <More />
            </div>
          </div>
          <div className="row">
            <div className="user_info">
              <img src={user} alt="user" />
              Hakan Doğruer
            </div>
            <div className="position">Admin</div>
            <div className="history">
              <span>Kayıt tarihi</span> 16.09.2020
            </div>
            <div className="more">
              <More />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
