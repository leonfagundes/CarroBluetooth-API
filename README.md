
# 🚗 Carrinho Controlado por App via Bluetooth e Armazena Dados na Nuvem

Este repositório é parte de um conjunto de três repositórios que compõem o projeto do **Carrinho Bluetooth Controlado por App**, sendo eles:

- [CarroBluetooth-Interface (clique aqui!)](https://github.com/leonfagundes/CarroBluetooth-Interface): Repositório da interface web para visualização dos dados armazenados na nuvem.
- [CarroBluetooth-App (clique aqui!)](https://github.com/leonfagundes/CarroBluetooth-App): Repositório do aplicativo responsável pelo controle Bluetooth do carrinho.
- **CarroBluetooth-API (atual)**: Repositório da API que conecta o carrinho ao banco de dados na nuvem.

Confira abaixo vídeos demonstrativos do carrinho em funcionamento:

[![Controle Bluetooth em Ação](https://img.youtube.com/vi/izKYEL1VnGo/hqdefault.jpg)](https://youtube.com/shorts/izKYEL1VnGo?feature=share "Controle Bluetooth em Ação")

[![Movimentos do Carrinho](https://img.youtube.com/vi/lyGn77DkQ10/hqdefault.jpg)](https://youtube.com/shorts/lyGn77DkQ10?feature=share "Movimentos do Carrinho")

[![Visualização do App](https://img.youtube.com/vi/1_qpdBCqRkQ/hqdefault.jpg)](https://youtube.com/shorts/1_qpdBCqRkQ?feature=share "Visualização do App")

---

## 🛠 Funcionalidades

- Controle do carro via Bluetooth através de um aplicativo desenvolvido no Kodular.
- Recepção e execução dos comandos pelo Arduino Uno para controlar o movimento e o estado do carro.
- O Arduino Uno realiza as requisições HTTP diretamente para a API, que armazena os comandos recebidos no MongoDB.
- Consulta de histórico de comandos armazenados para análise e monitoramento.

#### 🌐 Link da API publicada: [https://carrobluetooth-api-9bn0.onrender.com](https://carrobluetooth-api-9bn0.onrender.com)

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

## 🧩 Requisitos

- [Node.js](https://nodejs.org/) instalado no sistema
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) ou uma instância local do MongoDB

## ⚙ Configuração do Projeto

### 1. Configuração do Arduino Uno

1. Monte o circuito do carro conforme o projeto. ([Link do projeto de referência](https://projecthub.arduino.cc/samanfern/bluetooth-controlled-car-c71cd0))
2. Conecte o módulo Bluetooth ao Arduino Uno para que possa receber os comandos via Bluetooth do aplicativo.
3. Carregue o código no Arduino Uno para executar os comandos do carro e enviar requisições HTTP diretamente para a API. (Código do Arduino no [link do repositório do APP](https://github.com/leonfagundes/CarroBluetooth-App))

### 2. Configuração da API

1. Clone o repositório do projeto.

   ```bash
   git clone <url-do-repositorio>
   cd CarroBluetooth-API
   ```

2. Instale as dependências do Node.js.

   ```bash
   npm install ou
   yarn
   ```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```plaintext
   MONGO_URI=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<nome_do_banco>?retryWrites=true&w=majority
   PORT=5000
   ```

   Certifique-se de que o IP da sua máquina está incluído na whitelist do MongoDB Atlas, caso queira
   liberar acesso para qualquer IP basta inserir 0.0.0.0/0 na whitelist em Network Acess.

5. Inicie o servidor localmente.

   ```bash
   ts-node src/app.ts
   ```

6. A API deve agora estar rodando em `http://localhost:5000`.

### 3. Configuração do Aplicativo Kodular

1. Conferir a condiguração do App em [Repositório do APP](https://github.com/leonfagundes/CarroBluetooth-App))

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
- **Descrição**: Recebe e armazena o comando enviado pelo app.
- **Exemplo de JSON**:

  ```json
  {
      "command": "F",
  }
  ```

### Consultar Comandos

- **Endpoint**: `GET /api/commands`
- **Descrição**: Retorna todos os comandos armazenados no MongoDB.

- **Endpoint**: `DELETE /api/commands`
- **Descrição**: Remove todos os comandos presentes no banco

## Funcionamento do Projeto

1. O aplicativo Kodular envia comandos via Bluetooth para o Arduino.
2. O Arduino executa o comando e o transmite para o Arduino Uno via Serial.
3. O Uno conecta-se ao Wi-Fi e envia o comando para a API.
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
