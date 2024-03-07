let form = document.getElementById('container__form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('form__campo-a');
    const campoB = document.getElementById('form__campo-b');
    const mensagem = document.getElementById('container__mensagem');

    if (campoB.value > campoA.value) {
        mensagem.innerHTML = "Uhuuul, o segundo campo é maior.";
    } else {
        mensagem.innerHTML = "O segundo campo é menor, que pena!";
    }
})
