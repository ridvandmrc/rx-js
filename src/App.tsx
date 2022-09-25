import React, { useEffect } from "react";
import { Outlet } from "react-router";
import { testConcatMap } from "./utils";

function App() {
  useEffect(() => {
    console.log("useEffect");
    testConcatMap().subscribe((data) => console.log(data));
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
