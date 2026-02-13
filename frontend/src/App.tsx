import { useState } from "react";
import "./index.css";
import RecentSpecs from "./RecentSpecs";
import StatusIndicator from "./StatusIndicator";

function App() {

  const [goal, setGoal] = useState("");
  const [users, setUsers] = useState("");
  const [constraints, setConstraints] = useState("");
  const [appType, setAppType] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateTasks = async () => {

    if (!goal || !users) {
      setError("Goal and Users are required");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {

      const response = await fetch(
        "https://taskgenerator-punf.onrender.com/generate/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            goal,
            users,
            constraints,
            app_type: appType,
          }),
        }
      );

      if (!response.ok) {
        const text = await response.text();
        console.error("Backend error:", text);
        setError("Backend error: " + text);
        setLoading(false);
        return;
      }

      const data = await response.json();
      setResult(data.generated_spec);

    } catch (err) {
      console.error("Connection error:", err);
      setError("Connection failed. Backend may be waking up.");
    }

    setLoading(false);
  };


  return (

    <div>

      {/* NAVBAR */}
      <div className="navbar">
        <div className="navbar-title">
          Tasks Generator
        </div>
        <StatusIndicator />
      </div>

      {/* MAIN */}
      <div className="container">

        <div className="title">
          AI Tasks Generator
        </div>

        <div className="subtitle">
          Convert feature ideas into structured engineering tasks
        </div>

        <label>Goal *</label>
        <input
          className="input"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />

        <label>Users *</label>
        <input
          className="input"
          value={users}
          onChange={(e) => setUsers(e.target.value)}
        />

        <label>Constraints</label>
        <input
          className="input"
          value={constraints}
          onChange={(e) => setConstraints(e.target.value)}
        />

        <label>App Type</label>
        <select
          className="input"
          value={appType}
          onChange={(e) => setAppType(e.target.value)}
        >
          <option value="">Select type</option>
          <option value="web">Web App</option>
          <option value="mobile">Mobile App</option>
          <option value="internal">Internal Tool</option>
        </select>

        <button
          className="button"
          onClick={generateTasks}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Tasks"}
        </button>

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {error}
          </p>
        )}

        {result && (
          <div>
            <h3>Generated Tasks</h3>
            <div className="result">
              {result}
            </div>
          </div>
        )}

        <RecentSpecs />

      </div>

    </div>

  );
}

export default App;