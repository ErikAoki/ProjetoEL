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
//Função de slides do banner
function slide1(){
	document.getElementById("imagem").src = "Banner.png"
	setTimeout("slide2()", 3000);
}
function slide2(){
	document.getElementById("imagem").src = "Banner2.png"
	setTimeout("slide3()", 3000);
}
function slide3(){
	document.getElementById("imagem").src = "Banner3.png"
	setTimeout("slide4()", 3000);
}
function slide4(){
	document.getElementById("imagem").src = "Banner4.png"
	setTimeout("slide5()", 3000);
}
function slide5(){
	document.getElementById("imagem").src = "Banner5.png"
	setTimeout("slide1()", 3000);
}