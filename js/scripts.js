// selecionando todos os elementos
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect= document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio
    if(nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    // verifica se o e-mail está preenchido e se é valido
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email");
        return;
    }

// verifica se a senha está preenchida
if(!validatePassaword(passwordInput.value, 8)) {
    alert("A senha precisa ser no mínimo 8 dígitos");
    return;

}

// Verificar se a situação foi selecionada
if (jobSelect.value === "") {
    alert("Por favor, selecione a sua situação");
    return;
}

// verifica se a mensagem está preenchida
if (messageTextarea.value === "") {
    alert("por favor, escreva uma mensagem");
    return;
}

    // Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
}); 

// função que valida o e-mail
function isEmailValid(email) {

    // cria um regex para validar  email
    const emailRegex = new RegExp(
        // usuario12@host.com.br validando como o email deve ser digitado
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

    );
        // condicional para  validar a regex
    if(emailRegex.test(email)) {
        return true
    }

    return false;
}

//função que valida a senha
function validatePassaword(password, minDigits) {
    if(password.length >= minDigits) {
        // Senha válida
        return true
    }

    //senha inválida
    return false
}