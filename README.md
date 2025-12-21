🌱 MVP Drone Agro – NDVI Dashboard (Serverless AWS)

Este projeto é um MVP (Minimum Viable Product) que simula operações de drones no agronegócio utilizando imagens de satélite do Google Earth como fonte de dados, reproduzindo o fluxo de captura, processamento e análise de NDVI (Normalized Difference Vegetation Index) para avaliação da saúde da vegetação.

A solução foi construída com uma arquitetura 100% serverless na AWS, focada em baixo custo, escalabilidade e validação rápida de conceito, permitindo comprovar valor de negócio antes de investir em hardware físico (drones reais).

🎯 Problema

Produtores rurais precisam de informações rápidas, confiáveis e acionáveis sobre a saúde das lavouras para tomar decisões preventivas e reduzir perdas produtivas.

💡 Solução – MVP Drone Agro

Um data pipeline simples, escalável e orientado a eventos, que:

✔ Simula voos de drones a partir de imagens do Google Earth

✔ Processa índices de NDVI

✔ Classifica a vegetação em:

Vegetação saudável

Vegetação moderada

Vegetação crítica

✔ Armazena os resultados na nuvem

✔ Exibe os dados em um dashboard web público

🛰️ Por que simular drones?

Este MVP utiliza imagens de satélite como substituto inicial do hardware de drones, permitindo:

Validação da arquitetura

Testes de fluxo de dados

Prova de valor do produto

Redução de custos iniciais

Aceleração do time-to-market

Essa abordagem funciona como uma Prova de Conceito (PoC), pronta para evoluir para integração com drones reais no futuro.

🏗️ Arquitetura AWS (Serverless)

A aplicação foi construída utilizando os seguintes serviços:

🪣 Amazon S3
Armazenamento dos arquivos de entrada e resultados (data lake)

⚡ AWS Lambda
Processamento do NDVI e backend da aplicação

🌐 Amazon API Gateway
Exposição dos endpoints REST consumidos pelo frontend

🖥️ AWS Amplify + React
Frontend, CI/CD automático e hospedagem com HTTPS

🌍 Amazon Route 53 + ACM
Gerenciamento de DNS e certificado SSL

📊 Resultado Entregue

✔ Dashboard com último NDVI processado

✔ Histórico completo de análises

✔ Aplicação pública com domínio próprio

✔ Arquitetura escalável e de baixo custo operacional

🔗 Acesse a aplicação:
👉 https://agro.kraetzig-cloud.com.br

🔮 Próximos Passos (Evolução do MVP)

📈 Gráficos de evolução do NDVI ao longo do tempo

🚨 Alertas automáticos baseados em limiares críticos

🛰️ Integração com imagens reais de drones

🔐 Autenticação de usuários e ambientes (dev / prod)

🧠 Análises preditivas com Machine Learning

🧑‍💻 Tecnologias Utilizadas

React

Chart.js

AWS Amplify

AWS Lambda

Amazon API Gateway

Amazon S3

Amazon Route 53

AWS Certificate Manager (ACM)

📌 Conceito-chave

📌 Status do Projeto
🚀 MVP funcional e publicado

📄 Licença
Este projeto é apenas para fins educacionais e demonstração técnica.