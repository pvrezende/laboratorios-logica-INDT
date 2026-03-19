/**
 * MISSÃO: O Monitor de Pedidos da Pizzaria 🍕
 * Objetivo: Rodar um monitor de nomes sem travar o recebimento de pedidos.
 */

// 1. A Fila de Funcionários 
const funcionarios: string[] = ["Ana", "Beto", "Caio", "Duda"];

// 5. Prova do Event Loop: Simulação de Pedidos Online 
// Este intervalo roda a cada 300ms e PROVA que o código não trava[cite: 262].
const pedidoInterval = setInterval(() => {
    console.log("[SISTEMA]: Recebendo pedido online...");
}, 300);

// Função principal do Monitor
async function iniciarMonitor() {
    let contadorPassos = 0;
    const totalExibicoes = 15; // Regra: mostrar 15 nomes antes de escolher [cite: 257]

    console.log("=== MONITOR DA COZINHA INICIADO ===");

    // Lógica de Ciclo Recursiva (Não bloqueante) [cite: 274]
    const girarMonitor = () => {
        if (contadorPassos < totalExibicoes) {
            // 3. Operador de Módulo (%) mantém o índice dentro do array [cite: 258, 273]
            const posicao = contadorPassos % funcionarios.length;
            const nomeAtual = funcionarios[posicao];

            console.log(`Monitor: Próximo pode ser ${nomeAtual}...`);

            contadorPassos++;

            // 4. Física do Delay: O tempo aumenta a cada troca [cite: 259, 275]
            // Fórmula: passos * 40ms 
            const delay = contadorPassos * 40;

            // Agenda a próxima troca sem parar o Event Loop
            setTimeout(girarMonitor, delay);
        } else {
            // 270. Finalização: O pedido vai para o último nome mostrado
            const vencedor = funcionarios[(contadorPassos - 1) % funcionarios.length];
            
            console.log("\n----------------------------");
            console.log(`🍕 O PEDIDO VAI PARA: ${vencedor}!`);
            console.log("----------------------------\n");

            // Para o simulador de pedidos para limpar o terminal após o fim
            clearInterval(pedidoInterval);
        }
    };

    // Inicia o processo
    girarMonitor();
}

iniciarMonitor();