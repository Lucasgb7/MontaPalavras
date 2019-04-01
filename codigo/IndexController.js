app.controller('IndexController', function($scope) {
    $scope.imagens_palavras = [{
            palavra: "AVIÃO",
            letras: "MÍABVÃOWI",
            imagem: "../imagens/aviao.png",
            completada: false
        },
        {
            palavra: "BICICLETA",
            letras: "IÇCENLBVTÁIA",
            imagem: "../imagens/bicicleta.png",
            completada: false
        },
        {
            palavra: "BOLA",
            letras: "JLTARBOÃ",
            imagem: "../imagens/bola.png",
            completada: false
        },
        {
            palavra: "CACHORRO",
            letras: "PCQRJOCHAARÔÃ",
            imagem: "../imagens/cachorro.png",
            completada: false
        },
        {
            palavra: "CARRO",
            letras: "CVORAARÇU",
            imagem: "../imagens/carro.png",
            completada: false
        },
        {
            palavra: "GALINHA",
            letras: "BRIAZLGQTNAH",
            imagem: "../imagens/galinha.png",
            completada: false
        },
        {
            palavra: "LEÃO",
            letras: "ÕÃÊEILO",
            imagem: "../imagens/leao.png",
            completada: false
        },
        {
            palavra: "PÁSSARO",
            letras: "FAÁLARSPA",
            imagem: "../imagens/passaro.png",
            completada: false
        },
        {
            palavra: "PEIXE",
            letras: "VEVBXIPLE",
            imagem: "../imagens/peixe.png",
            completada: false
        },
        {
            palavra: "QUEIJO",
            letras: "KYEXOQJAÍIÛU",
            imagem: "../imagens/queijo.png",
            completada: false
        }
    ]
    $scope.faseDaVez = selecionaNovaFase() // Define a fase inicial

    function selecionaNovaFase() { // Seleciona uma nova fase
        if (!$scope.imagens_palavras.find(function(e) { return e.completada === false })) { zerouJogo() }
        // Verifica se todas as fases já foram completas
        do {
            var indice = Math.floor(Math.random() * $scope.imagens_palavras.length) // Pega um indice pelo vetor de palavras
        } while ($scope.imagens_palavras[indice].completada) // Verifica se já foi completada

        return $scope.imagens_palavras[indice] // Retorna a que não foi completada
    }

    function zerouJogo() {
        // Interface para qundo ele completou o jogo
    }

    $scope.addLetra = function(letra) {
        for (var i = 0; i < $scope.faseDaVez.palavra.length; i++) {
            var elemento = 'preencher' + i;
            if (document.getElementById(elemento).innerHTML == "") {
                document.getElementById(elemento).innerHTML = letra;
                break;
            }
        }
    }

    $scope.removeLetra = function(index) {
        var elemento = 'preencher' + index
        document.getElementById(elemento).innerHTML = ""
        document.getElementById(elemento).className = "mostrarLetras"
    }

    $scope.confirma = function() {
        var palavraPreenchida = "";
        for (var i = 0; i < $scope.faseDaVez.palavra.length; i++) {
            var elemento = "preencher" + i;
            palavraPreenchida += document.getElementById(elemento).innerHTML;
        }
        if (palavraPreenchida == $scope.faseDaVez.palavra) {
            var pontuacao = parseInt(document.getElementById('pontuacao').innerHTML, 10) + $scope.faseDaVez.palavra.length;
            document.getElementById('pontuacao').innerHTML = pontuacao;

            for (var i = 0; i < $scope.faseDaVez.palavra.length; i++) {
                var elemento = 'preencher' + i;
                document.getElementById(elemento).innerHTML = "";
            }



            alert("VOCCE EH MTT ESPECIAL!!!");



            $scope.faseDaVez = selecionaNovaFase()

        } else {
            for (var i = 0; i < $scope.faseDaVez.palavra.length; i++) {
                var elemento = 'preencher' + i;
                if (document.getElementById(elemento).innerHTML != $scope.faseDaVez.palavra.charAt(i)) {
                    document.getElementById(elemento).className = 'mostrarLetrasErrado';
                }
            }
        }
    }
})