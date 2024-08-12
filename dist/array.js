"use strict";

var alunos = [{
  nome: 'Anthony',
  nota: 7
}, {
  nome: 'João',
  nota: 5
}, {
  nome: 'Luísa',
  nota: 8
}, {
  nome: 'Ana',
  nota: 6
}, {
  nome: 'Lucas',
  nota: 4
}, {
  nome: 'Alice',
  nota: 5
}];
function filtrarAlunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);