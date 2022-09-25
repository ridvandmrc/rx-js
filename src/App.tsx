import React from "react";
import { Outlet } from "react-router";
import { Notification } from "./components/Notification";
import { notification } from "./utils";
import { useAlert } from "./hooks";

function App() {
  const notif = useAlert();
  return (
    <div>
      <Outlet />
      <input />
      <button onClick={() => notification.sendSuccess("loo")}>
        Send Success
      </button>
      <button onClick={() => notification.sendError("loo")}>Send Error</button>
      {notif && <Notification type={notif.type} message={notif.message} />}
    </div>
  );
}

export default App;
