/*var n1 = 1000

n1. toFixed(2)

var n2 = n1.toLocaleString ('pt-BR',{ style:'currency', currency : 'USD'})
console.log(n2)
/




<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos DOM</title>
    <style>
        div#area {
            font: normal 20pt Arial;
            background: rgb(36, 111, 36);
            color: rgb(255, 255, 255);
            width: 200px;
            height: 200px;
            line-height: 200px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div id= "area" onclick="clicar()" onmouseenter = "entrar()" onmouseout="sair()">
        interaja...

    </div>
<script>
     var a =window.document.getElementById('area')
     a.addEventListener('click', clicar)
     a.addEventListener('mouseenter', entrar)
     a.addEventListener('mouseout', sair)
    function clicar(){
        a.innerText = 'você é linda!'
        a.style.background = "red"
    }
    function entrar(){
        a.innerText = "Entrou!"
    }
    function sair(){
        a.innerText = "saiu!"
        a.style.background = 'green'
    }
</script>

</body>
</html>
*/