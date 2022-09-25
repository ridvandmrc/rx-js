import { FC } from "react";

export interface INotificationProps {
  message: string;
  type: "success" | "error";
}

export const Notification: FC<INotificationProps> = ({ message, type }) => {
  return (
    <div
      style={{
        position: "fixed",
        right: 10,
        top: 10,
        padding: 10,
        backgroundColor: type === "success" ? "lightblue" : "red",
        color: type === "success" ? "black" : "white",
        borderRadius: 8,
      }}
    >
      {message}
    </div>
  );
};
