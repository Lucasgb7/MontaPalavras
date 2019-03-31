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
            letras: "CVRAARÇU",
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

    $scope.selecionada = 0;
    $scope.selecionadaTAM = 5;
    $scope.index = [{ index: '0' }, { index: '1' }, { index: '2' }, { index: '3' }, { index: '4' }, { index: 'x' }, { index: 'x' }, { index: 'x' }, { index: 'x' }, { index: 'x' }];

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
            if (document.getElementById(elemento).value == "") {
                document.getElementById(elemento).value = value;
                break;
            }
        }
    }

    $scope.removeLetra = function(x) {
        //fazer funcao pra remover a letra do quadrado quando o usuario clica no msm
    }

    $scope.confirma = function() {
        var palavraPreenchida = "";
        for (var i = 0; i < $scope.selecionadaTAM; i++) {
            var elemento = "preencher" + i;
            palavraPreenchida += document.getElementById(elemento).value;
        }
        if (palavraPreenchida == $scope.imagens_palavras[$scope.selecionada].palavra) {
            var pontuacao = parseInt(document.getElementById('pontuacao').value, 10) + $scope.selecionadaTAM;
            document.getElementById('pontuacao').value = pontuacao;

            var anterior = $scope.selecionada;
            while (anterior == $scope.selecionada) {
                $scope.selecionada = Math.floor(Math.random() * 10);
            }
            $scope.selecionadaTAM = $scope.imagens_palavras[$scope.selecionada].palavra.length;
            for (var i = 0; i < 10; i++) {
                if (i < $scope.selecionadaTAM) {
                    $scope.index[i].index = i;
                } else {
                    $scope.index[i].index = 'x';
                }
            }
            document.getElementById('imagem').src = $scope.imagens_palavras[$scope.selecionada].imagem;

            var letras = $scope.imagens_palavras[$scope.selecionada].letras;
            var shuffledLetras = letras.split('').sort(function() { return 0.5 - Math.random() }).join('');

            document.getElementById('btn0').value = shuffledLetras.charAt(0);
            document.getElementById('btn0').innerHTML = shuffledLetras.charAt(0);
            document.getElementById('btn1').value = shuffledLetras.charAt(1);
            document.getElementById('btn1').innerHTML = shuffledLetras.charAt(1);
            document.getElementById('btn2').value = shuffledLetras.charAt(2);
            document.getElementById('btn2').innerHTML = shuffledLetras.charAt(2);
            document.getElementById('btn3').value = shuffledLetras.charAt(3);
            document.getElementById('btn3').innerHTML = shuffledLetras.charAt(3);
            document.getElementById('btn4').value = shuffledLetras.charAt(4);
            document.getElementById('btn4').innerHTML = shuffledLetras.charAt(4);
            document.getElementById('btn5').value = shuffledLetras.charAt(5);
            document.getElementById('btn5').innerHTML = shuffledLetras.charAt(5);
            document.getElementById('btn6').value = shuffledLetras.charAt(6);
            document.getElementById('btn6').innerHTML = shuffledLetras.charAt(6);
            document.getElementById('btn7').value = shuffledLetras.charAt(7);
            document.getElementById('btn7').innerHTML = shuffledLetras.charAt(7);
            document.getElementById('btn8').value = shuffledLetras.charAt(8);
            document.getElementById('btn8').innerHTML = shuffledLetras.charAt(8);
            document.getElementById('btn9').value = shuffledLetras.charAt(9);
            document.getElementById('btn9').innerHTML = shuffledLetras.charAt(9);

            for (var i = 0; i < $scope.selecionadaTAM; i++) {
                var elemento = "preencher" + i;
                document.getElementById(elemento).value = "";
            }
        } else {
            alert("TA ERRADO SEU MERDA!!!");
        }
    }
})