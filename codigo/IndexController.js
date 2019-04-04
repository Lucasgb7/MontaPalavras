app.controller('IndexController', function($scope) {
    $scope.imagens_palavras = [{
            palavra: "AVIÃO",
            letras: "ÃWAMÍVBIO",
            imagem: "../imagens/aviao.png",
            completada: false
        },
        {
            palavra: "BICICLETA",
            letras: "ÇBVICÁILTETCNA",
            imagem: "../imagens/bicicleta.png",
            completada: false
        },
        {
            palavra: "BOLA",
            letras: "JBROÃLTA",
            imagem: "../imagens/bola.png",
            completada: false
        },
        {
            palavra: "CACHORRO",
            letras: "ÔCQHRACROPOR",
            imagem: "../imagens/cachorro.png",
            completada: false
        },
        {
            palavra: "CARRO",
            letras: "KCRARÇOU",
            imagem: "../imagens/carro.png",
            completada: false
        },
        {
            palavra: "GALINHA",
            letras: "TAZLQANRHIBG",
            imagem: "../imagens/galinha.png",
            completada: false
        },
        {
            palavra: "LEÃO",
            letras: "IÃLOÕEÊ",
            imagem: "../imagens/leao.png",
            completada: false
        },
        {
            palavra: "PÁSSARO",
            letras: "LÁCARSPOAS",
            imagem: "../imagens/passaro.png",
            completada: false
        },
        {
            palavra: "PEIXE",
            letras: "BPIEQXLÊEV",
            imagem: "../imagens/peixe.png",
            completada: false
        },
        {
            palavra: "QUEIJO",
            letras: "ÍQYEJKOUXAÛI",
            imagem: "../imagens/queijo.png",
            completada: false
        }
    ]
    $scope.faseDaVez = selecionaNovaFase() // Define a fase inicial
    $scope.nivelAtual = 1
    $scope.valores = []

    function selecionaNovaFase() { // Seleciona uma nova fase
        if (!$scope.imagens_palavras.find(function(e) {
                return e.completada === false
            })) { zerouJogo() }
        // Verifica se todas as fases já foram completas
        do {
            var indice = Math.floor(Math.random() * $scope.imagens_palavras.length) // Pega um indice pelo vetor de palavras
        } while ($scope.imagens_palavras[indice].completada) // Verifica se já foi completada
        $scope.nivelAtual++ // Atualiza o nivel atual para o próximo
            $scope.tentativas = 0
        return $scope.imagens_palavras[indice] // Retorna a que não foi completada
    }

    function zerouJogo() {
        alert("PARABÉNS!")
    }

    $scope.addLetra = function(letra, index) {
        botao = "btn"+index
        if(document.getElementById(botao).className != "btn btn-primary btn-lg letraDesabilitada"){
            for (var i = 0; i < $scope.faseDaVez.palavra.length; i++) {
                var elemento = 'preencher' + i
                if (document.getElementById(elemento).innerHTML == "") {
                    document.getElementById(elemento).innerHTML = letra
                    document.getElementById(botao).className = "btn btn-primary btn-lg letraDesabilitada"
                    break
                }
            }
        }
    }

    $scope.removeLetra = function(index) {
        var elemento = 'preencher' + index
        value = document.getElementById(elemento).innerHTML
        document.getElementById(elemento).innerHTML = ""
        document.getElementById(elemento).className = "mostrarLetras"
        for(var i=0; i<$scope.faseDaVez.letras.length; i++){
            if($scope.faseDaVez.letras.charAt(i) == value){
                botao = "btn"+i
                if(document.getElementById(botao).className == "btn btn-primary btn-lg letraDesabilitada"){
                    document.getElementById(botao).className = "btn btn-primary btn-lg letras"
                    break
                } 
            }
        }
    }

    $scope.confirma = function() {
        if (document.getElementById('btn-confirma').innerHTML == 'Verificar Ortografia') {
            $scope.corrige()
        } else {
            $scope.next()
        }
    }

    $scope.corrige = function() {
        var palavraPreenchida = ""
        $scope.tentativas++
            for (var i = 0; i < $scope.faseDaVez.palavra.length; i++) {
                var elemento = "preencher" + i
                palavraPreenchida += document.getElementById(elemento).innerHTML;
            }
        if (palavraPreenchida == $scope.faseDaVez.palavra) {
            for (var i = 0; i < $scope.faseDaVez.palavra.length; i++) {
                var elemento = "preencher" + i
                document.getElementById(elemento).className = 'mostrarLetrasCerto'
            }

            document.getElementById('btn-confirma').innerHTML = 'Avançar'
        } else {
            if ($scope.tentativas >= 3) {
                for (var i = 0; i < $scope.faseDaVez.palavra.length; i++) {
                    var elemento = 'preencher' + i
                    if (document.getElementById(elemento).innerHTML != $scope.faseDaVez.palavra.charAt(i)) {
                        document.getElementById(elemento).className = 'mostrarLetrasErrado'
                    } else {
                        document.getElementById(elemento).className = 'mostrarLetrasCerto'
                    }
                }
            } else {
                alert('Algo de errado não está certo!')
            }
        }
    }

    $scope.next = function() {
        var pontuacao = parseInt(document.getElementById('pontuacao').innerHTML, 10)
        if ($scope.tentativas >= 3) {
            pontuacao += 1
        } else if ($scope.tentativas == 2) {
            pontuacao += 2
        } else {
            pontuacao += 3
        }
        document.getElementById('pontuacao').innerHTML = pontuacao

        for (var i = 0; i < $scope.faseDaVez.palavra.length; i++) {
            var elemento = 'preencher' + i
            document.getElementById(elemento).innerHTML = ""
            document.getElementById(elemento).className = 'mostrarLetras'
        }
        for(var i=0; i<$scope.faseDaVez.letras.length; i++){
            var botao = 'btn'+i
            document.getElementById(botao).className = "btn btn-primary btn-lg letras"
        }

        document.getElementById('btn-confirma').innerHTML = 'Verificar Ortografia'

        $scope.faseDaVez.completada = true

        $scope.faseDaVez = selecionaNovaFase()
    }
})