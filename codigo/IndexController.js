app.controller('IndexController', function($scope) {
    $scope.imagens_palavras = [{
            palavra: "Avião",
            imagem: "../Imagens/aviao.png",
        },
        {
            palavra: "Bicicleta",
            imagem: "../Imagens/bicicleta.png",
        },
        {
            palavra: "Bola",
            imagem: "../Imagens/bola.png",
        },
        {
            palavra: "Cachorro",
            imagem: "../Imagens/cachorro.png",
        },
        {
            palavra: "Carro",
            imagem: "../Imagens/carro.png",
        },
        {
            palavra: "Galinha",
            imagem: "../Imagens/galinha.png",
        },
        {
            palavra: "Leão",
            imagem: "../Imagens/leao.png",
        },
        {
            palavra: "Pássaro",
            imagem: "../Imagens/passaro.png"
        },
        {
            palavra: "Peixe",
            imagem: "../Imagens/peixe.png"
        },
        {
            palavra: "Queijo",
            imagem: "../Imagens/queijo.png"
        }
    ]

    var palavra = "Cachorro" // Fazendo uma função pra testar um numero aleatorio de letras que devem aparecer
    var numeroDeLetras = function(palavra) {
        var valor = Math.random()
        if (valor >= palavra.length) {
            return valor
        }
        numeroDeLetras(palavra)
    }
    $scope.numeroDeLetras = numeroDeLetras(palavra) // Teste deu errado :(
})