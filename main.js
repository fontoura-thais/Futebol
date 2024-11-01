alert("Futebolas")
function criarCartao(pergunta,resposta){
   let conteudo = document.getElementById("conteudo")
let cartao = document.createElement('article')
cartao.classList = 'cartao'


cartao.innerHTML = `<div class="cartao--conteudo">
        <div class="cartao--pergunta"><p>Quem foi o campeão da copa paulista de 2021 ? </p></div>
         <div class="cartao--resposta"><p>O campeonato teve como campeão o São Paulo</p></div>
        </div>`

conteudo.appendChild(cartao)

}
criarCartao(1,2)
criarCartao(1,2)