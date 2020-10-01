/* Validando os dados do formulario */      
function validarForm(){
    var formCorreto;
    var nome = ancora.nomesobrenome.value;
    var email = ancora.email.value;
    var telefone = ancora.telefone.value;
    var mensagem = ancora.mensagem.value;

    if(nome == ""){
        alert("Campo nome é obrigatorio");
        ancora.nomesobrenome.focus();
        return false;
    }else{
        formCorreto = true;
    }

    if(email == ""){
        alert("Campo Email é obrigatorio");
        ancora.email.focus();
        return false;
    }else{
        formCorreto = true;
    }

    if(telefone == "" ){
        alert("Campo telefone é obrigatorio");
        ancora.telefone.focus();
        return false;
    }else{
        formCorreto = true;
    }

    if(isNaN(telefone)== true){
        alert("O telefone precisa ser formado por números");
        ancora.telefone.focus();
        return false;
    }else{
        formCorreto = true;
    }

    if(mensagem == ""){
        alert("Campo mensagem é obrigatorio");
        ancora.mensagem.focus();
        return false;
    }else{
        formCorreto = true;
    }

    if(formCorreto == true){
        alert("Formulario enviado com sucesso");
    }
}


