import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState(null);

  const generate = async () => {
    const res = await axios.post("http://localhost:5000/api/generate", {
      topic
    });

    setResult(res.data);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>AI Content SaaS 🚀</h1>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter topic"
      />

      <button onClick={generate}>Generate Video</button>

      {result && (
        <div>
          <h3>Script</h3>
          <p>{result.script}</p>

          <h3>Video</h3>
          <video controls width="400" src={result.video}></video>
        </div>
      )}
    </div>
  );
}
