import React from "react";

const MenuShimmmer = () => {
  return (
    <div>
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="flex bg-slate-200 h-48 mt-4 justify-between border"></div>
        ))}
    </div>
  );
};
export default MenuShimmmer;
