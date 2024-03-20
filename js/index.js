$(document).ready(function() {
    $('.menu-hamburger').click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 0 0000-0000', {
        placeholder: '(__) _ ____-____',
    });

    $('#cep').mask('00000-000', {
        placeholder: '_____-___',
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__',
    });

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            email: {
                required: true,
                email: true,
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira seu telefone',
            cpf: 'Por favor, insira seu CPF',
            email: 'Por favor, insira seu e-mail',
            endereco: 'Por favor, insira seu endereço',
            cep: 'Por favor, insira seu CEP'
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Exitem ${camposIncorretos} campos incorretos.`);
            }
        }
    });
})