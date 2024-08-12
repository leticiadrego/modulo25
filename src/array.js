const alunos = [
    { nome: 'Anthony', nota: 7 },
    { nome: 'João', nota: 5 },
    { nome: 'Luísa', nota: 8 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Lucas', nota: 4 },
    { nome: 'Alice', nota: 5 }
];

function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);