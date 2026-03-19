# ⚡ Laboratórios de Lógica e Assincronismo (Node.js & TypeScript)

Este repositório contém uma série de desafios técnicos focados no domínio do **Event Loop**, **Promises** e manipulação de fluxos assíncronos no Node.js.

## 🚀 Desafios Implementados

### 1. 🍕 O Monitor da Pizzaria (`pizzaria.ts`)
**Problema:** Um sistema de rodízio de nomes que travava o recebimento de pedidos online por usar loops bloqueantes.
- **Solução:** Implementação de um monitor assíncrono usando `setTimeout` recursivo.
- [cite_start]**Conceitos Aplicados:** - **Operador de Módulo (`%`)**: Para criar um rodízio infinito dentro do array de funcionários[cite: 258, 273].
  - [cite_start]**Non-blocking I/O**: Uso de um `setInterval` ao fundo que prova que o sistema continua recebendo pedidos enquanto o monitor "gira"[cite: 261, 262].
  - [cite_start]**Delay Progressivo**: Aceleração e desaceleração física do monitor (`passos * 40ms`)[cite: 260].

### 2. 🚨 O Pisca-Pisca do Painel (`painel.ts`)
**Problema:** Simular o alerta de um carro alternando estados de luz.
- **Solução:** Uso de temporizadores fixos para alternância binária.
- **Conceitos Aplicados:**
  - [cite_start]**`setInterval`**: Execução de tarefas repetitivas em intervalos constantes[cite: 281, 287].
  - [cite_start]**Lógica Binária**: Alternância entre os índices 0 e 1 (`contador % 2`)[cite: 282, 288].

### 3. 🛡️ Resiliência de API (`desafio_tecnico.ts`)
**Problema:** Como evitar que a API "morra" (crash) quando um serviço externo (como banco de dados) falha ou demora?
- **Solução:** Implementação de um "escudo" usando tratamento de exceções.
- **Conceitos Aplicados:**
  - [cite_start]**Promises & Async/Await**: Gerenciamento de operações que levam tempo para completar[cite: 317, 318].
  - [cite_start]**Try/Catch**: Captura de erros em promessas rejeitadas, garantindo que o servidor continue rodando mesmo após uma falha[cite: 320, 323].

## 🛠️ Tecnologias Utilizadas
- **Node.js**
- **TypeScript**
- **TSX** (para execução rápida de scripts TypeScript)

## 🏃 Como Executar os Testes
Certifique-se de ter o Node.js instalado e execute os comandos abaixo no terminal:

```bash
# Testar o Monitor da Pizzaria
npx tsx pizzaria.ts

# Testar o Pisca-Pisca do Painel
npx tsx painel.ts

# Testar a Resiliência (Try/Catch)
npx tsx desafio_tecnico.ts
