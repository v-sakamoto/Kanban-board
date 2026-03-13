// SEMANA 1 - DIA 1: Primeiros passos em JavaScript

// --- VARIAVEIS ---
let meuNome = "Vinicius";
const projetoNome = "Kanban Board";

console.log("Ola, " + meuNome + "!");
console.log("Projeto: " + projetoNome);

// --- TIPOS DE DADOS ---
let texto = "isso e uma string";
let numero = 42;
let verdadeiro = true;

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof verdadeiro);

// --- TEMPLATE LITERALS ---
let mensagem = `Bem-vindo ao ${projetoNome}, ${meuNome}!`;
console.log(mensagem);

// --- ARRAYS ---
let tarefas = ["Estudar JavaScript", "Instalar Node.js", "Criar repositorio"];

console.log(tarefas);
console.log(tarefas[0]);
console.log(tarefas.length);

tarefas.push("Aprender React");
console.log(tarefas);

tarefas.pop();
console.log(tarefas);

// --- OBJETOS ---
let tarefa = {
    id: 1,
    titulo: "Aprender JavaScript",
    descricao: "Estudar variaveis, arrays e objetos",
    status: "em_progresso",
    prioridade: "alta"
};

console.log(tarefa);
console.log(tarefa.titulo);
console.log(tarefa.status);

tarefa.status = "concluido";
console.log(`Tarefa "${tarefa.titulo}" agora esta: ${tarefa.status}`);

