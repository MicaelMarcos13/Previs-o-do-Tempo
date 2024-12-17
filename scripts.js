

const key = "d457296c978debe0adeb0ad76f65899c"

function colocarDadosNaTela(dados) {
console.log(dados)

  document.querySelector("h2").innerHTML = " Tempo em " + dados.name
  document.querySelector(".grau").innerHTML = Math.floor(dados.main.temp) + "°C"
  document.querySelector(".nublado").innerHTML = dados.weather[0].description
  document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
  document.querySelector(".nuvem").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png `
  document.querySelector(".min").innerHTML = Math.floor(dados.main.temp_min) + "°C" + " min "
  document.querySelector(".max").innerHTML = Math.floor(dados.main.temp_max) + "°C" + " max "
  }
  async function buscarCidade(cidade) {

  

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Resposta => Resposta.json())




    colocarDadosNaTela(dados)

  }


  function cliqueinobotao() {
    const cidade = document.querySelector("input").value

    buscarCidade(cidade)
  }