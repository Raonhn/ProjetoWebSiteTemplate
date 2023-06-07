// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var id = sessionStorage.ID_USUARIO;

    var perfil = document.getElementById("perfil");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        perfil.innerHTML = nome;

        // finalizarAguardar();
    } else {
        alert("Você não está logado, redirecionando para a pagina de login.")
        window.location = "../cadastro.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../cadastro.html";
}

function avisoSaindo() {
    sessionStorage.clear();
    saindo.classList.add('block')
    setTimeout(() => {
        window.location = "../index.html";
    }, "3000")
}

function recarregar() {
    setTimeout(() => {
        window.location = "cards.html";
    }, "250")
}

// carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }

// function finalizarAguardar(texto) {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";

//     var divErrosLogin = document.getElementById("div_erros_login");
//     if (texto) {
//         divErrosLogin.style.display = "flex";
//         divErrosLogin.innerHTML = texto;
//     }
// }


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

