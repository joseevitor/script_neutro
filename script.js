emailjs.init({
    publicKey: "0bjaGJY1urnrX3ux3"
})

const container = document.getElementById("container");

const respostas = {
    data: "",
    local: "",
    horário:"",
};

document
    .getElementById("startBtn")
    .addEventListener("click", mostrarTelaData);

function mostrarTelaData() {

    container.innerHTML = `
    
        <h1>📅 Stage 1</h1>

        <p>
            ***********************************************************?
        </p>

        <div class="opcoes">

            <button onclick="selecionarData('09/07')">
                09/07
            </button>

            <button onclick="selecionarData('16/07')">
                16/07
            </button>

            <button onclick="selecionarData('23/07')">
                23/07
            </button>

            <button onclick="selecionarData('30/07')">
                30/07
            </button>

        </div>

    `;
}

function selecionarData(data){

    respostas.data = data;

    mostrarTelaLocal();

}

function mostrarTelaLocal(){
    container.innerHTML =`
        <h1>📍 Stage 2</h1>

        <p>
            **************************************?
        </p>

        <div class="opcoes">

            <button onclick="selecionarLocal('*********')">
                ***********
            </button>
            <button onclick="selecionarLocal('*********')">
                *************
            </button>
            <button onclick="selecionarLocal('********')">
                ***********
            </button>
            <button onclick="selecionarLocal('******')">
                ***********
            </button>

            <button id="naoVaiRolar">
                ❌ Acho que não vai rolar
            </button>

        </div>

    `;
    const botaoFugitivo = document.getElementById("naoVaiRolar");
    botaoFugitivo.addEventListener("mouseover", fugirDoMouse);
    botaoFugitivo.addEventListener("touchstart", fugirDoMouse);
}

function fugirDoMouse(){

    const botao =
        document.getElementById("naoVaiRolar");

    const larguraJanela =
        window.innerWidth;

    const alturaJanela =
        window.innerHeight;

    const novaPosX =
        Math.random() * (larguraJanela - 250);

    const novaPosY =
        Math.random() * (alturaJanela - 100);

    botao.style.position = "fixed";

    botao.style.left =
        novaPosX + "px";

    botao.style.top =
        novaPosY + "px";
}


// Criar a função de seleção
function selecionarLocal(local){

    respostas.local = local;

    alert(
        "Data: " + respostas.data +
        "\nLocal: " + respostas.local
    );

    mostrarTelaHorário();
}

function mostrarTelaHorário(){
    container.innerHTML = `
    <h1>⏰ Stage 3</h1>

        <p>
            *****************?
        </p>

        <div class="opcoes">

            <button onclick="selecionarHorario('8pm')">
                8pm
            </button>

            <button onclick="selecionarHorario('9pm')">
                9pm
            </button>

            <button onclick="selecionarHorario('10pm')">
                10pm
            </button>

            <button onclick="selecionarHorario('11pm')">
                11pm
            </button>

            <button onclick="selecionarHorario('midnight')">
                midnight
            </button>

        </div>
    `
}

function selecionarHorario(horario){
    respostas.horario = horario;

    mostrarTelaFinal();
}

function mostrarTelaFinal(){
    container.innerHTML = `
    <h1>✅ Mission Accepted</h1>

        <p>
            ********************
        </p>

        <div class="resumo">

            <p><strong>Data:</strong> ${respostas.data}</p>

            <p><strong>Local:</strong> ${respostas.local}</p>

            <p><strong>Horário:</strong> ${respostas.horario}</p>

        </div>

        <button id="confirmarBtn">
            ***************************************?
            ************************************************
        </button>
    `
    document
        .getElementById("confirmarBtn")
        .addEventListener("click", confirmarMissao);
}
 // PUBLIC KEY = 0bjaGJY1urnrX3ux3
function confirmarMissao(){

    emailjs.send(
        "service_nldmt2k",
        "template_ep8aklv",
        {
            data: respostas.data,
            local: respostas.local,
            horario: respostas.horario
        }
    )
    .then(() => {

        container.innerHTML = `
            <h1>✅ Mission concluded</h1>

            <p>
                ******************************
                *********************************
            </p>

            <p>
                *************************
                ***************
            </p>
        `;

    })
    .catch((erro) => {

        console.error("Erro:", erro);
        alert(JSON.stringify(erro));

    });

    console.log(respostas);
}
