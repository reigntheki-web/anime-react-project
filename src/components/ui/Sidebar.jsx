import React from "react";

const Sidebar = ({
  icon,
  icon2,
  icon3,
  title,
  subTitle,
  subTitle2,
  subTitle3,
}) => {
  return (
    <>
      <h3 className="sidebar-title">{title}</h3>
      <a href="#first" className="sidebar-item active" onClick={() => alert("still working on this")}>
        {icon} {subTitle}
      </a>
      <a href="#second" className="sidebar-item" onClick={() => alert("still working on this")}>
        {icon2} {subTitle2}
      </a>
      <a href="#third" className="sidebar-item" onClick={() => alert("still working on this")}>
        {icon3} {subTitle3}
      </a>
    </>
  );
};

export default Sidebar;
