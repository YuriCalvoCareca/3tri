// script.js
function calcularDesempenho() {
    // Obter notas e frequências dos campos de entrada
    const nomeAluno = document.getElementById("nome").value;
    const notaMatematica = parseFloat(document.getElementById("nota-matematica").value);
    const freqMatematica = parseFloat(document.getElementById("freq-matematica").value);
    const notaPortugues = parseFloat(document.getElementById("nota-portugues").value);
    const freqPortugues = parseFloat(document.getElementById("freq-portugues").value);
    const notaCiencias = parseFloat(document.getElementById("nota-ciencias").value);
    const freqCiencias = parseFloat(document.getElementById("freq-ciencias").value);
    const notaHistoria = parseFloat(document.getElementById("nota-historia").value);
    const freqHistoria = parseFloat(document.getElementById("freq-historia").value);
    const notaGeografia = parseFloat(document.getElementById("nota-geografia").value);
    const freqGeografia = parseFloat(document.getElementById("freq-geografia").value);

    // Calcular a média das notas
    const mediaNotas = (notaMatematica + notaPortugues + notaCiencias + notaHistoria + notaGeografia) / 5;

    // Verificar a frequência média
    const mediaFrequencia = (freqMatematica + freqPortugues + freqCiencias + freqHistoria + freqGeografia) / 5;

    // Exibir a média das notas
    document.getElementById("media").innerText = `Média das Notas: ${mediaNotas.toFixed(2)}`;

    // Determinar a situação do aluno (aprovado ou reprovado)
    let situacao = '';
    if (mediaNotas >= 6 && mediaFrequencia >= 75) {
        situacao = "Aluno aprovado!";
    } else if (mediaNotas < 6) {
        situacao = "Aluno reprovado por média!";
    } else if (mediaFrequencia < 75) {
        situacao = "Aluno reprovado por frequência!";
    }

    // Exibir a situação do aluno
    document.getElementById("situacao").innerText = situacao;
}
