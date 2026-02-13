import { useState } from "react";

function RecentSpecs() {

  const [specs, setSpecs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const fetchSpecs = async () => {

    setLoading(true);
    setError("");

    try {

      const response = await fetch("https://taskgenerator-punf.onrender.com/specs/recent");

      if (!response.ok) {
        throw new Error("Backend error");
      }

      const data = await response.json();

      // Ensure it's an array
      if (Array.isArray(data)) {
        setSpecs(data);
      } else {
        setSpecs([]);
        setError("Invalid data from backend");
      }

    } catch (err) {

      setError("Failed to fetch specs");
      setSpecs([]);

    }

    setLoading(false);
  };


  return (

    <div style={{ marginTop: "30px" }}>

      <h2>Recent Specs</h2>

      <button onClick={fetchSpecs}>
        Load Recent Specs
      </button>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {specs.length === 0 && !loading && !error && (
        <p>No specs found</p>
      )}

      {specs.map((spec, index) => (

        <div key={index} style={{
          border: "1px solid gray",
          padding: "10px",
          marginTop: "10px"
        }}>

          <h4>Goal:</h4>
          <p>{spec.goal}</p>

          <h4>Generated Tasks:</h4>
          <pre>{spec.generated_spec}</pre>

        </div>

      ))}

    </div>

  );

}

export default RecentSpecs;
