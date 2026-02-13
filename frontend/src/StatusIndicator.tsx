import { useState } from "react";

function StatusIndicator() {

  const [status, setStatus] = useState("Checking...");
  const [color, setColor] = useState("gray");

  const checkStatus = async () => {

    try {

      const res = await fetch("https://taskgenerator-punf.onrender.com/health/");

      if (res.ok) {
        setStatus("Backend Online");
        setColor("green");
      } else {
        setStatus("Backend Error");
        setColor("red");
      }

    } catch {

      setStatus("Backend Offline");
      setColor("red");

    }
  };

  // check automatically
  useState(() => {
    checkStatus();
  });

  return (

    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>

      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: color
        }}
      ></div>

      <span>{status}</span>

    </div>

  );

}

export default StatusIndicator;
