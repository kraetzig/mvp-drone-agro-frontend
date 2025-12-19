import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function formatDate(dateString) {
  if (!dateString) return "-";
  return new Date(dateString).toLocaleString("pt-BR");
}

function App() {
  const [latest, setLatest] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");

  const API_BASE = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Último NDVI
    fetch(`${API_BASE}/latest`)
      .then((res) => res.json())
      .then(setLatest)
      .catch(() => setError("Erro ao buscar último NDVI"));

    // Histórico
    fetch(`${API_BASE}/history`)
      .then((res) => res.json())
      .then((data) => {
        // ordena por data (mais antigo → mais recente)
        const ordered = data.sort((a, b) =>
          new Date(a.processado_em || 0) - new Date(b.processado_em || 0)
        );
        setHistory(ordered);
      })
      .catch(() => setError("Erro ao buscar histórico"));
  }, [API_BASE]);

  const chartData = {
    labels: history.map((item) =>
      item.processado_em ? formatDate(item.processado_em) : "Sem data"
    ),
    datasets: [
      {
        label: "NDVI médio",
        data: history.map((item) => item.ndvi_medio),
        borderColor: "#2e7d32",
        backgroundColor: "rgba(46, 125, 50, 0.3)",
        tension: 0.3
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Evolução do NDVI" }
    },
    scales: {
      y: {
        min: 0,
        max: 1
      }
    }
  };

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
          <p><strong>Processado em:</strong> {formatDate(latest.processado_em)}</p>
        </div>
      )}

      <div className="card">
        <h2>📈 Evolução do NDVI</h2>
        <Line data={chartData} options={chartOptions} />
      </div>

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
              <td>{formatDate(item.processado_em)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
