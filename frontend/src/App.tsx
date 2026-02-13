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

    try {

      const response = await fetch("http://127.0.0.1:8000/generate/", {
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
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data.generated_spec);
      } else {
        setError("Generation failed");
      }

    } catch {
      setError("Backend connection error");
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


      {/* MAIN CONTENT */}
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
        >
          {loading ? "Generating..." : "Generate Tasks"}
        </button>


        {error && (
          <p style={{ color: "red" }}>{error}</p>
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
