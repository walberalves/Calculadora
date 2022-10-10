function calculadora() {
	const operacao = Number(prompt('Escolha uma operacao:\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão real(/)\n 5 - Divisão inteira(%)\n 6 - Potenciação(**)'));

	console.log(operacao);
    
    if (!operacao || operacao >= 7) {
    	alert('erro - operação inválida');
    	calculadora();
    } else {
  


let n1 = Number(prompt('Insira o primeiro valor:'));
let n2 = Number(prompt('Insira o segundo valor:'));
let resultado;

function soma(){
	resultado = n1 + n2;
	alert(`${n1} + ${n2} = ${resultado}`);
	novaOperacao();
}
function subtracao(){
	resultado = n1 - n2;
	alert(`${n1} - ${n2} = ${resultado}`);
	novaOperacao();
}
function multiplicao(){
	resultado = n1 * n2;
	alert(`${n1} * ${n2} = ${resultado}`);
	novaOperacao();
}
function divisaoReal(){
	resultado = n1 / n2;
	alert(`${n1} / ${n2} = ${resultado}`);
	novaOperacao();
}
function divisaoInteira(){
	resultado = n1 % n2;
	alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
	novaOperacao();
}
function potenciacao(){
	resultado = n1 / n2;
	alert(`${n1} elevado à ${n2} é ${resultado}`);
	novaOperacao();
}

function novaOperacao(){
	let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

	if (opcao == 1) {
		calculadora();
	} else if(opcao == 2){
		alert('Até mais');
	} else {
       alert('Digite uma opção válida!');
       novaOperacao();
	}
  }

}

    switch(operacao) {
    	case 1:
    	    soma();
    	    break;
    	case 2:
    	    subtracao();
    	    break;
    	case 3:
    	    multiplicao();
    	    break;
    	case 4:
    	    divisaoReal();
    	    break;
    	case 5:
    	    divisaoInteira();
    	    break;
    	case 6:
    	    potenciacao();
    	    break;                    
    }




}

calculadora();