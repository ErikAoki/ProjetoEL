// Home
// Verificação de senha
function verificarSenha(){
//Verificar email
	if(document.formulario.email1.value == ""){
		alert("Necessário preencher o campo de email");
	}
	else{
		text = "Email registrado";
		document.getElementById("validacao").innerHTML = text;
	}
	var campo = document.formulario;
// Verificar radio
	if(campo.novo1.checked==false && campo.novo2.checked==false && campo.novo3.checked==false){
		alert("Selecione uma das opções");
	}
	else
		text = "Opção registrada";
		document.getElementById("selecao").innerHTML = text;
}


// Fale conosco 
//Validar informações
function mensagem(){
	if(document.formulario2.name.value == ""){
		if(document.formulario2.email2.value == ""){
			if(document.formulario2.message.value == ""){
				alert("Escreva uma mensagem");
			}
			else
				alert("Necessário email");
		}
		else
			alert("Insira um nome");
	}
	else{
		text = "Mensagem enviada com sucesso";
		document.getElementById("mensagem").innerHTML = text;
	}
}
//Filmes
//Tamanho das imagens
function imagemTamanho(grupo){
	grupo.width = grupo.width+300;
	grupo.height = grupo.height+300;
}
function tamanhoNormal(im){
	grupo.width = 180;
	grupo.height = 250;
}