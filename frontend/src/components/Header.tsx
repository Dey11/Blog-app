import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between pt-5 pb-20 ">
      <div>Logo</div>
      <div className="flex flex-row gap-5">
        <div>Features</div>
        <div>Pricing</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default Header;
