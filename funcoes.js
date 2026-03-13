// =============================================
// SEMANA 1 - DIA 2: Funcoes
// A logica do Kanban em JavaScript puro
// =============================================

// --- FUNCAO BASICA ---
// "function" define uma funcao
// O que esta entre () sao os PARAMETROS (dados de entrada)
// O "return" devolve um resultado

function saudacao(nome) {
    return `Ola, ${nome}! Bem-vindo ao Kanban Board.`;
}

// Chamando a funcao
let resultado = saudacao("Vinicius");
console.log(resultado);

// --- ARROW FUNCTIONS (jeito moderno, ES6+) ---
// Mesmo resultado, escrita mais curta
// Vamos usar MUITO no React

const saudacaoModerna = (nome) => {
    return `Ola, ${nome}! Bem-vindo ao Kanban Board.`;
};

console.log(saudacaoModerna("Vinicius"));

// =============================================
// CONSTRUINDO A LOGICA DO KANBAN
// =============================================

// Contador para gerar IDs unicos
let proximoId = 1;

// Array que guarda TODAS as tarefas (nosso "banco de dados" por enquanto)
let tarefas = [];

// --- FUNCAO 1: Criar Tarefa ---
const criarTarefa = (titulo, descricao, prioridade) => {
    const novaTarefa = {
        id: proximoId,
        titulo: titulo,
        descricao: descricao,
        status: "a_fazer",       // toda tarefa nova comeca em "a_fazer"
        prioridade: prioridade,
        criadoEm: new Date().toLocaleDateString("pt-BR")
    };
    proximoId++;
    tarefas.push(novaTarefa);    // adiciona no array
    console.log(`Tarefa #${novaTarefa.id} "${novaTarefa.titulo}" criada!`);
    return novaTarefa;
};

// --- FUNCAO 2: Mover Tarefa ---
// As colunas do Kanban: "a_fazer" -> "em_progresso" -> "concluido"
const moverTarefa = (id, novoStatus) => {
    // .find() procura um item no array que atenda a condicao
    const tarefa = tarefas.find((t) => t.id === id);

    if (!tarefa) {
        console.log(`Tarefa #${id} nao encontrada!`);
        return null;
    }

    const statusAntigo = tarefa.status;
    tarefa.status = novoStatus;
    console.log(`Tarefa #${id} movida: "${statusAntigo}" -> "${novoStatus}"`);
    return tarefa;
};

// --- FUNCAO 3: Listar Tarefas por Status ---
// .filter() retorna um NOVO array apenas com itens que atendem a condicao
const listarPorStatus = (status) => {
    const filtradas = tarefas.filter((t) => t.status === status);
    console.log(`\n--- ${status.toUpperCase()} (${filtradas.length}) ---`);
    filtradas.forEach((t) => {
        console.log(`  [#${t.id}] ${t.titulo} | Prioridade: ${t.prioridade}`);
    });
    return filtradas;
};

// --- FUNCAO 4: Deletar Tarefa ---
const deletarTarefa = (id) => {
    // .findIndex() acha a POSICAO do item no array
    const indice = tarefas.findIndex((t) => t.id === id);

    if (indice === -1) {
        console.log(`Tarefa #${id} nao encontrada!`);
        return false;
    }

    // .splice() remove item pela posicao
    const removida = tarefas.splice(indice, 1)[0];
    console.log(`Tarefa #${removida.id} "${removida.titulo}" deletada!`);
    return true;
};

// --- FUNCAO 5: Resumo do Board ---
const resumoBoard = () => {
    console.log("\n========== KANBAN BOARD ==========");
    listarPorStatus("a_fazer");
    listarPorStatus("em_progresso");
    listarPorStatus("concluido");
    console.log(`\nTotal: ${tarefas.length} tarefa(s)`);
    console.log("==================================\n");
};

// =============================================
// TESTANDO TUDO (simulando uso real do Kanban)
// =============================================

console.log("=== Criando tarefas ===");
criarTarefa("Aprender JavaScript", "Variaveis, arrays e funcoes", "alta");
criarTarefa("Instalar React", "Configurar projeto com Vite", "alta");
criarTarefa("Desenhar layout", "Criar wireframe do board", "media");
criarTarefa("Configurar banco", "Instalar PostgreSQL", "baixa");

// Ver o board completo
resumoBoard();

console.log("=== Movendo tarefas ===");
moverTarefa(1, "em_progresso");   // Aprender JS -> em progresso
moverTarefa(2, "em_progresso");   // Instalar React -> em progresso
moverTarefa(1, "concluido");      // Aprender JS -> concluido!

// Ver o board atualizado
resumoBoard();

console.log("=== Deletando tarefa ===");
deletarTarefa(4);                  // Remove "Configurar banco"

// Board final
resumoBoard();