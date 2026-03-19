/**
 * LAB: O Pisca-Pisca do Painel 🚨
 * Objetivo: Fazer a luz de Alerta alternar entre ACESO e APAGADO.
 */

// 1. Array com as duas cores/estados [cite: 278, 280, 284]
const luzes = ["ACESO", "APAGADO"];
let contador = 0; // [cite: 285]

console.log("SISTEMA DO CARRO INICIADO!"); // [cite: 294]

// 2. setInterval para trocar a cor a cada 1 segundo (1000ms) [cite: 281, 287, 292]
setInterval(() => {
    // 3. O Módulo (%) garante que a posição seja sempre 0 ou 1 [cite: 282, 290]
    // contador % 2 -> 0, 1, 0, 1... [cite: 288]
    const posicao = contador % luzes.length; 
    
    console.log(`PAINEL: Luz de Alerta -> [${luzes[posicao]}]`);

    contador++; // Incrementa para a próxima volta
}, 1000);