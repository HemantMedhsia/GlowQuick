import React from "react";
import Landingpage from "./Pages/Landingpage";
import CursorFollower from "./Components/CursorFollower/CursorFollower";
import Button1 from "./Common/Button1/Button1";
import Button2 from "./Common/Button2/Button2";
import Button3 from "./Common/Button3/Button3";

const App = () => {
  return (
    <div className="bg-[#cfe5ed] relative text-green-300 text-3xl font-semibold">
      <Landingpage />
      <CursorFollower />
      {/* <Button3/> */}
    </div>
  );
};

export default App;
