
const calcular = document.getElementById('calcular');


function imc () {
    const Nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const pesso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && pesso !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.'
        }else if (valorIMC < 25){
            classificacao = 'com peso ideal. Paravéns';
        }else if (valorIMC < 30){
            classificacao = 'Levemente acima do peso';
        }else if (valorIMC < 35){
            classificacao = 'Com obesidade grau I';
        }else if (valorIMC < 40){
            classificacao = 'Com obesidade grau II'
        }else if (valorIMC < 25){
            classificacao = 'Com obesidade grau III. Cuidado!'
        }
            resultado.textContent = '${soma} seu IMC é ${valorIMC} e você está ${classificacao}';
    
        }else {
            resultado.textContent = 'Preencha todos os campos!!!!';
    }
}

calcular.addEventListener('click', imc);