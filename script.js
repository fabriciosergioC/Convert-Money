const botao = document.getElementById('botaoConverter')
const select = document.getElementById('selecionarMoeda')


const dolar = 5.01
const euro = 5.47
const bitcoin = 141188.06

const converteValores = () => {
    const inputConverte = document.getElementById('inputReais').value
    const valorReal = document.getElementById('valorReais')
    const valorDolar = document.getElementById('valorDoelares')


    valorReal.innerHTML = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',

    }).format(inputConverte);

    if (select.value === 'USD Dolar americano') {
        valorDolar.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputConverte / dolar);
    }

    if (select.value === 'Є Euro') {
        valorDolar.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputConverte / euro);
    }
    if (select.value === 'Bitcoin') {
        valorDolar.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC',
        }).format(inputConverte / bitcoin);
    }
}

trocaValores = () => {
    const MoedaD = document.getElementById('MoedaDolar')
    const bandeira = document.getElementById('Bandeira')

    if (select.value === "USD Dolar americano") {
        MoedaD.innerHTML = "Dolar americano"
        bandeira.src = "./img/estados-unidos.png"
    }

    if (select.value === "Є Euro") {
        MoedaD.innerHTML = "Euro"
        bandeira.src = "./img/euro.png"
    }

    if (select.value === "Bitcoin") {
        MoedaD.innerHTML = "Bitcoin"
        bandeira.src = "./img/bitcoin.png"
    }

    converteValores()
}
botao.addEventListener('click', converteValores)
select.addEventListener("change", trocaValores)

