function cadastrar(){
    let usuario = window.document.getElementById("usuario").value;
    let senha = window.document.getElementById("senha").value;
    let cpf = window.document.getElementById("cpf").value;

    window.document.getElementById("iUsuario").innerHTML = usuario;
    window.location = "usuario.html";

    console.log(usuario);
    console.log(senha);
    console.log(cpf);
};



function voltar(){
    window.location = "index.html";
};