function resultado(){
var qtdCinco = document.getElementById("qtdCinco").value; 
console.log(qtdCinco)

var qtdDez= document.getElementById("qtdDez").value; 
console.log(qtdDez)

var qtdVinteCinco= document.getElementById("qtdVinteCinco").value; 
console.log(qtdVinteCinco)


var qtdCinqueta= document.getElementById("qtdCinqueta").value; 
console.log(qtdCinqueta)

vTotal = (qtdCinco * 0.05)  +  (qtdDez * 0.10) + (qtdVinteCinco * 0.25) + (qtdCinqueta * 0.50)
console.log(vTotal)

document.querySelector('#verificar').innerHTML = "<p> Quantidade de Moedas de  5 centados:"  + qtdCinco +  
" <p> Quantidade de Moedas de  10 centados:"  + qtdDez +  
" <p> Quantidade de Moedas de  25 centados:" + qtdVinteCinco  +  
" <p> Quantidade de Moedas de  50 centados:"  + qtdCinqueta +
"<p> Valor total: " + vTotal

}






