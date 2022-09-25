import { useState, useEffect } from "react";
import { INotificationProps } from "../components/Notification";
import { notificationObservable } from "../utils";

export const useAlert = () => {
  const [notif, setNotif] = useState<INotificationProps>();
  useEffect(() => {
    notificationObservable.subscribe((data) =>
      setNotif({ message: data.message, type: data.type })
    );
  }, []);

  return notif;
};
