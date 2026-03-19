// Simulação de uma função que busca dados no banco
const buscarDadosNoBanco = () => {
    return new Promise((resolve, reject) => {
        const bancoEstaOnline = false; // Simulando uma falha no banco

        setTimeout(() => {
            if (bancoEstaOnline) {
                resolve({ id: 1, nome: "Sensor Amazônia" });
            } else {
                reject("ERRO: Banco de dados não respondeu!"); // A "promessa" falhou
            }
        }, 2000); // Simulando um atraso de 2 segundos
    });
};

async function executarServico() {
    console.log("📡 Solicitando dados ao servidor...");

    try {
        // O 'await' espera a Promise ser resolvida
        const dados = await buscarDadosNoBanco();
        console.log("✅ Dados recebidos:", dados);
    } catch (error) {
        // O 'catch' impede que o sistema morra se a Promise falhar
        console.error("🚨 ESCUDO ATIVADO! Capturamos um erro:");
        console.error(`Mensagem: ${error}`);
        console.log("🔌 O servidor continua rodando e pronto para a próxima requisição.");
    }
}

executarServico();