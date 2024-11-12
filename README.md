
# 🚗 Carrinho Controlado por App via Bluetooth e Armazena Dados na Nuvem

Este projeto consiste em um carro controlado por Bluetooth utilizando Arduino, que armazena dados de comandos em uma API com banco de dados na nuvem (MongoDB). A comunicação entre o aplicativo de controle e o Arduino é feita via Bluetooth, enquanto um D1 Wemos ESP8266 captura os comandos enviados e os envia para uma API desenvolvida em Node.js, que armazena os dados em um banco de dados MongoDB para monitoramento e análise.

#### 📎 Link do projeto referência: https://projecthub.arduino.cc/samanfern/bluetooth-controlled-car-c71cd0

## 🛠 Funcionalidades

- Controle do carro via Bluetooth através de um aplicativo desenvolvido no Kodular.
- Recepção e execução dos comandos pelo Arduino para controlar o movimento e o estado do carro.
- Envio dos comandos ao D1 Wemos ESP8266, que os encaminha para a API e os armazena no MongoDB.
- Consulta de histórico de comandos armazenados para análise e monitoramento.

## 💻 Tecnologias Utilizadas
<p>
   <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/VSCode-Dark.svg" alt="VSCode" width="50"/>
   <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Git.svg" alt="Git" width="50"/>
   <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Github-Dark.svg" alt="Github" width="50"/>
   <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/Arduino.svg" alt="ArduinoIcon" width="50"/>
   <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/C.svg" alt="C" width="50"/>
   <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/TypeScript.svg" alt="Typescript" width="50"/>
   <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/NodeJS-Dark.svg" alt="NodeJs" width="50"/>
   <img src="https://github.com/tandpfun/skill-icons/blob/main/icons/MongoDB.svg" alt="MongoDB" width="50"/>
</p>

- **VSCode**: IDE para desenvolver a API.
- **Git e Github**: Para controle de versionamento e manipulação de repositório.
- **Arduino**: Para controle do carro e execução dos comandos recebidos via Bluetooth.
- **D1 Wemos ESP8266**: Para comunicação Wi-Fi com a API.
- **Kodular**: Para criação do aplicativo de controle Bluetooth.
- **Typescript**: Linguagem utilizada.
- **Node.js e Express**: Para desenvolvimento da API e utilização dos métodos http.
- **MongoDB**: Para armazenamento dos comandos recebidos.

## 🧩 Requisitos

- [Node.js](https://nodejs.org/) instalado no sistema
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) ou uma instância local do MongoDB
- Biblioteca `ESP8266WiFi` e `ESP8266HTTPClient` instaladas na IDE do Arduino

## ⚙ Configuração do Projeto

### 1. Configuração do Arduino e D1 Wemos ESP8266

1. Monte o circuito do carro conforme o projeto.
2. Conecte o D1 Wemos ESP8266 ao Arduino para que possa receber os comandos via Serial.
3. Carregue o código no Arduino para executar os comandos do carro com controle Bluetooth.
4. Carregue o código no D1 Wemos ESP8266 para enviar os comandos à API.

### 2. Configuração da API

1. Clone o repositório do projeto.
   
   ```bash
   git clone <url-do-repositorio>
   cd CarroBluetooth-API
   ```

2. Instale as dependências do Node.js.

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```plaintext
   MONGO_URI=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<nome_do_banco>?retryWrites=true&w=majority
   PORT=5000
   ```

   Certifique-se de que o IP da sua máquina está incluído na whitelist do MongoDB Atlas.

4. Inicie o servidor localmente.

   ```bash
   ts-node src/app.ts
   ```

5. A API deve agora estar rodando em `http://localhost:5000`.

### 3. Configuração do Aplicativo Kodular

1. No Kodular, configure o aplicativo para enviar comandos ao Arduino via Bluetooth.
2. Teste o controle do carro para verificar se os comandos estão sendo enviados corretamente ao Arduino.

## Estrutura do Projeto

```plaintext
|-- src
|   |-- controllers   # Controladores das requisições da API
|   |-- services      # Serviços com a lógica de negócios
|   |-- models        # Modelos de dados do MongoDB
|   |-- routes        # Rotas da API
|   |-- config        # Configurações (conexão com MongoDB)
|-- .env              # Variáveis de ambiente
|-- app.ts            # Inicialização do servidor
|-- README.md         # Documentação do projeto
```

## Endpoints da API

### Registrar Comando

- **Endpoint**: `POST /api/commands`
- **Descrição**: Recebe e armazena o comando enviado pelo D1 Wemos ESP8266.
- **Exemplo de JSON**:

  ```json
  {
      "command": "F",
      "status": "executed"
  }
  ```

### Consultar Comandos

- **Endpoint**: `GET /api/commands`
- **Descrição**: Retorna todos os comandos armazenados no MongoDB.

## Funcionamento do Projeto

1. O aplicativo Kodular envia comandos via Bluetooth para o Arduino.
2. O Arduino executa o comando e o transmite para o D1 Wemos ESP8266 via Serial.
3. O D1 Wemos ESP8266 conecta-se ao Wi-Fi e envia o comando para a API.
4. A API armazena o comando no MongoDB, permitindo monitoramento e análise dos comandos executados.

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto.
2. Crie uma nova branch com suas alterações (`git checkout -b feature/nova-funcionalidade`).
3. Faça commit de suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Envie para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

## Licença

Este projeto é de código aberto e está licenciado sob a licença MIT.
