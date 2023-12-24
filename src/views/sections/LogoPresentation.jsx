import React from "react";

export const LogoPresentation = ({ children, color }) => {
  return (
    <div className={`bg-[${color}] flex justify-center items-center`}>
      {children}
    </div>
  );
};
