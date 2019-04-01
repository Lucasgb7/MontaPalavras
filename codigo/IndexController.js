app.controller('IndexController', function($scope) {
    $scope.imagens_palavras = [{
            palavra: "AVIÃO",
            imagem: "../imagens/aviao.png",
            letras: "AVIÃOAUMWE"
        },
        {
            palavra: "BICICLETA",
            imagem: "../imagens/bicicleta.png",
            letras: "BICICLETAS"
        },
        {
            palavra: "BOLA",
            imagem: "../imagens/bola.png",
            letras: "BOLAIUCEHA"
        },
        {
            palavra: "CACHORRO",
            imagem: "../imagens/cachorro.png",
            letras: "CACHORROÇK"
        },
        {
            palavra: "CARRO",
            imagem: "../imagens/carro.png",
            letras: "CARROKÇQUO"
        },
        {
            palavra: "GALINHA",
            imagem: "../imagens/galinha.png",
            letras: "GALINHACEQ"
        },
        {
            palavra: "LEÃO",
            imagem: "../imagens/leao.png",
            letras: "LEÃOAUMINC"
        },
        {
            palavra: "PÁSSARO",
            imagem: "../imagens/passaro.png",
            letras: "PÁSSAROAÇZ"
        },
        {
            palavra: "PEIXE",
            imagem: "../imagens/peixe.png",
            letras: "PEIXESCHÇA"
        },
        {
            palavra: "QUEIJO",
            imagem: "../imagens/queijo.png",
            letras: "QUEIJOGKXS"
        }
    ]

    $scope.selecionada = 0;
    $scope.selecionadaTAM = 5;
    $scope.index = [{ index: '0' }, { index: '1' }, { index: '2' }, { index: '3' }, { index: '4' }, { index: 'x' }, { index: 'x' }, { index: 'x' }, { index: 'x' }, { index: 'x' }];

    $scope.addLetra = function(btn) {
        var id = 'btn' + btn;
        for (var i = 0; i < $scope.selecionadaTAM; i++) {
            var elemento = 'preencher' + i;
            if (document.getElementById(elemento).value == "") {
                document.getElementById(elemento).value = document.getElementById(id).value;
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