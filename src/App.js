import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [latest, setLatest] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");

  const API_BASE = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Buscar último NDVI
    fetch(`${API_BASE}/latest`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setLatest)
      .catch(() => setError("Erro ao buscar último NDVI"));

    // Buscar histórico NDVI
    fetch(`${API_BASE}/history`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        const sorted = data.sort(
          (a, b) =>
            new Date(b.processado_em || 0) -
            new Date(a.processado_em || 0)
        );
        setHistory(sorted);
      })
      .catch(() => setError("Erro ao buscar histórico"));
  }, [API_BASE]);

  function formatDate(date) {
    if (!date) return "-";
    return new Date(date).toLocaleString("pt-BR");
  }

  function statusColor(status) {
    if (!status) return "#999";

    const s = status.toLowerCase();

    if (s.includes("saudável")) return "#2ecc71";
    if (s.includes("moderada")) return "#f1c40f";
    if (s.includes("crítica")) return "#e74c3c";

    return "#bdc3c7";
  }

  return (
    <div className="container">
      <h1>🌱 Dashboard NDVI - MVP Drone Agro</h1>

      {error && <p className="error">{error}</p>}

      {latest && (
        <div className="card">
          <h2>Último processamento</h2>

          <p>
            <strong>Arquivo:</strong> {latest.arquivo}
          </p>

          <p>
            <strong>NDVI médio:</strong> {latest.ndvi_medio}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            <span
              style={{
                color: statusColor(latest.status),
                fontWeight: "bold",
              }}
            >
              {latest.status}
            </span>
          </p>

          <p>
            <strong>Processado em:</strong>{" "}
            {formatDate(latest.processado_em)}
          </p>
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
              <td
                style={{
                  color: statusColor(item.status),
                  fontWeight: "bold",
                }}
              >
                {item.status}
              </td>
              <td>{formatDate(item.processado_em)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
