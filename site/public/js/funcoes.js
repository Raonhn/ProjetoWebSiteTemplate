// sessão
function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var id = sessionStorage.ID_USUARIO;

    var email2 = localStorage.EMAIL_USUARIO;
    var nome2 = localStorage.NOME_USUARIO;
    var id2 = localStorage.ID_USUARIO;

    var perfil = document.getElementById("perfil");

    if (email != null && nome != null || email2 != null && nome2 != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);

        if(nome != null){
            perfil.innerHTML = nome;
        } else {
            perfil.innerHTML = nome2;
            sessionStorage.EMAIL_USUARIO = email2;
            sessionStorage.NOME_USUARIO = nome2;
            sessionStorage.ID_USUARIO = id2;
            
        }

        // finalizarAguardar();
    } else {
        alert("Você não está logado, redirecionando para a pagina de login.")
        window.location = "../cadastro.html";
    }
}

function validarSessao2() {

    var email = localStorage.EMAIL_USUARIO;
    var nome = localStorage.NOME_USUARIO;
    var id = localStorage.ID_USUARIO;

    if (email != null && nome != null) {
        alert("Recuperando dados da ultima seção")
        window.location = "dashboard/cards.html";
        
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    localStorage.clear();
    // finalizarAguardar();
    window.location = "../cadastro.html";
}

function avisoSaindo() {
    sessionStorage.clear();
    localStorage.clear();
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

