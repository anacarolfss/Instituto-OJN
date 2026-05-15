
let mensagem = ``;
function VerificarDados() {
    let pontuacao = 100;

    // pega o elemento
    let idade = document.querySelector("#idade");
    let div_mensagem = document.querySelector(".div_mensagem");
    let eliminatoria = false;

    // idade
    let res_idade = idade.value;

    if (res_idade == 'sim') {
        pontuacao += 0;
    } else {
        eliminatoria = true;
    }

    // todos concordam com a adoção?
    let concordar = document.querySelector("#concordar");
    let res_concordar = concordar.value;

    if (res_concordar == 'sim') {
        pontuacao += 0;
    } else {
        pontuacao -= 1
    }

    // onde mora pode animais?
    let local = document.querySelector("#local");
    let res_local = local.value;

    if (res_local == 'sim') {
        pontuacao += 0;
    } else {
        eliminatoria = true;
    }

    // quantidade animais
    let qtd_animais = document.querySelector("#qtd_animais");
    let res_qtd_animais = qtd_animais.value;

    if (res_qtd_animais == 'Nenhum') {
        pontuacao += 2;
    } else if (res_qtd_animais == '1' || res_qtd_animais == '2' || res_qtd_animais == '3') {
        pontuacao += 2;
    } else if (res_qtd_animais == '4' || res_qtd_animais == '5') {
        pontuacao += 1;
    } else if (res_qtd_animais == 'mais') {
        pontuacao += 0;
    }

    // castração/vacina
    let castracao_vacina = document.querySelector("#castracao_vacina");
    let res_castracao_vacina = castracao_vacina.value;

    if (res_castracao_vacina == 'nenhum') {
        pontuacao += 0;
    } else if (res_castracao_vacina == 'castrado' || res_castracao_vacina == 'vacinado') {
        pontuacao -= 20;
    } else if (res_castracao_vacina == 'ambos') {
        pontuacao += 5;
    } else if (res_castracao_vacina == 'nenhum-cuidado') {
        eliminatoria = true;
    }

    // horas fora
    let horas = document.querySelector("#horas");
    let res_horas = horas.value;

    if (res_horas == 'perfeito') {
        pontuacao += 5;
    } else if (res_horas == 'otimo') {
        pontuacao += 4;
    }
    else if (res_horas == 'bom') {
        pontuacao += 3;
    } else if (res_horas == 'pessimo') {
        eliminatoria = true;
    }

    // adaptacao animal
    let adaptacao = document.querySelector("#adaptacao");
    let res_adaptacao = adaptacao.value;

    if (res_adaptacao == 'sim') {
        pontuacao += 5;
    } else if (res_adaptacao == 'medio') {
        pontuacao += 0;
    } else if (res_adaptacao == 'nao') {
        eliminatoria = true;
    }

    // destruicao
    let destruicao = document.querySelector("#destruicao");
    let res_destruicao = destruicao.value;

    if (res_destruicao == 'sim') {
        pontuacao += 5;
    } else if (res_destruicao == 'medio') {
        pontuacao += 1;
    } else if (res_destruicao == 'ruim') {
        pontuacao -= 20;
    } else if (res_destruicao == 'nao') {
        eliminatoria = true;
    }

    // demora necessidades
    let necessidades = document.querySelector("#necessidades");
    let res_necessidades = necessidades.value;

    if (res_necessidades == 'sim') {
        pontuacao += 5;
    } else if (res_necessidades == 'medio') {
        pontuacao += 3;
    } else if (res_necessidades == 'ruim') {
        pontuacao -= 10;
    } else if (res_necessidades == 'nao') {
        eliminatoria = true;
    }

    // calculo valor disponivel para cachorro
    let investimento_dog = document.querySelector("#input_valor_investimento");
    let res_investimento_dog = Number(investimento_dog.value);

    if (res_investimento_dog < 200) {
        if (pontuacao > 100 && eliminatoria == false) {
            mensagem += `<br><br> Percebemos que seu investimento mensal é mais limitado no momento, mas seu perfil demonstra responsabilidade e cuidado. Por isso, o Instituto OJN pode te apoiar com consultas gratuitas e vacinação.`
        }

    }

    if (eliminatoria) {
        mensagem = `<br><br>
        ❌ No momento, não é possível seguir com a adoção. <br>
        Algumas condições essenciais precisam ser ajustadas para garantir o bem-estar do animal.
    `;

    } else if (pontuacao >= 110) {
        mensagem = `<br><br>
        ✅ Parabéns! Você está APTO para adoção!<br>
        Seu perfil demonstra responsabilidade, cuidado e preparo para oferecer um lar seguro para um animal.
    `;

    } else if (pontuacao >= 95) {
        mensagem = `<br><br>
       ⚠️ Você está quase pronto para adoção!<br>
        Seu perfil é positivo, mas ainda precisa de alguns ajustes para garantir um ambiente adequado para o animal.
    `;

    } else {
        mensagem = `
    ⚠️ No momento, não recomendamos a adoção.<br>
    Mas isso não é definitivo! Com melhorias no seu preparo, você poderá tentar novamente futuramente.
    `;
    }

    if (
        res_idade == "" ||
        res_concordar == "" ||
        res_local == "" ||
        res_qtd_animais == "" ||
        res_castracao_vacina == "" ||
        res_horas == "" ||
        res_adaptacao == "" ||
        res_destruicao == "" ||
        res_necessidades == "" ||
        res_investimento_dog == ""
    ) {
        alert("Preencha todos os campos antes de continuar");
        return;
    }
    div_mensagem.innerHTML = mensagem;

    if (eliminatoria || pontuacao < 100) {

        let irVoluntario = confirm("❌ Você não está apto para adoção. Deseja fazer login para ver voluntariado?");

        if (irVoluntario) {
            sessionStorage.destino = "voluntario";
            window.location.href = "login.html";
        }
    }
    else if (pontuacao >= 110) {
        let irAdocao = confirm("🎉 Você está apto! Deseja fazer login para continuar?");
        if (irAdocao) {
            sessionStorage.destino = "adocao"; 
            window.location.href = "queroajudar.html";
        }
    }
}