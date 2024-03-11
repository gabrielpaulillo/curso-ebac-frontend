$(document).ready(() => {
    inserirNovaTarefa();
})


function inserirNovaTarefa() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeDaTarefa = $('#form__nome-tarefa').val();
        $('#tarefa-inserida').append(`<li class="item-da-lista"><a class="concluido" href="#">✔</a> <span id="span-tarefa">${nomeDaTarefa}</span> <a class='delete' href='#'>❌</a></li>`)
        $('#form__nome-tarefa').val('');
    });

    $("ul").on("click", ".concluido", function(e) {
        $(this).next('#span-tarefa').css("text-decoration", "line-through");
    });

    $("ul").on("click", ".delete", function(e) {
        $(this).closest('li').remove();
    });
}