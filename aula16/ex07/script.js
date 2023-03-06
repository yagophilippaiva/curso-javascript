let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >=1 && Number(n) <= 100){
        return true
    } else {
        return false
    }

}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    
    }

}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('valor invalido ou ja digitado')
    }
    num.value = ''
    num.focus()
}
function verificar(){
    if (valores.length == 0){
        window.alert('ERRO. Preencha os dados e tente novamente')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = valores[0]
        let media = valores[0]
        for (let pos in valores){
            soma = valores[pos]+soma
            media = soma/tot
            if (valores[pos]>maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor= valores[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> A soma dos valores informados foi ${soma}.</p>`
        res.innerHTML += `<p> A media dos valores informados foi ${media}.</p>`

    }
}