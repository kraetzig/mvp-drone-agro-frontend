# 🌱 MVP Drone Agro – NDVI com AWS (Serverless)

Este projeto é um **MVP (Minimum Viable Product)** que simula o uso de **drones no agronegócio** para análise da saúde da vegetação utilizando o índice **NDVI (Normalized Difference Vegetation Index)**, com uma **arquitetura totalmente serverless na AWS**.

O objetivo é demonstrar como dados geoespaciais podem ser processados, armazenados e visualizados de forma escalável, segura e com baixo custo.

---

## 🎯 Visão de Negócio

No agronegócio, decisões rápidas e baseadas em dados reduzem perdas e aumentam a produtividade.

Com este MVP é possível:
- Identificar áreas com **estresse vegetal**
- Priorizar ações no campo
- Validar uma solução antes de investir em hardware (drones reais)

Este projeto valida o conceito técnico e de negócio antes da escalabilidade.

---

## 🛰️ Conceito do MVP

- Simulação de imagens capturadas por drones usando **Google Earth**
- Processamento de NDVI
- Classificação automática da vegetação:
  - 🌿 Vegetação saudável
  - ⚠️ Vegetação moderada
  - 🚨 Vegetação crítica
- Armazenamento dos resultados na nuvem
- Exposição dos dados via API
- Visualização em um dashboard web

---

## 🏗️ Arquitetura AWS

### 🔹 Amazon S3
- Armazenamento dos arquivos processados
- Organização em camadas (raw / processed)
- Alta durabilidade e baixo custo

### 🔹 AWS Lambda
- Funções serverless para:
  - Processamento NDVI
  - Consulta do último resultado
  - Histórico de processamentos
- Execução sob demanda

### 🔹 Amazon API Gateway
- Exposição de endpoints REST:
  - `/latest` → Último NDVI processado
  - `/history` → Histórico de análises
- Integração direta com Lambda

### 🔹 AWS Amplify
- Hospedagem do frontend React
- Deploy contínuo via GitHub
- HTTPS automático
- Variáveis de ambiente para API

---

## 🖥️ Frontend

- Desenvolvido em **React**
- Dashboard com:
  - Último processamento NDVI
  - Histórico de análises
- Interface simples, clara e focada em dados

---

## 📊 Funcionalidades

✔ Processamento automático de NDVI  
✔ Classificação da vegetação  
✔ Histórico de análises  
✔ Dashboard público  
✔ Arquitetura serverless e escalável  

---

## 🔮 Próximas Evoluções

- Gráficos de evolução do NDVI
- Alertas automáticos
- Integração com Machine Learning
- Conexão com drones reais
- Autenticação de usuários

---

## 🧠 Aprendizados

- Uso prático de arquitetura serverless
- Integração entre serviços AWS
- Construção de MVP com foco em valor
- Cloud aplicada ao agronegócio

---

## 🧪 Tecnologias Utilizadas

- AWS Lambda
- Amazon S3
- Amazon API Gateway
- AWS Amplify
- React
- JavaScript
- Python
- Google Earth (simulação de imagens)

---

## 📌 Status do Projeto

🚀 **MVP funcional e publicado**

---

## 📄 Licença

Este projeto é apenas para fins educacionais e demonstração técnica.
