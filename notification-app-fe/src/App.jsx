import { useState } from "react";

export default function App() {
  const [notifications] = useState([]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Priority Inbox</h1>

      <p>Total Notifications: {notifications.length}</p>

      <h3>Top 10 Notifications</h3>

      {notifications.length === 0 ? (
        <p>No notifications found.</p>
      ) : (
        <ul>
          {notifications.map((item, index) => (
            <li key={index}>{item.message}</li>
          ))}
        </ul>
      )}
    </div>
  );
}