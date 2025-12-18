import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [latest, setLatest] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");

  const API_BASE = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API_BASE}`)
      .then((res) => res.json())
      .then(setLatest)
      .catch(() => setError("Erro ao buscar último NDVI"));

    fetch(`${API_BASE}/history`)
      .then((res) => res.json())
      .then(setHistory)
      .catch(() => setError("Erro ao buscar histórico"));
  }, [API_BASE]);

  return (
    <div className="container">
      <h1>🌱 Dashboard NDVI - MVP Drone Agro</h1>

      {error && <p className="error">{error}</p>}

      {latest && (
        <div className="card">
          <h2>Último processamento</h2>
          <p><strong>Arquivo:</strong> {latest.arquivo}</p>
          <p><strong>NDVI médio:</strong> {latest.ndvi_medio}</p>
          <p><strong>Status:</strong> {latest.status}</p>
          <p><strong>Processado em:</strong> {latest.processado_em}</p>
        </div>
      )}

      <h2>📜 Histórico de Processamentos</h2>

      <table>
        <thead>
          <tr>
            <th>Arquivo</th>
            <th>NDVI</th>
            <th>Status</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{item.arquivo}</td>
              <td>{item.ndvi_medio}</td>
              <td>{item.status}</td>
              <td>{item.processado_em}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
