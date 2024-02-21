import routes from "../routes";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState(false);
  const handleToggle = (id) => {
    setExpandedItems((prevExpanded) => ({
      [id]: !prevExpanded[id],
    }));
  };
  const basepath = "/app";
  return (
    <div
      style={{
        display: "flex",
        paddingTop: "10px",
        flexDirection: "column",
        backgroundColor: "greenyellow",
        height: "100vh",
        width: "25vh",
      }}
    >
      {routes.map((item, index) => (
        <div key={index}>
          <div style={{ marginLeft: `${item.depth * 20}px` }}>
            {item?.subMenus ? (
              <NavLink onClick={() => handleToggle(index)}>
                {item.name}
                <button onClick={() => handleToggle(index)}>
                  {expandedItems[index] ? (
                    <svg
                      onClick={() => handleToggle(index)}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={() => handleToggle(index)}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </NavLink>
            ) : (
              <NavLink
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "red" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
                to={`${basepath}${item.path}`}
              >
                <div className="flex gap-2 px-3 py-2">
                  {item?.icon}
                  {item.name}
                </div>
              </NavLink>
            )}

            {item.subMenus &&
              expandedItems[index] &&
              item.subMenus.map((it) => (
                <li style={{ display: "flex", flexDirection: "column" }}>
                  <NavLink
                    style={({ isActive, isPending, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        paddingLeft: "15px",
                        backgroundColor: isActive ? "red" : "",
                        color: isPending ? "red" : "black",
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                    to={`${basepath}${item.path}${it.path}`}
                  >
                    {it.name}
                  </NavLink>
                </li>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
