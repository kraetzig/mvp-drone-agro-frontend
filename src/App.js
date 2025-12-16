import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);

  // 🔴 IMPORTANTE: sua URL do S3
  const URL_RESULTADO =
    "https://mvp-drone-agro-processed.s3.us-east-1.amazonaws.com/input_teste-frontend_teste.txt_resultado.json";

  useEffect(() => {
    fetch(URL_RESULTADO)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao buscar resultado NDVI");
        }
        return res.json();
      })
      .then((data) => setDados(data))
      .catch((err) => setErro(err.message));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🌱 Dashboard NDVI - MVP Drone Agro</h1>

      {erro && <p style={{ color: "red" }}>Erro: {erro}</p>}

      {!dados && !erro && <p>Carregando dados...</p>}

      {dados && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            maxWidth: "500px",
          }}
        >
          <p>
            <strong>Arquivo:</strong> {dados.arquivo}
          </p>
          <p>
            <strong>NDVI médio:</strong> {dados.ndvi_medio}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span
              style={{
                color:
                  dados.status === "Vegetação saudável" ? "green" : "orange",
              }}
            >
              {dados.status}
            </span>
          </p>
          <p>
            <strong>Processado em:</strong> {dados.processado_em}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
