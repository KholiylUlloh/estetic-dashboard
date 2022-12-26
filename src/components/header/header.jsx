import React, { useState } from "react";
import "./header.css";
import { useLocation } from "react-router-dom";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Question } from "../../assets/icons/question-mark.svg";
import { ReactComponent as Tools } from "../../assets/icons/settings.svg";

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  return (
    <div className="header_wrap">
      <div className="pathname_wrap">
        Şirket ayarları / <span>{location.pathname.replace("/", "")}</span>
      </div>
      <div className="searchbar_wrap">
        <div className="input_wrap">
          {active ? <Search /> : null}
          <input
            onClick={() => setActive(!active)}
            type="text"
            placeholder="Müşteri Ara"
          />
        </div>
        <div className="plus_wrap">
          <Plus />
        </div>
      </div>
      <div className="tools_wrap">
        <Question />
        <Tools />
        <div className="user_wrap">H</div>
      </div>
    </div>
  );
};

export default Header;
